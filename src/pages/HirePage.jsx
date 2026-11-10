import React from 'react';
import { Laptop, Server, Database, Wrench, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ScrollReveal from '../components/ScrollReveal';

// Technology stack icons
function TechIcon({ name }) {
  switch (name) {
    case 'React':
    case 'React Native':
      return (
        <svg className="w-4 h-4 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'Next.js':
      return (
        <svg className="w-4 h-4 text-ink dark:text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.625 17.525L10.8 7.8H9.6v8.4h1.2v-6.9l6.025 8.225zM15.6 12h1.2v4.2h-1.2z" />
        </svg>
      );
    case 'TailwindCSS':
      return (
        <svg className="w-4 h-4 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case 'Framer Motion':
      return (
        <svg className="w-4 h-4 text-[#0055FF]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      );
    case 'React Query':
      return (
        <svg className="w-4 h-4 text-[#FF4154]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'TypeScript':
      return (
        <span className="w-4 h-4 rounded-sm bg-[#3178C6] text-white text-[9px] font-bold flex items-center justify-center leading-none">
          TS
        </span>
      );
    case 'Expo':
      return (
        <svg className="w-4 h-4 text-ink dark:text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.5 19.5L12 3l9.5 16.5H2.5zm4.33-2.5h10.34L12 7.83 6.83 17z" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg className="w-4 h-4 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
        </svg>
      );
    case 'Express.js':
      return (
        <span className="w-4 h-4 text-[10px] font-bold text-zinc-600 dark:text-zinc-300 font-mono flex items-center justify-center">
          ex
        </span>
      );
    case 'tRPC':
      return (
        <svg className="w-4 h-4 text-[#2596BE]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" />
        </svg>
      );
    case 'MySQL':
      return (
        <svg className="w-4 h-4 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 6.58 2 11c0 2.7 1.67 5.1 4.22 6.5L5 21l4.8-1.6c.71.13 1.44.2 2.2.2 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
        </svg>
      );
    case 'Redis':
      return (
        <svg className="w-4 h-4 text-[#DC382D]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L2 7l10 4 10-4-10-4zm0 6.5L4 13l8 3.5 8-3.5-8-3.5zm0 6L4 19l8 3.5 8-3.5-8-3.5z" />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg className="w-4 h-4 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V17h-2v1.93A8.001 8.001 0 014.07 13H6v-2H4.07A8.001 8.001 0 0111 4.07V6h2V4.07A8.001 8.001 0 0119.93 11H18v2h1.93A8.001 8.001 0 0113 18.93z" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg className="w-4 h-4 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2s-6 6.5-6 11.5c0 3.5 2.5 6.5 6 8.5 3.5-2 6-5 6-8.5C18 8.5 12 2 12 2zm-.5 17.8c-2.3-1.6-3.8-3.8-3.8-6.3 0-3.3 3.3-7.5 4.3-8.8v15.1z" />
        </svg>
      );
    case 'AWS':
      return (
        <svg className="w-4 h-4 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 13.5l-4-2.5 4-2.5v5zm8 0l-4-2.5 4-2.5v5z" />
        </svg>
      );
    case 'Docker':
      return (
        <svg className="w-4 h-4 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 8h2v2h-2zm-3 0h2v2h-2zm6 0h2v2h-2zm-9 0h2v2H7zm3-3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zM1 12c.5 4 4 7 9 7 6 0 9.5-4 10.5-8.5.5 0 2-.5 2.5-1.5-1 0-2 .5-3 .5 0-3-2.5-4.5-4.5-4.5H1v6.5z" />
        </svg>
      );
    case 'Git':
      return (
        <svg className="w-4 h-4 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.7 10.3l-8-8a2.4 2.4 0 00-3.4 0L8.6 4l3 3a2.5 2.5 0 013.2 3.2l2.9 2.9a2.5 2.5 0 013.2 3.3 2.4 2.4 0 00.8-6.1zm-13.4-4L2.3 12.3a2.4 2.4 0 000 3.4l8 8a2.4 2.4 0 003.4 0l4-4-2.9-2.9a2.5 2.5 0 01-3.2-3.2l-3-3a.7.7 0 00-.3-.3z" />
        </svg>
      );
    default:
      return <div className="w-2 h-2 rounded-full bg-teal-500" />;
  }
}

// Company logos
function CompanyLogo({ name }) {
  switch (name) {
    case 'Apple':
      return (
        <svg className="w-8 h-8 text-zinc-800 dark:text-zinc-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-.96.04-2.13.64-2.79 1.41-.58.68-1.1 1.74-1.01 2.8.05 0 2.17.41 2.79-1.34z" />
        </svg>
      );
    case 'Google':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.37 7.32 24 12 24z" />
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.17 0 9.97 0 12s.46 3.83 1.26 5.42l4.02-3.15z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.32 0 3.25 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
        </svg>
      );
    case 'Meta':
      return (
        <svg className="w-8 h-8 text-[#0668E1]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.59c-1.4-1.89-3.23-3.09-5.19-3.09C3.14 7.5 0 10.15 0 14.07c0 3.73 2.72 6.43 6.37 6.43 2.37 0 4.25-1.17 5.63-2.84 1.38 1.67 3.26 2.84 5.63 2.84 3.65 0 6.37-2.7 6.37-6.43 0-3.92-3.14-6.57-6.81-6.57-1.96 0-3.79 1.2-5.19 3.09zm-5.19 7.64c-2.31 0-4.04-1.74-4.04-4.16 0-2.38 1.7-4.25 4.04-4.25 1.5 0 2.92.98 3.99 2.52-1.07 1.54-2.49 2.52-3.99 2.52zm10.38 0c-1.5 0-2.92-.98-3.99-2.52 1.07-1.54 2.49-2.52 3.99-2.52 2.34 0 4.04 1.87 4.04 4.25 0 2.42-1.73 4.16-4.04 4.16z" />
        </svg>
      );
    case 'Microsoft':
      return (
        <div className="w-7 h-7 grid grid-cols-2 gap-1">
          <div className="bg-[#F25022] rounded-xs" />
          <div className="bg-[#7FBA00] rounded-xs" />
          <div className="bg-[#00A4EF] rounded-xs" />
          <div className="bg-[#FFB900] rounded-xs" />
        </div>
      );
    case 'Amazon':
      return (
        <svg className="w-8 h-8 text-zinc-900 dark:text-zinc-100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.9 14.5c-2.6 1.9-6.3 2.9-9.6 1.6-.5-.2-1-.7-.3-1.1.7-.5 1.5-.9 2.3-1.3.4-.2.8-.2 1.1.1 1.7.9 3.8.8 5.6-.2.4-.2.8-.2 1.1.1.5.4 1 .8.8 1.4-.3.4-.6.3-1 .1zm1.2-1.6c-.3-.4-.5-.8-.5-1.3 0-1.2.9-2.2 2-2.2s2 1 2 2.2c0 .5-.2.9-.5 1.3l1.8 1.3c.7-.8 1.1-1.8 1.1-2.9 0-2.5-1.9-4.5-4.4-4.5S11.7 8.8 11.7 11.3c0 1.1.4 2.1 1.1 2.9l2.3-1.3z" />
          <path d="M22.5 17.5c-.3-.4-.9-.5-1.4-.3-3.1 1.6-6.8 2.4-10.5 2.4-4.6 0-9.2-1.3-13.2-3.8-.4-.2-.9-.1-1.1.3-.2.4-.1.9.3 1.1 4.3 2.7 9.2 4.1 14 4.1 3.9 0 7.9-.9 11.2-2.6.4-.2.6-.8.3-1.2h.4z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HirePage() {
  const techStackData = [
    {
      title: 'Frontend',
      icon: Laptop,
      items: [
        'React',
        'Next.js',
        'TailwindCSS',
        'Framer Motion',
        'React Query',
        'TypeScript',
        'React Native',
        'Expo',
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      items: ['Node.js', 'Express.js', 'tRPC'],
    },
    {
      title: 'Databases',
      icon: Database,
      items: ['MySQL', 'Redis', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'DevOps',
      icon: Wrench,
      items: ['AWS', 'Docker', 'Git'],
    },
  ];

  const companies = [
    { name: 'Apple', label: 'Apple' },
    { name: 'Google', label: 'Google' },
    { name: 'Meta', label: 'Meta' },
    { name: 'Microsoft', label: 'Microsoft' },
    { name: 'Amazon', label: 'Amazon' },
  ];

  return (
    <div className="w-full pt-28 sm:pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* ── 1. Page Header (Exact as Image 1) ── */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="space-y-4">
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight font-display leading-[1.08] transition-colors"
              style={{ color: 'var(--text-color)' }}
            >
              Let's work together
            </h1>
            <p
              className="text-sm sm:text-base leading-relaxed max-w-2xl font-sans transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              I'm always excited about new opportunities to create amazing digital experiences. Whether you're looking for a full-time engineer or need help with a specific project, I'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        {/* ── 2. My Tech Stack (Exact as Image 1 & 2) ── */}
        <section className="space-y-6">
          <ScrollReveal animation="fade-up" duration={600}>
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-tight font-display"
                style={{ color: 'var(--text-color)' }}
              >
                My Tech Stack
              </h2>
              <p
                className="text-xs sm:text-sm font-sans mt-1"
                style={{ color: 'var(--text-muted)' }}
              >
                Technologies that I use to get the job done.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {techStackData.map((col, idx) => {
              const IconComp = col.icon;
              return (
                <ScrollReveal
                  key={idx}
                  animation="scale-up"
                  delay={idx * 100}
                  duration={700}
                  className="h-full"
                >
                  <div
                    className="rounded-2xl border p-5 relative overflow-hidden flex flex-col justify-between backdrop-blur-sm shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg h-full"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--card-border)',
                    }}
                  >
                    <div>
                      {/* Column Header */}
                      <div className="flex items-center gap-2 pb-3 mb-4 border-b" style={{ borderColor: 'var(--card-border)' }}>
                        <IconComp className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                        <span className="text-sm font-semibold font-sans" style={{ color: 'var(--text-muted)' }}>
                          {col.title}
                        </span>
                      </div>

                      {/* Tech Items List */}
                      <div className="space-y-3.5">
                        {col.items.map((tech, tIdx) => (
                          <div key={tIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-sans">
                            <TechIcon name={tech} />
                            <span style={{ color: 'var(--text-color)' }} className="font-medium">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Faint watermark illustration at bottom right */}
                    <div className="mt-8 flex justify-end opacity-10 pointer-events-none select-none">
                      <IconComp className="w-16 h-16" style={{ color: 'var(--text-color)' }} />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ── 3. Why must you hire me? (Exact as Image 3) ── */}
        <section className="space-y-6">
          <ScrollReveal animation="fade-up" duration={600}>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight font-display"
              style={{ color: 'var(--text-color)' }}
            >
              Why must you hire me?
            </h2>
          </ScrollReveal>

          <div
            className="space-y-5 text-sm sm:text-base font-sans leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            {[
              "Well, hiring me comes with a complimentary package of unparalleled wit, a knack for turning challenges into well, still challenges but with a bit of humour, and a passion for delighting with everything I build.",
              "Jokes aside, I've worked among the leading engineering teams in India, I also have experience of working in various sectors ranging from food-tech, ed-tech to fin-tech.",
              "I am a quick learner and I am always looking to learn new things. I can work independently and I love a challenge.",
            ].map((text, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 90} duration={650}>
                <div className="flex items-start gap-2.5">
                  <span className="text-zinc-400 select-none text-base font-mono shrink-0">↳</span>
                  <p>{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── 4. My preferences (Exact as Image 3 & 4) ── */}
        <section className="space-y-6">
          <ScrollReveal animation="fade-up" duration={600}>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight font-display"
              style={{ color: 'var(--text-color)' }}
            >
              My preferences
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Amazing work culture.",
                desc: "It's fair to say I've been spoilt by the amazing work culture at my previous companies. I'd love to work at a place that values its employees and their well-being.",
              },
              {
                title: "Remote first.",
                desc: "I value the flexibility and comfort of working from anywhere. A company that supports remote work is a big plus for me.",
              },
              {
                title: "Familiar Tech stack.",
                desc: "I believe in using the right tool for the right job, and so far I've been able to pick up new technologies fairly quickly.",
              },
              {
                title: "Fair compensation.",
                desc: "I won't lie, I love getting fairly paid, for the work I do. But that's not my only incentive, anything but my side-projects are a testament to that.",
              },
            ].map((pref, pIdx) => (
              <ScrollReveal key={pIdx} animation="scale-up" delay={pIdx * 90} duration={650}>
                <div>
                  <div className="flex items-center gap-2 font-bold text-sm sm:text-base font-sans" style={{ color: 'var(--text-color)' }}>
                    <span className="text-zinc-400 font-mono">↳</span> {pref.title}
                  </div>
                  <p className="mt-1.5 pl-5 text-xs sm:text-sm leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                    {pref.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── 5. Companies I'd love to work with (Exact as Image 4) ── */}
        <section className="space-y-6">
          <ScrollReveal animation="fade-up" duration={600}>
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-tight font-display"
                style={{ color: 'var(--text-color)' }}
              >
                Companies I'd love to work with
              </h2>
              <p
                className="text-xs sm:text-sm font-sans mt-1"
                style={{ color: 'var(--text-muted)' }}
              >
                Dream companies where I'd love to make an impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {companies.map((company, cIdx) => (
              <ScrollReveal key={company.name} animation="scale-up" delay={cIdx * 70} duration={600}>
                <div className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border shadow-sm flex items-center justify-center p-4 transition-all duration-300 hover:scale-110 hover:shadow-md"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--card-border)',
                    }}
                  >
                    <CompanyLogo name={company.name} />
                  </div>
                  <span className="mt-2 text-xs font-medium font-sans" style={{ color: 'var(--text-muted)' }}>
                    {company.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── 6. Bottom Contact Icons ── */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center pt-10 pb-6 space-y-8">
            <div>
              <p className="text-base sm:text-lg font-semibold font-display" style={{ color: 'var(--text-color)' }}>
                Ready to start a conversation?
              </p>
              <p className="text-sm mt-1 font-serif italic" style={{ color: 'var(--text-muted)' }}>
                Let's create something extraordinary together!
              </p>
            </div>

            {/* Contact icon pills */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">

              {/* Gmail */}
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="contact-bubble group relative flex flex-col items-center gap-2"
              >
                <span className="contact-icon-ring" style={{ '--ring': '#EA4335', '--glow': 'rgba(234,67,53,0.25)' }}>
                  {/* Gmail SVG */}
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <path d="M2 6.5C2 5.67 2.67 5 3.5 5h17C21.33 5 22 5.67 22 6.5v11c0 .83-.67 1.5-1.5 1.5h-17C2.67 19 2 18.33 2 17.5v-11z" stroke="#EA4335" strokeWidth="1.5"/>
                    <path d="M2 7l10 7 10-7" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="contact-label">Gmail</span>
              </a>

              {/* Telegram */}
              <a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on Telegram"
                className="contact-bubble group relative flex flex-col items-center gap-2"
              >
                <span className="contact-icon-ring" style={{ '--ring': '#229ED9', '--glow': 'rgba(34,158,217,0.25)' }}>
                  {/* Telegram SVG */}
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <path d="M21.7 4.37l-3.67 17.27c-.27 1.2-1.02 1.5-2.07.93l-5.72-4.21-2.76 2.66c-.3.3-.56.56-1.15.56l.41-5.84L18.4 6.37c.47-.42-.1-.65-.74-.23L5.15 14.3.7 12.93c-.97-.3-1-.97.2-1.44L20.38 3c.8-.3 1.5.2 1.33 1.37z" fill="#229ED9"/>
                  </svg>
                </span>
                <span className="contact-label">Telegram</span>
              </a>

              {/* WhatsApp */}
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on WhatsApp"
                className="contact-bubble group relative flex flex-col items-center gap-2"
              >
                <span className="contact-icon-ring" style={{ '--ring': '#25D366', '--glow': 'rgba(37,211,102,0.25)' }}>
                  {/* WhatsApp SVG */}
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.18 1.6 6L0 24l6.17-1.6A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52z" fill="#25D366"/>
                    <path d="M17.47 14.93c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.66.85-.81 1.02-.15.17-.3.19-.56.06a7.07 7.07 0 0 1-2.09-1.29 7.8 7.8 0 0 1-1.44-1.8c-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.44h-.5c-.17 0-.45.06-.69.32C9 9.26 8.27 9.95 8.27 11.41c0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.06 4.48.71.3 1.26.49 1.69.62.71.22 1.36.19 1.87.11.57-.09 1.75-.72 2-1.41.25-.7.25-1.3.17-1.41-.07-.12-.24-.19-.5-.32z" fill="white"/>
                  </svg>
                </span>
                <span className="contact-label">WhatsApp</span>
              </a>

              {/* Call */}
              <a
                href={`tel:${personalInfo.phone}`}
                aria-label="Call me"
                className="contact-bubble group relative flex flex-col items-center gap-2"
              >
                <span className="contact-icon-ring" style={{ '--ring': '#F45E0C', '--glow': 'rgba(244,94,12,0.25)' }}>
                  <Phone className="w-7 h-7" style={{ color: '#F45E0C' }} strokeWidth={1.8} />
                </span>
                <span className="contact-label">Call</span>
              </a>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
