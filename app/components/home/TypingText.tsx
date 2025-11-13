"use client";

import React, { useEffect, useState } from 'react';

type TypingTextProps = {
  text: string;
  speed?: number; // ms per character
  className?: string;
  pauseOnComplete?: number; // ms to wait after finishing before restarting
};

const TypingText: React.FC<TypingTextProps> = ({
  text,
  speed = 50,
  className = '',
  pauseOnComplete = 5000, // 5 seconds pause
}) => {
  const [display, setDisplay] = useState('');
  const [caret, setCaret] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let mounted = true;
    let i = 0;

    const typeNext = () => {
      if (!mounted) return;
      if (i <= text.length) {
        setDisplay(text.slice(0, i));
        i += 1;
        setTimeout(typeNext, speed);
      } else {
        // Typing complete
        setIsTyping(false);
        // Wait for pauseOnComplete ms, then restart
        setTimeout(() => {
          if (mounted) {
            setDisplay('');
            setIsTyping(true);
            i = 0;
            typeNext();
          }
        }, pauseOnComplete);
      }
    };

    typeNext();

    return () => {
      mounted = false;
    };
  }, [text, speed, pauseOnComplete]);

  useEffect(() => {
    const t = setInterval(() => setCaret((c) => !c), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <span className={className} aria-label={text}>
      {display}
      <span className="inline-block ml-1" aria-hidden>
        {caret ? '|' : ' '}
      </span>
    </span>
  );
};

export default TypingText;
