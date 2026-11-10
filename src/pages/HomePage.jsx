import React from 'react';
import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ── Only About Me Section matching user's design ── */}
      <Hero />
    </div>
  );
}
