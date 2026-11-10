import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white border-b border-border-base">
      {/* Header */}
      <div className="grid grid-cols-[1fr_auto] border-b border-border-base">
        <div className="p-6 flex flex-col gap-1">
          <span className="section-label">06 — Reviews</span>
          <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            What Clients<br />
            <span style={{ color: 'var(--orange)' }}>Say</span>
          </h2>
        </div>
        <div className="hidden lg:flex flex-col items-end justify-end p-6 w-48 xl:w-64">
          <div className="font-display font-black text-[5rem] leading-none text-zinc-100 select-none">06</div>
        </div>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-base">
        {testimonialsData.map((item, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 bg-white hover:bg-zinc-50 transition-colors flex flex-col justify-between group"
          >
            <div>
              {/* Rating + quote icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-orange text-orange" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-zinc-200 group-hover:text-orange/30 transition-colors" />
              </div>

              {/* Quote */}
              <p className="text-sm text-ink-muted leading-relaxed italic mb-6">
                "{item.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border-base">
              <div className="w-9 h-9 bg-orange flex items-center justify-center font-bold text-white text-xs font-display shrink-0">
                {item.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-sm font-bold text-ink">{item.name}</h4>
                <p className="text-[11px] font-mono text-ink-muted">{item.role} · {item.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
