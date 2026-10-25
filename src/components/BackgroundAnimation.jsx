export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cyber Grid Layer */}
      <div className="absolute inset-0 cyber-grid opacity-60"></div>

      {/* Radial Vignette & Glow */}
      <div className="absolute inset-0 bg-radial-[ellipse_80%_80%_at_50%_-20%] from-cyan-900/15 via-transparent to-[#07090e]/90"></div>

      {/* Ambient Gradient Highlights */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-[140px]"></div>
      <div className="absolute top-1/2 -left-60 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-1/4 -right-60 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px]"></div>

      {/* Subtle Digital Circuit Accents */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="circuitPattern" width="160" height="160" patternUnits="userSpaceOnUse">
            <path
              d="M0 80 H40 L60 60 H100 L120 80 H160"
              fill="none"
              stroke="#00e5ff"
              strokeWidth="0.5"
              strokeDasharray="4 8"
            />
            <circle cx="60" cy="60" r="2" fill="#00e5ff" opacity="0.4" />
            <circle cx="100" cy="60" r="2" fill="#00e5ff" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
      </svg>
    </div>
  );
}
