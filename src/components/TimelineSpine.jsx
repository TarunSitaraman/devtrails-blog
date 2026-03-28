import { useEffect, useRef } from 'react';

const cardsData = [
  {
    layer: 'Protocol Layer',
    title: 'Week 1: Why Should the Weather Cost You Your Wages?',
    icon: 'layers',
    content: "India’s 15 million platform-based delivery partners lose 20 to 30 percent of their daily income to external disruptions like extreme weather. Our breakthrough: The driver shouldn't pay a single rupee. We architected a consumer-funded parametric model embedding a ₹2 to ₹5 micro-surcharge at the consumer's checkout, aggregating into a self-balancing pool equivalent to a ₹391 weekly premium.",
    glowClass: 'kinetic-glow-blue',
    accentColor: 'text-primary',
    bgLight: 'bg-primary/10',
    borderLight: 'border-primary/20',
    tags: ['JS', 'TX'],
    action: 'Explore Modules'
  },
  {
    layer: 'Execution Layer',
    title: 'Week 2: Surviving the Syndicate',
    icon: 'database',
    content: '24 hours before the deadline, a regulatory shock hit: a 500-worker GPS-spoofing syndicate was draining beta platforms. We pivoted overnight, deploying an Isolation Forest AI to catch impossible physics and teleportation. For honest workers caught in real storms, we built a Quarantine workflow adjudicated by an Agentic GenAI Vision Model. This secured us a 4-Star Rating and DC 32,000!',
    glowClass: 'kinetic-glow-green',
    accentColor: 'text-secondary',
    bgLight: 'bg-secondary/10',
    borderLight: 'border-secondary/20',
    tags: ['L2', 'ZK'],
    action: 'View Schema'
  },
  {
    layer: 'Interaction Layer',
    title: 'Week 3: Moving from Mock to Machine',
    icon: 'view_quilt',
    content: 'Phase 2 is about execution. We are stripping out our Phase 1 stubs and wiring up real-world intelligence. We are integrating live APIs (OpenWeatherMap and AQI) to trigger automated claims. Our XGBoost pricing engine is actively scaling the micro-surcharge based on hyper-local weather. We also added explicit systemic exclusions and Aggregate Stop-Loss Reinsurance to protect against cluster risks.',
    glowClass: 'kinetic-glow-blue',
    accentColor: 'text-primary',
    bgLight: 'bg-primary/10',
    borderLight: 'border-primary/20',
    tags: ['UI', 'UX'],
    action: 'Live Demo'
  }
];

export default function TimelineSpine() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.helix-card');
      const winH = window.innerHeight;
      const viewCenter = winH / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        
        // Map local card progress relative to viewport center (-1 to 1)
        let progress = (cardCenter - viewCenter) / viewCenter;
        progress = Math.max(-1.5, Math.min(1.5, progress));

        // 3D Math Logic exactly identically to Stitch output
        const translateX = Math.sin(progress * Math.PI) * 150;
        const translateZ = (1 - Math.cos(progress * Math.PI)) * -400;
        const rotateY = progress * 45;
        const rotateZ = progress * 5;
        const opacity = Math.max(0.1, 1 - Math.abs(progress) * 0.5);

        card.style.transform = `
            translateX(${translateX}px) 
            translateZ(${translateZ}px) 
            rotateY(${rotateY}deg) 
            rotateZ(${rotateZ}deg)
        `;
        card.style.opacity = opacity;
      });
    };

    // Initial positioning
    handleScroll();
    
    // Smooth high framerate scroll bind
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="helix-viewport relative min-h-[1536px] flex flex-col items-center justify-center gap-[307px]" ref={containerRef}>
        {cardsData.map((data, index) => (
          <div key={index} className={`helix-card glass-card rounded-[40px] p-8 w-full max-w-xl ${data.glowClass}`} data-index={index}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className={`${data.accentColor} text-xs font-bold uppercase tracking-widest block mb-2`}>{data.layer}</span>
                <h2 className="text-3xl font-bold text-white tracking-tight">{data.title}</h2>
              </div>
              <div className={`w-12 h-12 rounded-2xl ${data.bgLight} flex items-center justify-center border ${data.borderLight}`}>
                <span className={`material-symbols-outlined ${data.accentColor}`}>{data.icon}</span>
              </div>
            </div>
            
            <p className="text-on-surface-variant leading-relaxed mb-8">
                {data.content}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {data.tags.map((tag, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-surface-container bg-surface-bright flex items-center justify-center text-[10px] text-white">
                    {tag}
                  </div>
                ))}
              </div>
              <button className={`${data.accentColor} text-sm font-bold flex items-center gap-2 group`}>
                {data.action} <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Liquidity Pool Transformation Zone */}
      {/*
      <section className="mt-32 py-32 text-center relative z-20">
        <div className="absolute inset-0 bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Liquidity Realized</h3>
        <p className="text-secondary font-bold tracking-widest text-sm uppercase">Particles coalescing at the core</p>
      </section>
      */}
    </>
  );
}
