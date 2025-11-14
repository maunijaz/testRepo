import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import ParallaxOnView from '../common/ParallaxOnView';

const ContactInfo = () => {
  const businessHours = [
    { day: 'Monday - Saturday', hours: '10:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="bg-white p-6 rounded-lg border border-gray-300">
            <h3 className="text-xl font-semibold text-black mb-4">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiPhone className="text-black w-5 h-5" />
                <span className="text-gray-700">0812823002</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-black w-5 h-5" />
                <span className="text-gray-700">appleetrack@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-black w-5 h-5 mt-1" />
                <span className="text-gray-700">
                  Shahi plaza flat No 2 Archer road<br />
                  Quetta<br />
                  Pakistan
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <ParallaxOnView className="bg-white p-6 rounded-lg border border-gray-300" speed={0.12} max={80}>
            <h3 className="text-xl font-semibold text-black mb-4">Business Hours</h3>
            <div className="space-y-4">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FiClock className="text-black w-5 h-5 mt-1" />
                  <div>
                    <p className="font-medium text-black">{schedule.day}</p>
                    <p className="text-gray-700">{schedule.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </ParallaxOnView>

          {/* Map */}
          <ParallaxOnView className="bg-white p-6 rounded-lg border border-gray-300 md:col-span-2 lg:col-span-1" speed={0.08} max={120}>
            <h3 className="text-xl font-semibold text-black mb-4">Location</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.544812229635!2d67.0130506!3d30.1929942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2df000567e4a7%3A0x22d82c03f0251b8d!2sApple%20tracker%20service%20PTV(LTD)!5e0!3m2!1sen!2s!4v1762945497260!5m2!1sen!2s"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
            </div>
          </ParallaxOnView>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;