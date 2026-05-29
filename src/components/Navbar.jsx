import { useState, useEffect } from 'react';

const middleLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning Path', href: '#learning-path' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0d0d0d] ${scrolled ? 'shadow-lg shadow-black/50' : ''
        }`}
    >
      <div className="flex items-stretch transition-all duration-300 w-full h-[50px]">

        {/* Logo Section (Left) */}
        <div className="w-[20%] flex-shrink-0 flex items-center justify-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('#home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[2rem] font-[900] uppercase tracking-[0.15em] text-white hover:text-[#00e5ff] transition-colors duration-300"
          >
            PJOHN
          </a>
        </div>

        {/* Navigation Section (Right) */}
        <div className="hidden md:flex flex-1 bg-white rounded-l-[40px] items-center justify-between px-20 lg:px-40" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <div className="flex flex-row gap-8 lg:gap-10">
            {middleLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[0.875rem] font-[700] tracking-[0.15em] uppercase transition-colors duration-300 ${activeSection === link.href ? 'text-[#00e5ff]' : 'text-black hover:text-[#666666]'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`text-[0.875rem] font-[700] tracking-[0.15em] uppercase transition-colors duration-300 ${activeSection === '#contact' ? 'text-[#00e5ff]' : 'text-black hover:text-[#00e5ff]'
              }`}
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex-1 flex justify-end items-center md:hidden pr-8 bg-white rounded-l-[40px]">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[0.375rem] bg-transparent border-none cursor-pointer p-2"
          >
            <span className="w-[1.5rem] h-[0.125rem] bg-black block transition-all duration-300"></span>
            <span className="w-[1.5rem] h-[0.125rem] bg-black block transition-all duration-300"></span>
            <span className="w-[1.5rem] h-[0.125rem] bg-black block transition-all duration-300"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 mx-auto max-w-7xl px-4 ${menuOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col gap-4 bg-[#222222] p-4 rounded-2xl shadow-lg border-2 border-accent">
          {[...middleLinks, { label: 'Contact Me', href: '#contact' }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-[0.875rem] font-[700] tracking-[0.15em] uppercase transition-colors duration-300 ${activeSection === link.href ? 'text-[#00e5ff]' : 'text-white hover:text-gray-300'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
