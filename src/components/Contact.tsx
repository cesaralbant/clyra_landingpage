import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          CONTACT US
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-6 rounded-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2 futuristic-text">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2 futuristic-text">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2 futuristic-text">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white" 
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full futuristic-text">Send Message</button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 neon-text neon-white futuristic-text">Contact Information</h3>
              <div className="flex items-center mb-4">
                <Mail className="h-5 w-5 mr-2 text-white" />
                <span className="text-gray-300 futuristic-text">cesaralbant@gmail.com</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 mr-2 text-white" />
                <span className="text-gray-300 futuristic-text">+593 2 123 4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-white" />
                <span className="text-gray-300 futuristic-text">Av. 12 de Octubre, Quito, Ecuador</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;