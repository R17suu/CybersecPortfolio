export default function BackgroundAnimation() {
  return (
    <>
      {/* Subtle Animated Background Filler */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {/* Animated gradient background */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{
            opacity: 1,
          }}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Subtle grid pattern */}
            <pattern id="subtleGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="none" />
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00e5ff" strokeWidth="0.3" />
            </pattern>

            {/* Animated gradient */}
            <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d0d0d">
                <animate attributeName="offset" values="0%;5%;0%" dur="8s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#1a2a3a">
                <animate attributeName="stopColor" values="#1a2a3a;#2a3a4a;#1a2a3a" dur="10s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#0d0d0d">
                <animate attributeName="offset" values="100%;95%;100%" dur="8s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>

          {/* Subtle animated background */}
          <rect width="100%" height="100%" fill="url(#animatedGradient)" opacity="0.02" />
          
          {/* Grid filler */}
          <rect width="100%" height="100%" fill="url(#subtleGrid)" opacity="0.02" />

          {/* Animated horizontal lines - flowing effect */}
          <g>
            {[...Array(12)].map((_, i) => (
              <line
                key={`line-${i}`}
                x1={`${(i * 8.33) - 100}%`}
                y1={`${(i + 1) * 8.33}%`}
                x2={`${(i * 8.33) + 100}%`}
                y2={`${(i + 1) * 8.33}%`}
                stroke="#00e5ff"
                strokeWidth="0.2"
                opacity="0.03"
                style={{
                  animation: `flowLine ${15 + i * 0.5}s linear infinite`,
                }}
              />
            ))}
          </g>

          {/* Diagonal animated accent lines */}
          <g opacity="0.04">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#00e5ff" strokeWidth="0.2" style={{ animation: 'diagFlow 20s linear infinite' }} />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#00e5ff" strokeWidth="0.2" style={{ animation: 'diagFlowReverse 20s linear infinite' }} />
          </g>
        </svg>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes flowLine {
          from {
            transform: translateX(-100%);
            opacity: 0.01;
          }
          50% {
            opacity: 0.05;
          }
          to {
            transform: translateX(100%);
            opacity: 0.01;
          }
        }

        @keyframes diagFlow {
          from {
            stroke-dashoffset: 0;
            opacity: 0.02;
          }
          50% {
            opacity: 0.06;
          }
          to {
            stroke-dashoffset: 100;
            opacity: 0.02;
          }
        }

        @keyframes diagFlowReverse {
          from {
            stroke-dashoffset: 100;
            opacity: 0.02;
          }
          50% {
            opacity: 0.06;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 0.02;
          }
        }

        /* Smooth card lift on hover */
        .card-hover {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Smooth section transitions */
        section {
          transition: all 0.6s ease-out;
        }

        /* Smooth text highlights */
        .text-accent {
          transition: all 0.3s ease;
        }

        /* Animated underline effect */
        a, button {
          position: relative;
          transition: color 0.3s ease;
        }

        a::after, button::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: #00e5ff;
          transition: width 0.3s ease;
        }

        a:hover::after, button:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
