import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { educationSections } from '../data/portfolioData';
import ScrollReveal from '../components/ScrollReveal';

export default function EducationPage() {
  return (
    <div className="w-full pt-28 sm:pt-32 pb-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ── Page Header ── */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="space-y-5">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-xs font-sans text-zinc-600 dark:text-zinc-300 shadow-xs">
              <span className="opacity-90">My Background &amp; Credentials</span>
              <span className="font-semibold text-zinc-900 dark:text-white flex items-center gap-1">
                Education &amp; Certs <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Big headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold font-display tracking-tight leading-[1.1]"
              style={{ color: 'var(--text-color)' }}
            >
              My education and
              <br />
              credentials.
            </h1>

            <p
              className="text-sm sm:text-base leading-relaxed max-w-2xl font-sans"
              style={{ color: 'var(--text-muted)' }}
            >
              I hold a B.Sc. in Information Technology and have invested heavily in self-directed learning through industry-recognised platforms. Learning is a permanent part of my workflow — not something I finished when I graduated.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Timeline Sections ── */}
        <div className="relative pl-6 sm:pl-10 pt-4">

          {/* Continuous vertical purple accent line */}
          <div
            className="absolute left-[7px] sm:left-[11px] top-6 bottom-10 w-[2px] pointer-events-none"
            style={{ backgroundColor: 'rgba(139, 92, 246, 0.4)' }}
          />

          <div className="space-y-14 sm:space-y-20">
            {educationSections.map((section, sIdx) => (
              <div
                key={sIdx}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-start pt-2"
              >
                {/* Purple dot on the line with pulse */}
                <div className="absolute -left-[23px] sm:-left-[35px] top-3.5 sm:top-4 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#8b5cf6] ring-4 ring-white dark:ring-[#0e0f12] shadow-sm shrink-0 transition-transform duration-300 hover:scale-125" />
                </div>

                {/* Left: section category heading */}
                <div className="md:col-span-4 pl-2 md:pl-0">
                  <ScrollReveal animation="fade-left" delay={sIdx * 100} duration={650}>
                    <h2
                      className="text-2xl sm:text-3xl font-bold font-display tracking-tight sticky top-28"
                      style={{ color: 'var(--text-color)' }}
                    >
                      {section.category}
                    </h2>
                  </ScrollReveal>
                </div>

                {/* Right: items */}
                <div className="md:col-span-8 space-y-8 pl-2 md:pl-0">
                  {section.items.map((item, iIdx) => (
                    <ScrollReveal
                      key={iIdx}
                      animation="fade-up"
                      delay={iIdx * 120}
                      duration={700}
                    >
                      <div className="space-y-2 p-4 sm:p-5 rounded-2xl border border-transparent hover:border-zinc-200/80 dark:hover:border-zinc-800 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-all duration-300">
                        {/* Title row + pill badge */}
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3
                            className="font-bold text-base sm:text-lg font-sans"
                            style={{ color: 'var(--text-color)' }}
                          >
                            {item.name}
                          </h3>
                          {item.badge && (
                            <span
                              className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-medium border"
                              style={{
                                backgroundColor: 'var(--card-bg)',
                                borderColor: 'var(--card-border)',
                                color: 'var(--text-muted)',
                              }}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>

                        {/* School / location line (for degree only) */}
                        {item.school && (
                          <p className="text-xs font-medium" style={{ color: '#0d9488' }}>
                            {item.school} · {item.location}
                            {item.gpa && (
                              <span className="ml-3 font-semibold" style={{ color: 'var(--text-muted)' }}>
                                {item.gpa}
                              </span>
                            )}
                          </p>
                        )}

                        {/* Description */}
                        <p
                          className="text-xs sm:text-sm font-sans leading-relaxed"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {item.description}
                        </p>

                        {/* External link (for certs) */}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all hover:translate-x-1"
                            style={{ color: '#0d9488' }}
                          >
                            <ExternalLink className="w-3 h-3" />
                            View credential
                          </a>
                        )}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
