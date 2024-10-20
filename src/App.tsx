import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { createStar } from './utils/starAnimation';

function App() {
  useEffect(() => {
    const interval = setInterval(createStar, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      <div id="star-container" className="fixed inset-0 pointer-events-none z-10"></div>
      <Header />
      <Hero />
      <Features />
      <About />
      <Services />
      <Portfolio />
      <Partners />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;