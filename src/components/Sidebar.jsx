export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-[#131319]/60 backdrop-blur-2xl border-r border-[#acaab1]/15 lg:flex flex-col p-4 gap-y-4 hidden z-40">
      <div className="mb-6 px-2">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center">
            <img alt="Operator" className="rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIe1MXUh4p_8PdeFKHbgX_4ihgnr-mooEL8AovWk7qdnvxwz5OmPcD2zhdULPLjhhhoVrt2p-6GGGe8BVM3XU48J3b6vw4RnV0t5aI8rWd1fz-2i2ghLknpjSKShxdV9OJqQnKWU0DhdFT8pGwPM1xU2IX5i9JiNnlHyEqpiiZbi2X3uhxmOz5JY7TmRKag4lCIhjSM2VO44WlKztPjJu-BTWkPuGjCY-Rwvk64WvxR9qKT8MxX2lP_neEgQOhZehK5FAalkz2UrM" />
          </div>
          <div>
            <h3 className="text-sm font-black text-[#00f3ff] uppercase tracking-widest font-['Space_Grotesk']">Helix Node 01</h3>
            <p className="text-[10px] text-[#acaab1] uppercase tracking-widest">Status: Operational</p>
          </div>
        </div>
      </div>
      <nav className="space-y-1">
        <div className="flex items-center gap-3 px-4 py-3 bg-[#25252d] text-[#00f3ff] border-l-4 border-[#00f1fd] group cursor-pointer transition-all duration-200">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="text-sm font-['Space_Grotesk'] uppercase tracking-widest">Dashboard</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 text-[#acaab1] hover:bg-[#131319] hover:text-white group cursor-pointer transition-all duration-200">
          <span className="material-symbols-outlined">sensors</span>
          <span className="text-sm font-['Space_Grotesk'] uppercase tracking-widest">System Status</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 text-[#acaab1] hover:bg-[#131319] hover:text-white group cursor-pointer transition-all duration-200">
          <span className="material-symbols-outlined">code</span>
          <span className="text-sm font-['Space_Grotesk'] uppercase tracking-widest">API Logs</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 text-[#acaab1] hover:bg-[#131319] hover:text-white group cursor-pointer transition-all duration-200">
          <span className="material-symbols-outlined">shield</span>
          <span className="text-sm font-['Space_Grotesk'] uppercase tracking-widest">Security</span>
        </div>
      </nav>
      <div className="mt-auto px-2 space-y-4">
        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
          Deploy Update
        </button>
        <div className="flex items-center gap-3 px-4 py-3 text-[#acaab1] hover:bg-[#131319] hover:text-white group cursor-pointer transition-all duration-200">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-sm font-['Space_Grotesk'] uppercase tracking-widest">Settings</span>
        </div>
      </div>
    </aside>
  );
}
