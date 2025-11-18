import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us | Apple Tracker',
  description: 'Get in touch with us for all your GPS tracking needs. We provide tracking solutions for bikes, cars, and heavy vehicles.',
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-brand-50 to-brand-100/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(56,189,248,0.28),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_70%,rgba(29,78,216,0.2),transparent_60%)]" />
      <div className="absolute inset-0 opacity-10 pattern-dots" />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
