import { useState, useEffect } from 'react';
import { FaShieldAlt, FaBars, FaTimes, FaFileAlt } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'certifications', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#07090e]/85 backdrop-blur-md border-b border-cyan-500/15 shadow-lg shadow-black/40' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <FaShieldAlt className="text-base" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl tracking-wider text-white group-hover:text-cyan-400 transition-colors flex items-center">
                PJOHN<span className="text-cyan-400 animate-pulse">_</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 -mt-1">
                IT & Sec Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0f1623]/80 border border-cyan-500/20 backdrop-blur-md rounded-full px-4 py-1.5 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs font-mono font-medium tracking-wider uppercase transition-all duration-200 rounded-full ${
                    isActive 
                      ? 'text-cyan-300 bg-cyan-950/60 shadow-[0_0_12px_rgba(0,229,255,0.3)]' 
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_#00e5ff]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Colot_John-Pruds_Resume.pdf"
              download="John_Pruds_Colot_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaFileAlt className="text-xs" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 mx-4 p-4 rounded-xl bg-[#0b101b] border border-cyan-500/30 shadow-2xl backdrop-blur-xl animate-modal">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg font-mono text-sm uppercase tracking-wider transition-colors flex items-center justify-between ${
                    isActive 
                      ? 'text-cyan-400 bg-cyan-950/50 font-bold border-l-2 border-cyan-400' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>}
                </a>
              );
            })}
            <div className="pt-2 mt-1 border-t border-slate-800">
              <a
                href="/Colot_John-Pruds_Resume.pdf"
                download="John_Pruds_Colot_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider"
              >
                <FaFileAlt /> Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
