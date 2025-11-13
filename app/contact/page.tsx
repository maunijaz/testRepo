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
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
