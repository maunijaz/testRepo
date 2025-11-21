'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  vehicleType: 'bike' | 'car' | 'truck' | 'other';
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    vehicleType: 'car',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Format message for WhatsApp
      const whatsappNumber = '923168297204';
      const message = `Hello Apple Tracker Team! 👋

I hope this message finds you well. I would like to inquire about your GPS tracking services.

*Contact Details:*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🚗 *Vehicle Type:* ${formData.vehicleType.charAt(0).toUpperCase() + formData.vehicleType.slice(1)}

*Message:*
━━━━━━━━━━━━━━━━━━━━
${formData.message}

━━━━━━━━━━━━━━━━━━━━
Looking forward to hearing from you!

Best regards,
${formData.name}`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Open WhatsApp with the message
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        vehicleType: 'car',
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-gray-50 shadow-lg rounded-2xl p-10 border border-gray-300"
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="text-3xl font-bold text-black mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                className={`mt-1 block w-full rounded-lg border ${
                  errors.name ? 'border-red-400 focus:ring-red-300' : 'border-gray-300'
                } bg-white py-3 px-4 text-base text-black placeholder-gray-400 shadow-sm transition-shadow duration-200 focus:shadow-lg focus:border-black focus:ring-2 focus:ring-gray-400 focus:outline-none`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className={`mt-1 block w-full rounded-lg border ${
                  errors.email ? 'border-red-400 focus:ring-red-300' : 'border-gray-300'
                } bg-white py-3 px-4 text-base text-black placeholder-gray-400 shadow-sm transition-shadow duration-200 focus:shadow-lg focus:border-black focus:ring-2 focus:ring-gray-400 focus:outline-none`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                className={`mt-1 block w-full rounded-lg border ${
                  errors.phone ? 'border-red-400 focus:ring-red-300' : 'border-gray-300'
                } bg-white py-3 px-4 text-base text-black placeholder-gray-400 shadow-sm transition-shadow duration-200 focus:shadow-lg focus:border-black focus:ring-2 focus:ring-gray-400 focus:outline-none`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
                Vehicle Type
              </label>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-base text-black shadow-sm transition-shadow duration-200 focus:shadow-lg focus:border-black focus:ring-2 focus:ring-gray-400 focus:outline-none appearance-none"
              >
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="truck">Truck</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border ${
                  errors.message ? 'border-red-400 focus:ring-red-300' : 'border-gray-300'
                } bg-white py-3 px-4 text-base text-black placeholder-gray-400 shadow-sm transition-shadow duration-200 focus:shadow-lg focus:border-black focus:ring-2 focus:ring-gray-400 focus:outline-none`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-md text-lg font-semibold text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition transform active:scale-95 duration-150"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;