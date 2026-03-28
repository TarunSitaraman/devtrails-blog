import { useEffect, useRef } from 'react';

export default function FeatureModal({ itemId, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (itemId === null) return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const modal = modalRef.current;
      if (!modal) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: modal,
        threshold: 0.2
      });

      const animatedElements = modal.querySelectorAll('.scroll-animate-card');
      animatedElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [itemId]);

  if (itemId === null) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0e0e13]/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div 
        ref={modalRef}
        data-lenis-prevent="true"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface flex flex-col rounded-3xl border border-outline-variant/30 shadow-[0_0_50px_rgba(0,243,255,0.1)] z-10 animate-in zoom-in-95 duration-300"
      >
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-outline-variant/20 sticky top-0 bg-surface/80 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary">
                {itemId === 0 ? 'account_tree' : itemId === 1 ? 'security' : 'api'}
              </span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg tracking-tight">
                {itemId === 0 ? 'Parametric Surcharge Flow' : itemId === 1 ? 'Quarantine Workflow Matrix' : 'Live XGBoost Sandbox'}
              </h3>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest">
                {itemId === 0 ? 'Module Inspector' : itemId === 1 ? 'Schema Viewer' : 'Interactive Demo'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 space-y-8">
          
          {itemId === 0 && (
            <div className="animate-in slide-in-from-bottom-4 duration-500 h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-white mb-8 text-center pt-8">Consumer-Funded Liquidity Architecture</h4>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-12 md:py-32 rounded-3xl bg-surface-container border border-outline-variant/20 shadow-2xl">
                <div className="flex flex-col items-center gap-4 w-full">
                  <span className="material-symbols-outlined text-5xl text-[#acaab1]">shopping_cart</span>
                  <p className="text-lg font-bold text-white text-center">Consumer Checkout<br/><span className="text-sm text-on-surface-variant font-normal">Food Delivery App</span></p>
                </div>
                <div className="h-16 w-0.5 md:w-32 md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-primary to-transparent relative">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-primary font-bold whitespace-nowrap bg-surface-container px-3 py-1 rounded-full border border-primary/20">+ ₹2–₹5 Variable Surcharge</span>
                </div>
                <div className="flex flex-col items-center gap-4 w-full p-8 rounded-2xl bg-primary/5 border border-primary/20 shadow-[0_0_40px_rgba(0,243,255,0.15)] transform hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-5xl text-primary">water_drop</span>
                  <p className="text-lg font-bold text-primary text-center">Liquidity Pool<br/><span className="text-sm text-on-surface-variant font-normal">Self-Balancing Aggregator</span></p>
                </div>
                <div className="h-16 w-0.5 md:w-32 md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-secondary to-transparent relative">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-secondary font-bold whitespace-nowrap bg-surface-container px-3 py-1 rounded-full border border-secondary/20">Trigger Met</span>
                </div>
                <div className="flex flex-col items-center gap-4 w-full">
                  <span className="material-symbols-outlined text-5xl text-secondary">flash_on</span>
                  <p className="text-lg font-bold text-white text-center">Instant Payout<br/><span className="text-sm text-on-surface-variant font-normal">Gig Worker Wallet</span></p>
                </div>
              </div>

              {/* Additional Week 1 Deliverables */}
              <div className="mt-12 mb-8">
                <h5 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6 text-center">Week 1 Foundational Work</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div className="scroll-animate-card opacity-0 translate-y-12 transition-all duration-700 ease-out delay-100 p-6 rounded-2xl bg-[#0e0e13] border border-outline-variant/20 shadow-lg flex flex-col gap-4 hover:border-primary/30 group">
                    <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">function</span>
                    <div>
                      <h6 className="text-white font-bold mb-2">Actuarial Math Engine</h6>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Formulated target premiums (₹391/week) vs driver variable delivery volumes to guarantee liquidity pool sustainability.</p>
                    </div>
                  </div>

                  <div className="scroll-animate-card opacity-0 translate-y-12 transition-all duration-700 ease-out delay-200 p-6 rounded-2xl bg-[#0e0e13] border border-outline-variant/20 shadow-lg flex flex-col gap-4 hover:border-secondary/30 group">
                    <span className="material-symbols-outlined text-3xl text-secondary group-hover:scale-110 transition-transform">storm</span>
                    <div>
                      <h6 className="text-white font-bold mb-2">Risk Event Scoping</h6>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Categorized trigger events into discrete data points: extreme heat thresholds, heavy rain patterns, and AQI spikes.</p>
                    </div>
                  </div>

                  <div className="scroll-animate-card opacity-0 translate-y-12 transition-all duration-700 ease-out delay-300 p-6 rounded-2xl bg-[#0e0e13] border border-outline-variant/20 shadow-lg flex flex-col gap-4 hover:border-white/30 group">
                    <span className="material-symbols-outlined text-3xl text-white group-hover:scale-110 transition-transform">account_tree</span>
                    <div>
                      <h6 className="text-white font-bold mb-2">Guidewire Schema Draft</h6>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Sketched initial system flow connecting live weather API stubs directly to backend ClaimCenter architecture.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {itemId === 1 && (
            <div className="animate-in slide-in-from-bottom-4 duration-500 h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-white mb-8 text-center pt-8">Isolation & Adjudication Pipeline</h4>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-12 md:py-32 rounded-3xl bg-surface-container border border-outline-variant/20 shadow-2xl">
                <div className="flex flex-col items-center gap-4 w-full">
                  <span className="material-symbols-outlined text-5xl text-[#acaab1]">person_pin_circle</span>
                  <p className="text-lg font-bold text-white text-center">Driver Ping<br/><span className="text-sm text-on-surface-variant font-normal">GPS & Velocity Data</span></p>
                </div>
                
                <div className="h-16 w-0.5 md:w-32 md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-error to-transparent relative">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-error font-bold whitespace-nowrap bg-surface-container px-3 py-1 rounded-full border border-error/20">Anomaly Map</span>
                </div>
                
                <div className="flex flex-col items-center gap-4 w-full p-8 rounded-2xl bg-error/5 border border-error/20 shadow-[0_0_40px_rgba(255,100,100,0.1)] transform hover:scale-105 transition-transform relative">
                  <span className="material-symbols-outlined text-5xl text-error">policy</span>
                  <p className="text-lg font-bold text-error text-center">Isolation Forest<br/><span className="text-sm text-error/70 font-normal">Syndicate Filter</span></p>
                </div>
                
                <div className="h-16 w-0.5 md:w-32 md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-secondary to-transparent relative">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-secondary font-bold whitespace-nowrap bg-surface-container px-3 py-1 rounded-full border border-secondary/20">Valid Risk</span>
                </div>
                
                <div className="flex flex-col items-center gap-4 w-full p-8 rounded-2xl bg-secondary/5 border border-secondary/20 shadow-[0_0_40px_rgba(0,254,102,0.1)] transform hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-5xl text-secondary">visibility</span>
                  <p className="text-lg font-bold text-secondary text-center">Agentic Vision<br/><span className="text-sm text-secondary/70 font-normal">Claim Adjudication</span></p>
                </div>
              </div>
            </div>
          )}

          {itemId === 2 && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <h4 className="text-xl font-bold text-white mb-2 text-center">XGBoost Pricing Simulation Engine</h4>
              <p className="text-sm text-on-surface-variant text-center mb-8">Type a location to trigger the OpenWeatherMap stub and calculate localized micro-surcharges.</p>

              <div className="max-w-md mx-auto p-6 rounded-3xl bg-surface-container border border-outline-variant/20 shadow-2xl">
                <div className="flex gap-2 mb-6">
                  <input type="text" placeholder="Enter City (e.g., Mumbai, Delhi)" defaultValue="Mumbai, MH" className="w-full bg-[#0e0e13] border border-outline-variant/30 rounded-xl px-4 text-sm text-white focus:outline-none focus:border-primary transition-colors" />
                  <button className="px-4 py-3 bg-primary text-on-primary font-bold text-sm rounded-xl uppercase tracking-wider hover:bg-primary-dim transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">search</span> Ping
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-surface border border-outline-variant/10">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-error text-3xl">thunderstorm</span>
                      <div>
                        <p className="text-on-surface-variant text-xs uppercase tracking-widest">Live Weather (Mock)</p>
                        <p className="text-white font-bold text-lg">Severe Thunderstorms</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-error text-xs uppercase tracking-widest font-bold">AQI Alert</p>
                      <p className="text-white text-sm">PM2.5: 180</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-secondary/20 relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 opacity-5">
                      <span className="material-symbols-outlined text-9xl">analytics</span>
                    </div>
                    <p className="text-primary text-xs uppercase tracking-widest font-bold mb-1">XGBoost Output</p>
                    <p className="text-sm text-on-surface-variant mb-4">Risk cluster identified. Adjusting checkout payload dynamically to balance liquidity pool.</p>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] text-[#acaab1] uppercase tracking-widest mb-1">Generated Surcharge</p>
                        <p className="text-4xl font-black text-secondary">₹4.85</p>
                      </div>
                      <button className="text-xs uppercase tracking-widest text-primary font-bold hover:underline">View Claim Triggers</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
