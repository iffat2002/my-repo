import  { useEffect, useRef } from 'react';
import "../styles/components/scrambleText.css"


const ScrambleText = ({ text }) => {
  const containerRef = useRef(null);
  const scrambleChars = "█▓▒░!<>-_\\/[]{}—=+*^?#";

useEffect(() => {
  const container = containerRef.current;
  if (!container || container.dataset.scrambled === 'true') return;

  container.dataset.scrambled = 'true';
  container.innerHTML = '';

  const words = text.split(' '); // split by words

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
      container.appendChild(document.createTextNode(' ')); // normal space
    }
  });
}, [text]);



  return <div ref={containerRef} className="scramble-text" />;
};

export default ScrambleText;
