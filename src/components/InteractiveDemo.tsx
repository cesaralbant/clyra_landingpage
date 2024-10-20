import React, { useEffect, useRef } from 'react';
import styles from './InteractiveDemo.module.css';

const InteractiveDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStar = () => {
      if (containerRef.current) {
        const star = document.createElement('div');
        star.className = styles.star;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        containerRef.current.appendChild(star);

        setTimeout(() => {
          star.remove();
        }, 3000);
      }
    };

    const interval = setInterval(createStar, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <h1 className={styles.title}>
        <span className={styles.rainbowText}>Interactive</span>{' '}
        <span className={styles.rainbowText}>Web</span>{' '}
        <span className={styles.rainbowText}>Page</span>
      </h1>
      <p className={styles.description}>
        Hover over the words to see the rainbow effect. Watch the background for shooting stars!
      </p>
    </div>
  );
};

export default InteractiveDemo;