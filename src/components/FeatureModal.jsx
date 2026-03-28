import { useState } from 'react';

export default function FeatureModal({ itemId, onClose }) {
  if (itemId === null) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0e0e13]/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface flex flex-col rounded-3xl border border-outline-variant/30 shadow-[0_0_50px_rgba(0,243,255,0.1)] z-10 animate-in zoom-in-95 duration-300">
        
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
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <h4 className="text-xl font-bold text-white mb-6">Consumer-Funded Liquidity Architecture</h4>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 rounded-2xl bg-surface-container border border-outline-variant/20">
                <div className="flex flex-col items-center gap-3 w-full">
                  <span className="material-symbols-outlined text-3xl text-[#acaab1]">shopping_cart</span>
                  <p className="text-sm font-bold text-white text-center">Consumer Checkout<br/><span className="text-xs text-on-surface-variant font-normal">Food Delivery App</span></p>
                </div>
                <div className="h-10 w-0.5 md:w-16 md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-primary to-transparent relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-primary font-bold whitespace-nowrap bg-surface-container px-2">+ ₹2 Surcharge</span>
                </div>
                <div className="flex flex-col items-center gap-3 w-full p-4 rounded-xl bg-primary/5 border border-primary/20 shadow-[0_0_20px_rgba(0,243,255,0.1)]">
                  <span className="material-symbols-outlined text-3xl text-primary">water_drop</span>
                  <p className="text-sm font-bold text-primary text-center">Liquidity Pool<br/><span className="text-xs text-on-surface-variant font-normal">Self-Balancing Aggregator</span></p>
                </div>
                <div className="h-10 w-0.5 md:w-16 md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-secondary to-transparent relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-secondary font-bold whitespace-nowrap bg-surface-container px-2">Trigger Met</span>
                </div>
                <div className="flex flex-col items-center gap-3 w-full">
                  <span className="material-symbols-outlined text-3xl text-secondary">flash_on</span>
                  <p className="text-sm font-bold text-white text-center">Instant Payout<br/><span className="text-xs text-on-surface-variant font-normal">Gig Worker Wallet</span></p>
                </div>
              </div>
              
              <div className="mt-8 p-6 rounded-2xl bg-[#0e0e13] border border-outline-variant/10 font-mono text-sm">
                <p className="text-primary mb-2">// Actuarial Math Model</p>
                <p className="text-white"><span className="text-[#b190ff]">const</span> TARGET_PREMIUM = <span className="text-secondary">391</span>; <span className="text-on-surface-variant">/* INR Weekly */</span></p>
                <p className="text-white"><span className="text-[#b190ff]">const</span> BASE_SURCHARGE = <span className="text-secondary">2.50</span>;</p>
                <p className="text-white mt-4"><span className="text-[#b190ff]">function</span> <span className="text-primary">calculatePoolHealth</span>(activeDeliveries) {'{'}</p>
                <p className="text-white ml-4"><span className="text-[#b190ff]">return</span> (activeDeliveries * BASE_SURCHARGE) &gt;= TARGET_PREMIUM;</p>
                <p className="text-white">{'}'}</p>
              </div>
            </div>
          )}

          {itemId === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-lg">radar</span> Anomaly Detection</h4>
                <div className="h-64 rounded-2xl bg-[#000000] border border-outline-variant/10 p-4 font-mono text-xs overflow-y-auto w-full relative">
                  <div className="absolute top-2 right-2 flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-error animate-pulse"></div>
                  </div>
                  <p className="text-[#acaab1] mb-2">[SYSTEM] Booting Isolation Forest...</p>
                  <p className="text-primary mb-2">[LOG] Analyzing worker node #8492</p>
                  <p className="text-[#acaab1] mb-2">Distance vs Time: <span className="text-secondary">Normal</span></p>
                  <p className="text-primary mb-2">[LOG] Analyzing worker node #A155</p>
                  <p className="text-[#acaab1] mb-2">Distance vs Time: <span className="text-error font-bold">IMPOSSIBLE PHYSICS DETECTED</span></p>
                  <p className="text-error mb-2">   -&gt; Teleportation distance: 15km in 2s</p>
                  <p className="text-error mb-4">   -&gt; Action: Flagged as Syndicate Node</p>
                  <p className="text-primary mb-2">[LOG] Analyzing worker node #339X (Real Storm Caught)</p>
                  <p className="text-[#acaab1] mb-2">Routing to: <span className="text-secondary font-bold">Agentic GenAI Vision</span></p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">schema</span> DB Schema</h4>
                <div className="h-64 rounded-2xl bg-surface-container border border-outline-variant/10 p-4 font-mono text-xs overflow-y-auto text-primary">
                  <p className="text-white">type <span className="text-secondary">ClaimSchema</span> = {'{'}</p>
                  <p className="ml-4 text-white">claim_id: <span className="text-[#b190ff]">UUID</span>;</p>
                  <p className="ml-4 text-white">driver_uuid: <span className="text-[#b190ff]">UUID</span>;</p>
                  <p className="ml-4 text-white">isolation_score: <span className="text-[#b190ff]">Float</span>; <span className="text-on-surface-variant">// &gt;0.8 = Anomaly</span></p>
                  <p className="ml-4 text-white">status: <span className="text-secondary">'PENDING' | 'QUARANTINE' | 'PAID'</span>;</p>
                  <p className="ml-4 text-white">metadata: {'{'}</p>
                  <p className="ml-8 text-white">gps_spoof_prob: <span className="text-[#b190ff]">Float</span>,</p>
                  <p className="ml-8 text-white">vision_ai_override: <span className="text-[#b190ff]">Boolean</span>,</p>
                  <p className="ml-8 text-white">weather_severity_idx: <span className="text-[#b190ff]">Int</span></p>
                  <p className="ml-4 text-white">{'}'}</p>
                  <p className="text-white">{'}'}</p>
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
