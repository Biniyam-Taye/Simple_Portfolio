import React, { useState } from 'react';
import { ExternalLink, Eye, Search, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery]           = useState('');
  const [selectedProject, setSelectedProject]   = useState(null);

  const categories = ['All', 'Full-Stack', 'Web3', 'UI/UX'];

  const filtered = projectsData.filter(p => {
    const matchCat  = selectedCategory === 'All' || p.category === selectedCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
      || p.description.toLowerCase().includes(searchQuery.toLowerCase())
      || p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section id="projects" className="bg-zinc-50 border-b border-border-base">
      {/* Section header */}
      <div className="grid grid-cols-[1fr_auto] border-b border-border-base">
        <div className="p-6 flex flex-col gap-1">
          <span className="section-label">03 — Projects</span>
          <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Featured<br />
            <span style={{ color: 'var(--orange)' }}>Creations</span>
          </h2>
        </div>
        <div className="hidden lg:flex flex-col items-end justify-end p-6 w-48 xl:w-64">
          <div className="font-display font-black text-[5rem] leading-none text-zinc-200 select-none">03</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-0 border-b border-border-base">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-widest border-r border-border-base transition-all ${
              selectedCategory === cat
                ? 'bg-orange text-white'
                : 'bg-white text-ink-muted hover:text-ink'
            }`}
          >
            {cat}
          </button>
        ))}
        <div className="flex-1 relative">
          <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search projects…"
            className="w-full pl-10 pr-4 py-3 bg-white font-sans text-xs text-ink placeholder:text-zinc-400 border-none outline-none"
          />
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x-0 md:divide-x divide-y divide-border-base">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="group bg-white hover:bg-zinc-50 transition-colors flex flex-col"
          >
            {/* Image */}
            <div
              className="relative aspect-video overflow-hidden cursor-pointer border-b border-border-base"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              {/* Orange accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

              {/* Tags */}
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="tag-pill-outline bg-white/90 backdrop-blur-sm text-[10px]">{project.category}</span>
              </div>
              {project.stats && (
                <span className="absolute top-3 right-3 tag-pill text-[10px]">{project.stats.metric}</span>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-orange/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={e => { e.stopPropagation(); setSelectedProject(project); }}
                  className="flex items-center gap-2 bg-white text-ink px-4 py-2 text-xs font-bold uppercase tracking-wider font-sans translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <Eye className="w-3.5 h-3.5" /> Quick View
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3
                onClick={() => setSelectedProject(project)}
                className="font-display font-bold text-xl text-ink mb-1 cursor-pointer hover:text-orange transition-colors"
              >
                {project.title}
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed line-clamp-3 flex-1">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border-base">
                {project.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="px-2 py-0.5 border border-border-base text-[11px] font-mono text-ink-muted bg-zinc-50">{tag}</span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-[11px] font-mono text-ink-muted px-1">+{project.tags.length - 4}</span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-border-base bg-white">
              <button onClick={() => setSelectedProject(project)} className="text-xs font-mono text-ink-muted hover:text-orange transition-colors flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" /> Details
              </button>
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-1.5 border border-border-base text-ink-muted hover:border-orange hover:text-orange transition-all">
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-1.5 bg-orange text-white hover:bg-orange-dark transition-all">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="col-span-full p-12 text-center">
            <Search className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
            <h4 className="font-display font-bold text-xl text-ink mb-1">No projects matched</h4>
            <p className="text-xs text-ink-muted mb-4">Try adjusting your filters.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="btn-outline text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
