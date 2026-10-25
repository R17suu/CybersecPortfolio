import { useState, useEffect } from 'react';
import { FaDownload, FaCertificate, FaProjectDiagram, FaGithub, FaEnvelope, FaChevronDown, FaTerminal } from 'react-icons/fa';

function useTypewriter(phrases, typingSpeed = 90, erasingSpeed = 45, delay = 1800) {
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout;

    if (isTyping) {
      if (displayedText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayedText(current.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), delay);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, erasingSpeed);
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phraseIndex, isTyping, phrases, typingSpeed, erasingSpeed, delay]);

  return displayedText;
}

export default function Hero() {
  const roles = [
    'Cybersecurity & Threat Defense Enthusiast',
    'Cisco CCNA & Network Infrastructure Specialist',
    'Technical Project Manager & Student Leader',
    'VLAN & Packet Tracer Topology Designer',
  ];

  const currentRole = useTypewriter(roles);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Cyber Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center gap-8 sm:gap-10">
        
        {/* System Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(0,229,255,0.15)] scroll-fade-in">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-online"></span>
          <span className="font-semibold">SYSTEM_ONLINE</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">INFO_TECH &amp; CYBERSEC PRACTITIONER</span>
        </div>

        {/* Main Headings */}
        <div className="space-y-4 scroll-fade-in">
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-cyan-400 font-semibold">
            HELLO, MY NAME IS
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-tight">
            JOHN PRUDS <span className="shimmer-text">COLOT</span>
          </h1>
          <p className="font-heading text-lg sm:text-2xl font-semibold text-slate-300 tracking-wide mt-2">
            Known as <span className="text-cyan-400 font-mono font-bold">PJohn</span> &bull; IT Student &amp; Technical Project Manager
          </p>
        </div>

        {/* Terminal Role Display */}
        <div className="w-full max-w-2xl bg-[#0b101b]/95 border border-cyan-500/30 rounded-xl p-4 sm:p-5 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] scroll-fade-in">
          <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-800 text-[11px] font-mono text-slate-400">
            <FaTerminal className="text-cyan-400 text-xs" />
            <span>bash &mdash; current_specialization.sh</span>
            <div className="ml-auto flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
            </div>
          </div>
          <div className="flex items-center justify-center font-mono text-sm sm:text-lg text-cyan-300 font-semibold min-h-[36px] py-1">
            <span className="text-slate-500 mr-2">$</span>
            <span>{currentRole}</span>
            <span className="w-2 h-5 bg-cyan-400 ml-1 inline-block animate-pulse"></span>
          </div>
        </div>

        {/* Short Bio Tagline */}
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed scroll-fade-in">
          Bridging enterprise network infrastructure, Cisco routing &amp; switching, and cybersecurity defense with proven leadership in organizing collaborative technical teams.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto scroll-fade-in">
          <a
            href="/Colot_John-Pruds_Resume.pdf"
            download="John_Pruds_Colot_Resume.pdf"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 font-mono font-bold text-xs sm:text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all duration-300 hover:-translate-y-1"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>

          <button
            onClick={() => scrollTo('#certifications')}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900/80 border border-cyan-500/40 text-cyan-300 font-mono font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-cyan-950/40 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <FaCertificate className="text-cyan-400" />
            <span>Certifications (18)</span>
          </button>

          <button
            onClick={() => scrollTo('#projects')}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-300 font-mono font-semibold text-xs sm:text-sm tracking-wider uppercase hover:border-slate-500 hover:text-white transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <FaProjectDiagram />
            <span>View Projects</span>
          </button>
        </div>

        {/* Telemetry Stats Strip */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl scroll-fade-in">
          <div className="cyber-card rounded-2xl p-5 sm:p-6 text-center">
            <div className="font-heading font-black text-2xl sm:text-4xl text-cyan-400">18+</div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mt-2 font-medium">Credentials &amp; Certs</div>
          </div>
          <div className="cyber-card rounded-2xl p-5 sm:p-6 text-center">
            <div className="font-heading font-black text-2xl sm:text-4xl text-blue-400">CCNA</div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mt-2 font-medium">Cisco NetAcad Track</div>
          </div>
          <div className="cyber-card rounded-2xl p-5 sm:p-6 text-center">
            <div className="font-heading font-black text-2xl sm:text-4xl text-emerald-400">100%</div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mt-2 font-medium">Hands-On Labs</div>
          </div>
          <div className="cyber-card rounded-2xl p-5 sm:p-6 text-center">
            <div className="font-heading font-black text-2xl sm:text-4xl text-purple-400">NIST</div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mt-2 font-medium">Sec Framework &amp; Audits</div>
          </div>
        </div>

        {/* Social Quick Bar */}
        <div className="flex items-center gap-5 scroll-fade-in">
          <a
            href="https://github.com/R17suu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-[#0f1623] border border-cyan-500/30 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-300"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="mailto:2301104393@student.buksu.edu.ph"
            className="w-12 h-12 rounded-xl bg-[#0f1623] border border-cyan-500/30 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-300"
            title="Email Directly"
            aria-label="Email John Pruds Colot"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollTo('#about')}
          className="text-cyan-400/80 hover:text-cyan-300 transition-colors animate-bounce flex flex-col items-center gap-1.5 cursor-pointer py-2"
          aria-label="Scroll down to About section"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Explore</span>
          <FaChevronDown size={14} />
        </button>

      </div>
    </section>
  );
}
