import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 blur-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          ABOUT CLYRA
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 futuristic-text">Pioneering the Future of Software and Data</h3>
            <p className="text-gray-300 mb-4">
              At Clyra, we're not just building software; we're shaping the future of business through innovative technology and data-driven solutions. Based in Quito, Ecuador, our global reach allows us to serve clients worldwide with cutting-edge expertise in software development, data analytics, and data science.
            </p>
            <p className="text-gray-300">
              Our mission is to empower businesses of all sizes with the tools and insights they need to thrive in the digital age. With a team of passionate experts and a commitment to excellence, we're ready to take on your most complex challenges and turn them into opportunities for growth.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-6 rounded-lg"
          >
            <h4 className="text-xl font-semibold mb-4 futuristic-text">Why Choose Clyra?</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Cutting-edge technology expertise</li>
              <li>• Tailored solutions for your unique needs</li>
              <li>• Data-driven approach to problem-solving</li>
              <li>• Global perspective with local insights</li>
              <li>• Commitment to innovation and excellence</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;