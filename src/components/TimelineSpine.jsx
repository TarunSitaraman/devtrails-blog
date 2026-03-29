import { useEffect, useRef, useState } from 'react';
import FeatureModal from './FeatureModal';

const cardsData = [
  {
    layer: 'Protocol Layer',
    title: 'Week 1: The Ideation',
    icon: 'layers',
    content: "India’s 15 million delivery partners can lose up to 30% of their income to disruptions like extreme weather, flooded roads, and platform outages — events completely outside their control. Yet the people powering the convenience economy often have no financial safety net when work suddenly stops.\n\nOur breakthrough was simple: the driver pays nothing.\n\nQuickCover uses a ₹2–₹5 customer micro-surcharge at checkout to build a self-balancing protection pool, turning small per-order contributions into meaningful income protection. By combining this with real-time disruption triggers, QuickCover enables instant payouts when disruptions strike — delivering support exactly when workers need it most.",
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
    title: 'Week 2: From Idea to Execution',
    icon: 'database',
    content: "In Week 2, we moved from idea to execution — building a resilient foundation powered by a Node.js/Express backend and PostgreSQL (Supabase) for real-time state management.\n\nSimultaneously, we designed the mobile experience in Figma around a “one-handed usability” philosophy to ensure interactions remain fast mid-delivery. With high-contrast “Insurance Active” banners and a clear “Today’s Journey” timeline, trust is built instantly.\n\nTesting the system against simulated regulatory shocks, we implemented robust anti-spoofing measures by cross-verifying GPS data, telematics, and OS-level signals — proving a complex model can still be a simple, reliable product.",
    glowClass: 'kinetic-glow-green',
    accentColor: 'text-secondary',
    bgLight: 'bg-secondary/10',
    borderLight: 'border-secondary/20',
    tags: ['NODE', 'UX', 'DB'],
    action: 'View Architecture',
    locked: false,
  },
  {
    layer: 'Product Layer',
    title: 'Week 3: Product, APIs, and Intelligence',
    icon: 'smartphone',
    content: "Week 3 marked our transition into the scale phase, focusing on connecting backend logic, fraud intelligence, and user flows. We began developing the React Native app using Expo, prioritizing a high-trust interface with an “Insurance Active” banner and a zero-touch claims dashboard to make protection feel visible and immediate.\n\nA major focus was integrating our core REST APIs—like /accept-trip and /trigger-disruption—so policy activation stays aligned with real-time risk. We simultaneously upgraded the Isolation Forest fraud model to detect GPS spoofing and refined the XGBoost pricing engine to respond to hyper-local risk.\n\nUltimately, this week was about turning automation into action — bringing us closer to a system where a worker can move from a verified disruption to a payout in under 40 minutes.",
    glowClass: 'kinetic-glow-blue',
    accentColor: 'text-primary',
    bgLight: 'bg-primary/10',
    borderLight: 'border-primary/20',
    tags: ['API', 'RN', 'AI'],
    action: 'View Architecture',
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
      
      const cards = containerRef.current.querySelectorAll('.fade-card');
      const winH = window.innerHeight;
      const viewCenter = winH / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        
        const distanceFromCenter = Math.abs(cardCenter - viewCenter);
        const normalized = Math.min(distanceFromCenter / (winH * 0.6), 1);
        
        const ease = Math.pow(normalized, 1.2);
        
        const opacity = 1 - (ease * 0.85); 
        const scale = 1 - (ease * 0.08);   

        card.style.transform = `scale(${scale})`;
        card.style.opacity = Math.max(0.15, opacity);
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
      <section className="relative flex flex-col items-center pt-24 pb-40 lg:pt-32 lg:pb-60 justify-center gap-16 md:gap-24" ref={containerRef}>
        {cardsData.map((data, index) => (
          <div key={index} className={`fade-card glass-card rounded-[40px] p-8 w-full max-w-xl transition-none ${data.glowClass}`} data-index={index}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className={`${data.accentColor} text-xs font-bold uppercase tracking-widest block mb-2`}>{data.layer}</span>
                <h2 className={`text-3xl font-bold tracking-tight ${data.locked ? 'text-on-surface-variant blur-sm select-none opacity-50' : 'text-white'}`}>{data.title}</h2>
              </div>
              <div className={`w-12 h-12 rounded-2xl ${data.bgLight} flex items-center justify-center border ${data.borderLight}`}>
                <span className={`material-symbols-outlined ${data.accentColor}`}>{data.icon}</span>
              </div>
            </div>
            
            <p className={`whitespace-pre-line leading-relaxed mb-8 ${data.locked ? 'text-[#55545b] blur-sm select-none opacity-50' : 'text-on-surface-variant'}`}>
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
                <div className="absolute inset-0 bg-surface/20 backdrop-blur-sm rounded-[40px] z-10 pointer-events-none flex items-center justify-center">
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
