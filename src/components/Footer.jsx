import { FaShieldAlt, FaArrowUp, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-cyan-500/15 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <FaShieldAlt className="text-cyan-400 text-sm" />
            <span className="font-heading font-black text-lg text-white tracking-wider">
              PJOHN<span className="text-cyan-400">_</span>
            </span>
          </div>
          <p className="text-xs font-mono text-slate-400">
            &copy; {new Date().getFullYear()} John Pruds Colot &bull; All rights reserved.
          </p>
          <p className="text-[11px] font-mono text-slate-500 mt-1">
            Built with React, Vite &amp; Tailwind CSS &bull; Cybersecurity &amp; IT Portfolio
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-400">
          <a href="#home" className="hover:text-cyan-400 transition-colors">HOME</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">ABOUT</a>
          <a href="#certifications" className="hover:text-cyan-400 transition-colors">CERTIFICATIONS</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">PROJECTS</a>
          <a href="#focus" className="hover:text-cyan-400 transition-colors">FOCUS</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">CONTACT</a>
        </div>

        {/* Back to top + Socials */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/R17suu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-colors"
            title="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="mailto:2301104393@student.buksu.edu.ph"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-colors"
            title="Email"
          >
            <FaEnvelope size={15} />
          </a>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 flex items-center justify-center transition-all shadow-[0_0_12px_rgba(0,229,255,0.2)]"
            title="Back to Top"
            aria-label="Back to top"
          >
            <FaArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
