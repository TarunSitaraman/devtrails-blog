import { useEffect, useRef, useState } from 'react';
import FeatureModal from './FeatureModal';

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
    action: 'Explore Modules',
    locked: false,
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
    action: 'View Schema',
    locked: false,
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
    action: 'Live Demo',
    locked: false,
  },
  {
    layer: 'Scaling Layer',
    title: 'Week 4: Upcoming Deployment',
    icon: 'lock',
    content: 'The blueprint for scaling the decentralized pool across multi-city risk zones. This week will focus on load-testing the smart contracts and expanding the Agentic Vision Model to process vernacular audio claims.',
    glowClass: 'border border-outline-variant/30 opacity-50',
    accentColor: 'text-on-surface-variant',
    bgLight: 'bg-surface-variant/20',
    borderLight: 'border-outline-variant/20',
    tags: ['IPFS', 'NLP'],
    action: 'Classified',
    locked: true,
  },
  {
    layer: 'Governance Layer',
    title: 'Week 5: Upcoming Deployment',
    icon: 'lock',
    content: 'Introducing DAO-driven dispute resolution where high-tier "Veteran" delivery partners act as decentralized Oracles to resolve complex Quarantine claims. Establishing community governance frameworks.',
    glowClass: 'border border-outline-variant/30 opacity-50',
    accentColor: 'text-on-surface-variant',
    bgLight: 'bg-surface-variant/20',
    borderLight: 'border-outline-variant/20',
    tags: ['DAO', 'GOV'],
    action: 'Classified',
    locked: true,
  },
  {
    layer: 'Finality Layer',
    title: 'Week 6: Upcoming Deployment',
    icon: 'lock',
    content: 'The culmination of the QuickCover spatial architecture. Hardening security, auditing the Isolation Forest biases, and performing the final deployment to the Guidewire mainnet for judging.',
    glowClass: 'border border-outline-variant/30 opacity-50',
    accentColor: 'text-on-surface-variant',
    bgLight: 'bg-surface-variant/20',
    borderLight: 'border-outline-variant/20',
    tags: ['SEC', 'NET'],
    action: 'Classified',
    locked: true,
  }
];

export default function TimelineSpine() {
  const containerRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.helix-card');
      const winH = window.innerHeight;
      const viewCenter = winH / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        
        let progress = (cardCenter - viewCenter) / viewCenter;
        
        // 1. Create a "Reading Focus Deadzone"
        // If the card is within 25% of the center, force progress to 0 (perfectly flat and centered)
        const deadzone = 0.25; 
        let visualProgress = 0;
        if (progress > deadzone) {
            visualProgress = (progress - deadzone) / (1 - deadzone);
        } else if (progress < -deadzone) {
            visualProgress = (progress + deadzone) / (1 - deadzone);
        }
        
        visualProgress = Math.max(-1.2, Math.min(1.2, visualProgress));

        // 2. Apply smoother, gentler 3D transformations for the backgrounded cards
        const translateX = Math.sin(visualProgress * Math.PI) * 120;
        const translateZ = Math.abs(visualProgress) * -400; // Push back linearly instead of cosine curvature
        const rotateY = visualProgress * 30; // Gentler tilt
        const rotateZ = visualProgress * 3;
        const opacity = Math.max(0.15, 1 - Math.abs(visualProgress) * 0.8);

        card.style.transform = `
            translateX(${translateX}px) 
            translateZ(${translateZ}px) 
            rotateY(${rotateY}deg) 
            rotateZ(${rotateZ}deg)
        `;
        card.style.opacity = opacity;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="helix-viewport relative flex flex-col items-center pt-10 pb-40 lg:pt-10 lg:pb-60 justify-center gap-[400px]" ref={containerRef}>
        {cardsData.map((data, index) => (
          <div key={index} className={`helix-card glass-card rounded-[40px] p-8 w-full max-w-xl ${data.glowClass}`} data-index={index}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className={`${data.accentColor} text-xs font-bold uppercase tracking-widest block mb-2`}>{data.layer}</span>
                <h2 className={`text-3xl font-bold tracking-tight ${data.locked ? 'text-on-surface-variant blur-[1px]' : 'text-white'}`}>{data.title}</h2>
              </div>
              <div className={`w-12 h-12 rounded-2xl ${data.bgLight} flex items-center justify-center border ${data.borderLight}`}>
                <span className={`material-symbols-outlined ${data.accentColor}`}>{data.icon}</span>
              </div>
            </div>
            
            <p className={`leading-relaxed mb-8 ${data.locked ? 'text-[#55545b]' : 'text-on-surface-variant'}`}>
                {data.content}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {data.tags.map((tag, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-surface-container bg-surface-bright flex items-center justify-center text-[10px] ${data.locked ? 'text-[#55545b]' : 'text-white'}`}>
                    {tag}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => !data.locked && setActiveModal(index)}
                disabled={data.locked}
                className={`${data.accentColor} text-sm font-bold flex items-center gap-2 group ${data.locked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:underline'}`}
              >
                {data.action} <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">{data.locked ? 'lock' : 'arrow_forward'}</span>
              </button>
            </div>
            {data.locked && (
                <div className="absolute inset-0 bg-surface/20 backdrop-blur-[2px] rounded-[40px] z-10 pointer-events-none flex items-center justify-center">
                    <div className="px-6 py-2 rounded-full bg-surface-variant border border-outline-variant/30 shadow-2xl flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#acaab1] text-sm">lock</span>
                        <span className="text-[#acaab1] text-xs font-bold uppercase tracking-widest">Locked Pipeline</span>
                    </div>
                </div>
            )}
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

      <FeatureModal itemId={activeModal} onClose={() => setActiveModal(null)} />
    </>
  );
}
