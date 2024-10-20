import React from 'react';
import { motion } from 'framer-motion';
import { Code, BarChart2, Database, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Code className="h-12 w-12" />, title: 'Custom Software', description: 'Tailored solutions to meet your unique business needs' },
    { icon: <BarChart2 className="h-12 w-12" />, title: 'Data Analytics', description: 'Transform raw data into actionable insights' },
    { icon: <Database className="h-12 w-12" />, title: 'Data Science', description: 'Advanced algorithms and machine learning solutions' },
    { icon: <Globe className="h-12 w-12" />, title: 'Global Reach', description: 'Serving clients worldwide from our base in Quito' },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          OUR CORE CAPABILITIES
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 text-white">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 futuristic-text">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;