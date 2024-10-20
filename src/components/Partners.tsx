import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Partners = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const partners = [
    { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
    { name: 'Universidad San Francisco de Quito', logo: 'https://www.usfq.edu.ec/sites/default/files/inline-images/logo%20USFQ%20horizontal%20azul.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' },
    { name: 'Apple', logo: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg' },
    { name: 'IBM', logo: 'https://1000logos.net/wp-content/uploads/2017/02/IBM-Logo.png' },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 0.5;
      if (position <= -100) {
        position = 0;
      }
      carousel.style.transform = `translateX(${position}%)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.5 }}
          className="section-heading mb-16"
        >
          OUR PARTNERS
        </motion.h2>
        <div ref={ref} className="overflow-hidden">
          <div ref={carouselRef} className="flex whitespace-nowrap">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="inline-block w-1/3 px-4">
                <img src={partner.logo} alt={partner.name} className="h-16 object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;