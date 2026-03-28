export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto bg-[#0e0e13] border-t border-[#acaab1]/10 flex flex-col md:flex-row justify-between items-center px-12 gap-4">
      <p className="font-['Space_Grotesk'] text-xs font-light text-[#acaab1]">© 2024 QuickCover Kinetic Helix.</p>
      <div className="flex gap-8">
        <span className="font-['Space_Grotesk'] text-xs font-light text-[#acaab1] flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-secondary"></span> Latency: 14ms
        </span>
        <span className="font-['Space_Grotesk'] text-xs font-light text-[#acaab1] flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-secondary"></span> Uptime: 99.99%
        </span>
        <a className="font-['Space_Grotesk'] text-xs font-light text-[#acaab1] hover:text-[#00f3ff] transition-colors" href="#">Documentation</a>
        <a className="font-['Space_Grotesk'] text-xs font-light text-[#acaab1] hover:text-[#00f3ff] transition-colors" href="#">Privacy</a>
      </div>
    </footer>
  );
}
