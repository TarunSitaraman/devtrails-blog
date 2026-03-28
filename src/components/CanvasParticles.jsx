import { useEffect, useRef } from 'react';

export default function CanvasParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particles = [];
    const particleCount = 120;
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.init();
      }
      init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.color = '#96f8ff';
      }
      update(scrollProgress) {
        // Brownian Drift
        this.x += this.vx;
        this.y += this.vy;

        // Re-center on edge reach
        if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if(this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Pooling Logic (Scroll 100% -> Center Bottom)
        if (scrollProgress > 0.5) {
          const factor = (scrollProgress - 0.5) * 2;
          const targetX = canvas.width / 2;
          const targetY = canvas.height * 0.9;
          
          this.x += (targetX - this.x) * factor * 0.02;
          this.y += (targetY - this.y) * factor * 0.02;
          
          // Transition Color to Cyber Green
          this.color = scrollProgress > 0.8 ? '#00fe66' : '#96f8ff';
        } else {
          // Revert to original color if scrolled back up
          this.color = '#96f8ff';
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const render = () => {
      const scrollY = window.scrollY;
      const winH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      // Calculate Scroll progress exactly as Stitch does
      const totalScrollProgress = docH > winH ? scrollY / (docH - winH) : 0;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update(totalScrollProgress);
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
}
