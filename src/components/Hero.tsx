import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { createStar } from '../utils/starAnimation';

const Hero = () => {
  const controls = useAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, [controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      const count = isHovering ? 5 : 1;
      for (let i = 0; i < count; i++) {
        createStar();
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27872-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 neon-text neon-white futuristic-text tracking-wider"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span>INNOVATE.</span>{' '}
            <span>ANALYZE.</span>{' '}
            <span>EVOLVE.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 futuristic-text max-w-3xl mx-auto">
            Empowering businesses with cutting-edge software solutions and data-driven insights
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center futuristic-text"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;