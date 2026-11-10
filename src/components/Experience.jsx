import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="bg-zinc-50 border-b border-border-base">
      {/* Header */}
      <div className="grid grid-cols-[1fr_auto] border-b border-border-base">
        <div className="p-6 flex flex-col gap-1">
          <span className="section-label">05 — Experience</span>
          <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Work History &<br />
            <span style={{ color: 'var(--orange)' }}>Impact</span>
          </h2>
        </div>
        <div className="hidden lg:flex flex-col items-end justify-end p-6 w-48 xl:w-64">
          <div className="font-display font-black text-[5rem] leading-none text-zinc-200 select-none">05</div>
        </div>
      </div>

      {/* Timeline – vertical list */}
      <div className="divide-y divide-border-base">
        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            className="group grid grid-cols-1 lg:grid-cols-[200px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-border-base bg-white hover:bg-zinc-50 transition-colors"
          >
            {/* Left: period + location */}
            <div className="p-5 lg:p-6 flex lg:flex-col gap-3 lg:gap-2 justify-between lg:justify-start">
              <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted">
                <Calendar className="w-3.5 h-3.5 text-orange" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted">
                <MapPin className="w-3.5 h-3.5 text-orange" />
                <span className="line-clamp-1">{exp.location}</span>
              </div>
              {/* Index indicator */}
              <div className="hidden lg:block mt-auto font-display font-black text-5xl text-zinc-100 leading-none select-none">
                {String(idx + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Right: content */}
            <div className="p-5 lg:p-8">
              <div className="mb-3">
                <h3 className="font-display font-bold text-2xl text-ink">{exp.role}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="section-label">{exp.company}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-400" />
                </div>
              </div>

              <p className="text-sm text-ink-muted leading-relaxed mb-4">{exp.description}</p>

              {/* Achievements */}
              <ul className="space-y-1.5 mb-4">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-ink-muted">
                    <ChevronRight className="w-3.5 h-3.5 text-orange flex-shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-base">
                {exp.technologies.map(tech => (
                  <span key={tech} className="px-2 py-0.5 border border-border-base font-mono text-[11px] text-ink-muted bg-zinc-50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
