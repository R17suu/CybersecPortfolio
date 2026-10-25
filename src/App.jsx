import { useEffect, useRef, useState } from 'react';
import Preloader from './components/Preloader';
import BackgroundAnimation from './components/BackgroundAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import CurrentFocus from './components/CurrentFocus';
import Contact from './components/Contact';
import Footer from './components/Footer';

function useScrollReveal() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('.scroll-fade-in:not(.visible)').forEach((el) => {
        observerRef.current?.observe(el);
      });
    };

    observeAll();

    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    const handleScroll = () => observeAll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      mutation.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useScrollReveal();

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-cyan-400 selection:text-slate-950">
      {isLoading && <Preloader onLoadComplete={handleLoadComplete} />}
      <BackgroundAnimation />
      <Navbar />
      <main className="relative z-10 space-y-28 sm:space-y-36 lg:space-y-44 pb-24 sm:pb-32">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <CurrentFocus />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
