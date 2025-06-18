import { useEffect, useRef } from 'react';
import "../styles/components/scrambleText.css";
import SplitType from 'split-type';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scrambleChars = "█▓▒░!<>-_\\/[]{}—=+*^?#";

const ScrambleText = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const split = new SplitType(container, { types: 'lines, words, chars' });

    // Add scramble effect to each char
    const chars = container.querySelectorAll('.char');

    chars.forEach((span) => {
      const originalChar = span.textContent;
      let scrambleInterval;
      let scrambleTimeout;
      let isScrambling = false;

      const startScramble = () => {
        if (isScrambling) return;
        if (container.closest('.feed-info-container')) {return};
        isScrambling = true;
        span.classList.add('scrambling');

        scrambleInterval = setInterval(() => {
          span.textContent = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }, 30);
      };

      const stopScramble = () => {
        if (!isScrambling) return;

        scrambleTimeout = setTimeout(() => {
          clearInterval(scrambleInterval);
          span.textContent = originalChar;
          span.classList.remove('scrambling');
          isScrambling = false;
        }, 200);
      };

      span.addEventListener('mouseenter', () => {
        clearTimeout(scrambleTimeout);
        startScramble();
      });

      span.addEventListener('mouseleave', () => {
        stopScramble();
      });
    });

    // text animation
    const lines = container.querySelectorAll('.line');
    lines.forEach(line => {
    
   
  const wrapper = document.createElement('div');
  wrapper.classList.add('line-wrapper');
  line.parentNode.insertBefore(wrapper, line);
  wrapper.appendChild(line);
    const isHero = line.closest('.hero-content .top');
  const delay = isHero ? 1 : 0;
    const isFooter = line.closest('.feed-footer');
  gsap.fromTo(
  lines,
  {
    y:  isHero ? "100%" : '80px',
    rotate: 4,
    opacity: 0,
  },
  {
    y: 0,
    rotate: 0,
    opacity: 1,
    duration: 0.8,
    delay,
    
    ease: 'power2.in',
    stagger: 0.1,
    scrollTrigger: {
      trigger: container,
    
      start: isFooter ? "top 98%" : 'top 90%',
    },
  }
);

});
    return () => split.revert();

  }, []);

  return (
    <div ref={containerRef} className="scramble-text">
      {text}
    </div>
  );
};

export default ScrambleText;
