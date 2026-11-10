import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Cloud, Palette, Cpu, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visible, setVisible]               = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const categories = [
    { id: 'all',      label: 'All',      icon: Cpu },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend',  label: 'Backend',  icon: Database },
    { id: 'devops',   label: 'DevOps',   icon: Cloud },
    { id: 'design',   label: 'Design',   icon: Palette },
  ];

  const getGroups = () => {
    const all = [
      { title: 'Frontend',  skills: skillsData.frontend, icon: Code },
      { title: 'Backend',   skills: skillsData.backend,  icon: Database },
      { title: 'DevOps',    skills: skillsData.devops,   icon: Cloud },
      { title: 'Design',    skills: skillsData.design,   icon: Palette },
    ];
    if (activeCategory === 'all') return all;
    return all.filter(g => g.title.toLowerCase() === activeCategory);
  };

  const groups = getGroups();

  return (
    <section id="skills" ref={sectionRef} className="bg-white border-b border-border-base">
      {/* Header */}
      <div className="grid grid-cols-[1fr_auto] border-b border-border-base">
        <div className="p-6 flex flex-col gap-1">
          <span className="section-label">04 — Skills</span>
          <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Tech Stack &<br />
            <span style={{ color: 'var(--orange)' }}>Proficiencies</span>
          </h2>
        </div>
        <div className="hidden lg:flex flex-col items-end justify-end p-6 w-48 xl:w-64">
          <div className="font-display font-black text-[5rem] leading-none text-zinc-100 select-none">04</div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex border-b border-border-base overflow-x-auto">
        {categories.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(id)}
            className={`flex items-center gap-2 px-5 py-3.5 text-xs font-mono font-bold uppercase tracking-widest border-r border-border-base whitespace-nowrap transition-all ${
              activeCategory === id
                ? 'bg-orange text-white'
                : 'bg-white text-ink-muted hover:text-ink hover:bg-zinc-50'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
        <div className="flex-1" />
      </div>

      {/* Skills content */}
      <div className={`grid ${groups.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-2xl'} divide-y md:divide-y-0 md:divide-x divide-border-base`}>
        {groups.map((group, gi) => {
          const Icon = group.icon;
          return (
            <div key={gi} className="p-6 sm:p-8 bg-white">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-base">
                <div className="w-9 h-9 flex items-center justify-center border border-orange/40 bg-orange/5 text-orange">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-ink">{group.title}</h3>
                  <span className="section-label">{group.skills.length} competencies</span>
                </div>
              </div>

              <div className="space-y-4">
                {group.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="flex items-center gap-1.5 text-ink">
                        <CheckCircle className="w-3 h-3 text-orange" />
                        {skill.name}
                      </span>
                      <span className="font-bold text-orange">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{ width: visible ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tools ticker */}
      <div className="border-t border-border-base py-4 bg-zinc-50 overflow-hidden">
        <div className="animate-marquee flex gap-0">
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex items-center gap-0 shrink-0">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL', 'Docker', 'Figma', 'Three.js', 'Tailwind', 'Redis', 'AWS'].map((t, i) => (
                <React.Fragment key={i}>
                  <span className="px-5 py-1 font-mono text-xs uppercase tracking-widest text-ink-muted whitespace-nowrap">{t}</span>
                  <span className="text-orange font-bold">·</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
