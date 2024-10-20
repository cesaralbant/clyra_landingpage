import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    { name: 'Ana Rodriguez', role: 'CEO & Data Scientist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Carlos Mendez', role: 'CTO & Software Architect', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Maria Sanchez', role: 'Lead Data Analyst', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  return (
    <section id="team" className="py-20 blur-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          OUR TEAM
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-full">
                <img src={member.image} alt={member.name} className="w-48 h-48 object-cover mx-auto transition-transform duration-300 hover:scale-110 grayscale" />
              </div>
              <h3 className="text-xl font-semibold mb-1 neon-text neon-white futuristic-text">{member.name}</h3>
              <p className="text-gray-400 futuristic-text">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;