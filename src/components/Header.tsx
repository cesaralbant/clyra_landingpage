import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-center items-center">
          <ul className="flex space-x-1 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-full px-2 py-1">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
              >
                <motion.a
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition duration-300 futuristic-text"
                  animate={{
                    scale: hoveredItem === item.name ? 1.2 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {item.name}
                </motion.a>
                {hoveredItem === item.name && (
                  <motion.div
                    className="absolute inset-0 bg-white bg-opacity-20 rounded-full -z-10"
                    layoutId="navBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;