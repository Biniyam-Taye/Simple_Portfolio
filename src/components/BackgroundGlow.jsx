import React, { useState, useEffect } from 'react';

export default function BackgroundGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Interactive Cursor Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] transition-transform duration-75 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.45) 0%, rgba(139, 92, 246, 0.25) 50%, transparent 70%)',
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
        }}
      />

      {/* Ambient glowing gradient orbs */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px] animate-float-slow" />
      <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[160px] animate-pulse-glow" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      
      {/* Top subtle fade gradient */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent opacity-80" />
      {/* Bottom fade gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent opacity-80" />
    </div>
  );
}
