import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      company: 'Tech Innovators Inc.',
      quote: 'Clyra transformed our business with their cutting-edge data analytics solutions. Their insights have been invaluable to our growth.'
    },
    {
      name: 'Jane Smith',
      company: 'Global Retail Co.',
      quote: 'The custom software developed by Clyra has significantly improved our operational efficiency. Their team\'s expertise is unmatched.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Client Testimonials
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg"
            >
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div className="text-sm text-gray-400">{testimonial.company}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;