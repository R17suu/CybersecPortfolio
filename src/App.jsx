import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Courses from './components/Courses';
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
      { threshold: 0.05 }
    );

    const observeAll = () => {
      document.querySelectorAll('.scroll-fade-in:not(.visible)').forEach((el) => {
        observerRef.current?.observe(el);
      });
    };

    // Observe initially
    observeAll();

    // Re-observe whenever DOM changes
    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    // Also re-observe on scroll (fallback)
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
  useScrollReveal();

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Courses />
      <CurrentFocus />
      <Contact />
      <Footer />
    </div>
  );
}
