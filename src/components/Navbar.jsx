export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e13]/40 backdrop-blur-xl border-b border-[#acaab1]/15 shadow-[0_0_20px_rgba(0,243,255,0.15)] flex justify-between items-center px-8 h-20">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
        </div>
        <span className="text-2xl font-bold tracking-tighter text-[#00f3ff] font-['Space_Grotesk']">QuickCover</span>
      </div>
      <div className="hidden md:flex items-center gap-10">
        <a className="text-[#00f3ff] font-bold border-b-2 border-[#00f3ff] pb-1 font-['Space_Grotesk'] tracking-tight" href="#">Articles</a>
        <a className="text-[#acaab1] hover:text-[#96f8ff] transition-colors font-['Space_Grotesk'] tracking-tight" href="#">Tutorials</a>
        <a className="text-[#acaab1] hover:text-[#96f8ff] transition-colors font-['Space_Grotesk'] tracking-tight" href="#">Changelog</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#acaab1] hover:bg-[#25252d]/50 transition-all duration-300">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </nav>
  );
}
