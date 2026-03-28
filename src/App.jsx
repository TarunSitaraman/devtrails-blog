import { useEffect } from 'react';
import './App.css';
import CanvasParticles from './components/CanvasParticles';
import TimelineSpine from './components/TimelineSpine';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth, fluid, weightless scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-on-background selection:bg-primary selection:text-on-primary-fixed min-h-screen relative font-['Space_Grotesk']">
      <CanvasParticles />
      <div className="energy-pillar"></div>
      
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      
      <main className="w-full pt-16 pb-64 px-8 min-h-screen overflow-x-hidden">
        <Hero />
        <TimelineSpine />
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
