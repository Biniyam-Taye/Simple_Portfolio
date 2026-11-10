import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function UsesPage() {
  const sections = [
    {
      category: 'Workstation',
      items: [
        {
          name: 'Dell Latitude 7490',
          badge: 'Personal',
          description:
            'My primary workstation powered by an Intel Core i7 8th Gen processor, 16GB DDR4 RAM, and 512GB NVMe SSD running Windows 11. Built with a durable carbon-fiber reinforced magnesium chassis, crisp 14-inch Full HD anti-glare display, and an exceptional tactile keyboard that makes long coding sessions effortless. It seamlessly drives external 4K monitors and handles full-stack Docker containers and local development servers without breaking a sweat.',
        },
      ],
    },
    {
      category: 'Development Tools',
      items: [
        {
          name: 'Visual Studio Code',
          badge: 'Manual',
          description:
            'My go-to code editor for manual development work and precision full-stack engineering. The extensive plugin ecosystem (Tailwind CSS IntelliSense, ESLint, Prettier), custom vim bindings, and integrated terminal make it perfect for my workflow.',
        },
        {
          name: 'Antigravity IDE',
          badge: 'Agentic AI',
          description:
            'Next-generation agentic AI development environment by Google DeepMind. Ideal for autonomous pair programming, multi-file architectural refactoring, running local verification subagents, and complex task execution.',
        },
        {
          name: 'Claude Code',
          badge: 'CLI Agent',
          description:
            'Anthropic\'s high-speed agentic CLI tool directly inside my terminal. Perfect for fast codebase exploration, drafting intricate Git commits, automated test runs, and deep architectural code reviews.',
        },
        {
          name: 'Cursor',
          badge: 'AI Editor',
          description:
            'AI-first code editor built for instant intelligent tab completions, conversational repository understanding, and interactive inline code generation across large workspaces.',
        },
      ],
    },
    {
      category: 'Documentation & Design',
      items: [
        {
          name: 'Notion',
          badge: 'Personal',
          description:
            'My centralized digital headquarters for architectural decision records (ADRs), client project roadmaps, code logic solutions, and daily sprint tracking.',
        },
        {
          name: 'Figma',
          badge: 'Design',
          description:
            'Where all UI/UX layout begins. Used for wireframing, component design systems, auto-layout tokens, and interactive client prototypes before writing a single line of code.',
        },
        {
          name: 'Obsidian',
          badge: 'Knowledge',
          description:
            'Local-first, markdown-powered personal knowledge management system with bi-directional linking. Essential for deep technical research, algorithms, and system design notes.',
        },
        {
          name: 'Excalidraw',
          badge: 'Whiteboard',
          description:
            'Lightweight, virtual hand-drawn style whiteboard for rapidly sketching out database entity relationships, distributed system data flows, and quick architectural diagrams.',
        },
      ],
    },
    {
      category: 'Productivity',
      items: [
        {
          name: 'Raycast',
          badge: 'Utility',
          description:
            'Blazing fast keyboard-driven command palette. Essential for quick clipboard history, custom shell script commands, window tiling, and GitHub issue navigation with zero friction.',
        },
        {
          name: 'Warp Terminal',
          badge: 'CLI',
          description:
            'Modern GPU-accelerated terminal with block-based command execution, saved workflows, and native AI command lookup that elevates daily command line efficiency.',
        },
        {
          name: 'Docker Desktop',
          badge: 'DevOps',
          description:
            'Indispensable containerization platform for running isolated local PostgreSQL databases, Redis caching layers, and microservice dependencies with one-click orchestration.',
        },
        {
          name: 'Bruno & Postman',
          badge: 'API Testing',
          description:
            'Lightweight, Git-friendly API development and testing tools for exploring, verifying, and debugging RESTful APIs, GraphQL endpoints, and real-time WebSocket streams.',
        },
      ],
    },
  ];

  return (
    <div className="w-full pt-28 sm:pt-32 pb-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* ── Page Header (Exact as screenshot) ── */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="space-y-4">
            <h1
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight font-display leading-[1.12] transition-colors"
              style={{ color: 'var(--text-color)' }}
            >
              Software and gadgets I use to get the job done.
            </h1>

            <p
              className="text-sm sm:text-base leading-relaxed max-w-3xl font-sans transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              I'm a techie at heart and love to try out new software and gadgets to optimize my life for the things I enjoy doing. Here's a list of my current favorites. I'll try to keep this list updated as I change things up. If you have any questions about any of these, feel free to reach out on Twitter. I'm always happy to chat about this stuff 🤓.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Timeline Categories Container (Exact as screenshot) ── */}
        <div className="relative pl-6 sm:pl-10 pt-4">
          
          {/* Continuous Vertical Purple Accent Line on Left */}
          <div
            className="absolute left-[7px] sm:left-[11px] top-6 bottom-10 w-[2px] pointer-events-none transition-colors"
            style={{
              backgroundColor: 'rgba(139, 92, 246, 0.4)', // subtle purple tint matching screenshots
            }}
          />

          {/* Sections List */}
          <div className="space-y-12 sm:space-y-16">
            {sections.map((section, sIdx) => (
              <div
                key={sIdx}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start pt-2"
              >
                {/* Purple Timeline Dot positioned exactly on the vertical line */}
                <div className="absolute -left-[23px] sm:-left-[35px] top-3.5 sm:top-4 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#8b5cf6] ring-4 ring-white dark:ring-[#0e0f12] shadow-sm shrink-0 transition-transform duration-300 hover:scale-125" />
                </div>

                {/* Left Column: Category Heading */}
                <div className="md:col-span-4 pl-2 md:pl-0">
                  <ScrollReveal animation="fade-left" delay={sIdx * 80} duration={650}>
                    <h2
                      className="text-2xl sm:text-3xl font-bold font-display tracking-tight transition-colors sticky top-28"
                      style={{ color: 'var(--text-color)' }}
                    >
                      {section.category}
                    </h2>
                  </ScrollReveal>
                </div>

                {/* Right Column: Items List under this category */}
                <div className="md:col-span-8 space-y-7 pl-2 md:pl-0">
                  {section.items.map((item, iIdx) => (
                    <ScrollReveal
                      key={iIdx}
                      animation="fade-up"
                      delay={iIdx * 100}
                      duration={700}
                    >
                      <div className="space-y-1.5 p-4 rounded-2xl border border-transparent hover:border-zinc-200/80 dark:hover:border-zinc-800 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-all duration-300">
                        {/* Item Title and Pill Badge */}
                        <div className="flex items-center gap-2.5">
                          <h3
                            className="font-bold text-base sm:text-lg font-sans transition-colors"
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

                        {/* Item Description */}
                        <p
                          className="text-xs sm:text-sm font-sans leading-relaxed"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {item.description}
                        </p>
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
