import React, { useState, useEffect } from 'react';
import '../styles/Preloader.css';

const Preloader = ({ onLoadComplete }) => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [lines, setLines] = useState([]);
  const [isExiting, setIsExiting] = useState(false);

  const terminalLines = [
    '> INITIALIZING SECURE CONNECTION...',
    '> LOADING ASSETS...',
    '> ACCESS GRANTED'
  ];

  // Typing animation
  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentLines = [];

    const typeInterval = setInterval(() => {
      if (lineIndex < terminalLines.length) {
        const fullLine = terminalLines[lineIndex];
        
        if (charIndex < fullLine.length) {
          // Still typing current line
          charIndex++;
          currentLines[lineIndex] = fullLine.slice(0, charIndex);
          setLines([...currentLines]);
        } else {
          // Line complete, move to next
          currentLines[lineIndex] = fullLine;
          lineIndex++;
          charIndex = 0;
          setLines([...currentLines]);
        }
      } else {
        // All lines complete
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  // Trigger exit animation after all lines are typed
  useEffect(() => {
    if (lines.length === terminalLines.length) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 1200);

      const completeTimer = setTimeout(() => {
        setShowTerminal(false);
        onLoadComplete();
      }, 2300);

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
      <div className="preloader-terminal">
        <div className="terminal-header">
          <div className="terminal-button red"></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
        </div>
        <div className="terminal-content">
          {lines.map((line, index) => {
            const isLastLine = index === lines.length - 1;
            const isComplete = lines.length === terminalLines.length;
            const textClass = isLastLine && isComplete ? 'blink-final' : '';
            
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
