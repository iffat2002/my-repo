import React, { useEffect, useRef, useState } from 'react';

const Loader = () => {
  const canvasRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01#@*%&<>+-';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    let animation;

    function draw() {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#ccc';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animation = requestAnimationFrame(draw);
    }

    draw();

    const timer = setTimeout(() => {
      setFadeOut(true);           
      cancelAnimationFrame(animation);
    }, 3200); 

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <div className={`loader-screen ${fadeOut ? 'fade-out' : ''}`}>
      <canvas ref={canvasRef} className="matrix-canvas" />
      {/* <h1 className="crt-text" data-text="SERTN AI">SERTN AI</h1> */}
    </div>
  );
};

export default Loader;
