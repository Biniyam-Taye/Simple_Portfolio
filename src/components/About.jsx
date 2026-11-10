import React, { useState } from 'react';
import { ArrowUpRight, Zap, Palette, ShieldCheck, Terminal as TerminalIcon, User, Cpu, CornerDownLeft, Heart } from 'lucide-react';
import { personalInfo, terminalCommands } from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: "Welcome. Type 'help' to see commands." },
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleCommand = (cmd) => {
    const trimmed = (cmd || inputVal).trim().toLowerCase();
    if (!trimmed) return;
    const newH = [...terminalHistory, { type: 'user', text: `$ ${trimmed}` }];
    if (trimmed === 'clear') { setTerminalHistory([]); setInputVal(''); return; }
    newH.push(terminalCommands[trimmed]
      ? { type: 'output', text: terminalCommands[trimmed] }
      : { type: 'error', text: `Command not found: "${trimmed}". Type 'help'.` }
    );
    setTerminalHistory(newH);
    setInputVal('');
  };

  const tabs = [
    { id: 'overview',   icon: User,         label: 'Bio & Story' },
    { id: 'terminal',   icon: TerminalIcon, label: 'Interactive CLI' },
    { id: 'philosophy', icon: Cpu,          label: 'Core Values' },
  ];

  return (
    <section id="about" className="bg-white border-b border-border-base">
      {/* Section header row */}
      <div className="grid grid-cols-[1fr_auto] border-b border-border-base">
        <div className="p-6 flex flex-col gap-1">
          <span className="section-label">02 — About</span>
          <h2
            className="display-text"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Engineering<br />
            <span style={{ color: 'var(--orange)' }}>with Purpose</span>
          </h2>
        </div>
        <div className="hidden lg:flex flex-col items-end justify-end p-6 w-48 xl:w-64">
          <div className="font-display font-black text-[5rem] leading-none text-zinc-100 select-none">02</div>
        </div>
      </div>

      {/* Tab switcher */}
      <div className="flex border-b border-border-base overflow-x-auto">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-widest transition-all border-r border-border-base whitespace-nowrap ${
              activeTab === id
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

      {/* Tab: Overview */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] divide-y lg:divide-y-0 lg:divide-x divide-border-base">
          {/* Story */}
          <div className="p-6 sm:p-8 space-y-4">
            <h3 className="font-display font-bold text-2xl text-ink">
              Passionate about crafting intuitive digital products
            </h3>
            <div className="space-y-3 text-ink-muted text-sm leading-relaxed">
              <p>I have spent the last 5+ years building and scaling web applications with a focus on modern web standards, reactive state management, and design systems.</p>
              <p>My philosophy centres around the conviction that good engineering and beautiful design are not distinct disciplines — they amplify each other. When an application feels effortless, users stay engaged and businesses thrive.</p>
              <p>Whether building real-time collaboration dashboards, Web3 DeFi interfaces, or complex SaaS workflows, I treat accessibility, responsive layout, and performance as core fundamentals — not afterthoughts.</p>
            </div>

            {/* Quick specs grid */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border-base mt-4">
              {[
                { label: 'Location', value: personalInfo.location },
                { label: 'Focus',    value: 'Frontend & Full-Stack' },
                { label: 'Status',   value: 'Active / Open', highlight: true },
              ].map((item, i) => (
                <div key={i} className="border border-border-base p-3 bg-zinc-50">
                  <div className="section-label mb-1">{item.label}</div>
                  <div className={`text-xs font-semibold ${item.highlight ? 'text-emerald-600' : 'text-ink'}`}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature cards */}
          <div className="divide-y divide-border-base">
            {[
              { icon: Zap,         color: 'orange', title: 'Blazing Fast Performance', desc: 'Optimised bundles, dynamic imports, SSR/SSG caching, and smooth 60fps animations.' },
              { icon: Palette,     color: 'violet', title: 'Design System Engineering', desc: 'Modular, tokenised design systems built with Tailwind CSS, atomic components, and type safety.' },
              { icon: ShieldCheck, color: 'emerald',title: 'Clean & Maintainable Code', desc: 'Written for humans first: robust unit tests, predictable data flow, and readable architecture.' },
            ].map(({ icon: Icon, color, title, desc }, i) => (
              <div key={i} className="p-5 bg-white hover:bg-zinc-50 transition-colors">
                <div className={`w-9 h-9 flex items-center justify-center border mb-3 ${
                  color === 'orange'  ? 'border-orange/40 bg-orange/5 text-orange' :
                  color === 'violet'  ? 'border-violet-300 bg-violet-50 text-violet-600' :
                                        'border-emerald-300 bg-emerald-50 text-emerald-600'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-base text-ink mb-1">{title}</h4>
                <p className="text-xs text-ink-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Terminal */}
      {activeTab === 'terminal' && (
        <div className="p-4 sm:p-6 bg-zinc-950">
          {/* Terminal window chrome */}
          <div className="border border-zinc-700 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border-b border-zinc-700">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-3 font-mono text-xs text-zinc-400">biniyam@portfolio ~ zsh</span>
            </div>
            <div className="p-5 font-mono text-xs min-h-64 max-h-80 overflow-y-auto space-y-2 bg-zinc-950">
              {terminalHistory.map((item, i) => (
                <div key={i}>
                  {item.type === 'system' && <div className="text-zinc-500 italic">{item.text}</div>}
                  {item.type === 'user'   && <div className="text-emerald-400 font-bold">{item.text}</div>}
                  {item.type === 'output' && <div className="text-zinc-200 pl-3 border-l-2 border-orange py-1">{item.text}</div>}
                  {item.type === 'error'  && <div className="text-rose-400 pl-3 border-l-2 border-rose-500">{item.text}</div>}
                </div>
              ))}
            </div>
            {/* Quick chips */}
            <div className="px-4 py-2 bg-zinc-900 border-t border-zinc-700 flex flex-wrap gap-2">
              <span className="font-mono text-xs text-zinc-500">quick run:</span>
              {['help', 'about', 'skills', 'projects', 'contact', 'clear'].map(cmd => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2 py-0.5 font-mono text-xs text-zinc-300 bg-zinc-800 hover:bg-orange hover:text-white border border-zinc-700 hover:border-orange transition-all"
                >{cmd}</button>
              ))}
            </div>
            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-t border-zinc-700">
              <span className="text-orange font-mono font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleCommand()}
                placeholder="type a command…"
                className="flex-1 bg-transparent font-mono text-xs text-zinc-100 placeholder:text-zinc-600 outline-none"
              />
              <button onClick={() => handleCommand()} className="p-1.5 bg-orange/20 hover:bg-orange text-orange hover:text-white border border-orange transition-all">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Philosophy */}
      {activeTab === 'philosophy' && (
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-base">
          {[
            { icon: Zap,     color: 'orange',  title: 'User Experience First', desc: 'Code exists to solve real user problems. Every micro-interaction and transition is tuned to make users feel empowered and in control.' },
            { icon: Cpu,     color: 'violet',  title: 'Modern Architecture',   desc: 'Adopting the latest React paradigms, TypeScript strictness, server-side caching, and minimal runtime overhead to build resilient platforms.' },
            { icon: Heart,   color: 'emerald', title: 'Continuous Learning',   desc: 'Always curious, constantly exploring AI toolchains, Web3 architectures, and design trends to bring fresh perspectives to every project.' },
          ].map(({ icon: Icon, color, title, desc }, i) => (
            <div key={i} className="p-6 sm:p-8 hover:bg-zinc-50 transition-colors">
              <div className={`w-10 h-10 flex items-center justify-center border mb-4 ${
                color === 'orange'  ? 'border-orange/40 bg-orange/5 text-orange' :
                color === 'violet'  ? 'border-violet-300 bg-violet-50 text-violet-600' :
                                      'border-emerald-300 bg-emerald-50 text-emerald-600'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-xl text-ink mb-2">{title}</h4>
              <p className="text-sm text-ink-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
