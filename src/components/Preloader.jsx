import { useState, useEffect } from 'react';
import '../styles/Preloader.css';

const Preloader = ({ onLoadComplete }) => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [lines, setLines] = useState([]);
  const [isExiting, setIsExiting] = useState(false);

  const terminalLines = [
    '> INITIALIZING SECURE ENVIRONMENT...',
    '> VERIFYING NETWORK & SECURITY CREDENTIALS [18/18]...',
    '> ACCESS GRANTED // WELCOME TO PJOHN PORTFOLIO'
  ];

  const finish = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowTerminal(false);
      onLoadComplete();
    }, 400);
  };

  // Typing animation
  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentLines = [];

    const typeInterval = setInterval(() => {
      if (lineIndex < terminalLines.length) {
        const fullLine = terminalLines[lineIndex];
        
        if (charIndex < fullLine.length) {
          charIndex++;
          currentLines[lineIndex] = fullLine.slice(0, charIndex);
          setLines([...currentLines]);
        } else {
          currentLines[lineIndex] = fullLine;
          lineIndex++;
          charIndex = 0;
          setLines([...currentLines]);
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 20);

    return () => clearInterval(typeInterval);
  }, []);

  // Exit trigger
  useEffect(() => {
    if (lines.length === terminalLines.length) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 500);

      const completeTimer = setTimeout(() => {
        setShowTerminal(false);
        onLoadComplete();
      }, 950);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [lines.length, terminalLines.length, onLoadComplete]);

  if (!showTerminal) {
    return null;
  }

  return (
    <div className={`preloader-overlay ${isExiting ? 'preloader-exit' : ''}`}>
      <div className="preloader-terminal relative">
        <div className="terminal-header flex justify-between items-center">
          <div className="flex gap-2">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
          </div>
          <span className="text-[11px] font-mono text-cyan-400">pjohn@security-ops:~</span>
          <button
            onClick={finish}
            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 hover:bg-cyan-950 text-cyan-400 border border-cyan-500/30 transition-colors"
          >
            SKIP
          </button>
        </div>
        <div className="terminal-content">
          {lines.map((line, index) => {
            const isLastLine = index === lines.length - 1;
            const isComplete = lines.length === terminalLines.length;
            const textClass = isLastLine && isComplete ? 'blink-final text-emerald-400 font-bold' : '';
            
            return (
              <div key={index} className="terminal-line">
                <span className={`terminal-text ${textClass}`}>{line}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
