import React from 'react';
import { motion } from 'framer-motion';
import { Code, BarChart2, Database } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Code className="h-12 w-12" />, title: "Software Development", description: "From web and mobile applications to enterprise software, we create custom solutions that drive efficiency and growth." },
    { icon: <BarChart2 className="h-12 w-12" />, title: "Data Analytics", description: "Unlock the power of your data with our advanced analytics services, turning raw information into strategic insights." },
    { icon: <Database className="h-12 w-12" />, title: "Data Science", description: "Leverage machine learning and AI to predict trends, automate processes, and make data-driven decisions." }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          OUR SERVICES
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg"
            >
              <div className="mb-4 text-white">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 futuristic-text">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;