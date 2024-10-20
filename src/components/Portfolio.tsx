import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    { title: 'E-commerce Platform', description: 'Custom-built solution for a major retailer', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { title: 'Predictive Maintenance System', description: 'AI-powered system for manufacturing industry', image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { title: 'Financial Analytics Dashboard', description: 'Real-time data visualization for financial institutions', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { title: 'Smart City Infrastructure', description: 'IoT-based urban management system', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { title: 'Quantum Computing Simulator', description: 'Advanced quantum algorithm testing platform', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading mb-16"
        >
          OUR PORTFOLIO
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <a href="#" className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;