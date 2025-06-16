import  { useEffect, useRef } from 'react';
import "../styles/components/scrambleText.css";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ScrambleText = ({ text }) => {
  const containerRef = useRef(null);
  const scrambleChars = "█▓▒░!<>-_\\/[]{}—=+*^?#";

useEffect(() => {
  const container = containerRef.current;
  if (!container || container.dataset.scrambled === 'true') return;

  container.dataset.scrambled = 'true';
  container.innerHTML = '';

  const words = text.split(' '); 

  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement('span');
    wordSpan.classList.add('word');
    
    [...word].forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.classList.add('char');
      wordSpan.appendChild(span);

      let scrambleInterval;
      let scrambleTimeout;
      let isScrambling = false;
      const originalChar = char;

      const startScramble = () => {
        if (isScrambling) return;
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

    container.appendChild(wordSpan);
    if (wordIndex !== words.length - 1) {
      container.appendChild(document.createTextNode(' ')); 
    }
  }); 
  
    if (container?.closest(".hero")) return;
     if (container?.closest(".accordion")) return;

  if (container) {
    let start= "90%"
        if (container?.closest(".feed-footer")){
          start="100%"
        }
      gsap.fromTo(
        container,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay:0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: `top ${start}`, 
        
             toggleActions: "play none play reset", 
            
          },
        }
      );
    }

  

}, [text]);




  return <div ref={containerRef} className="scramble-text" />;
};

export default ScrambleText;
