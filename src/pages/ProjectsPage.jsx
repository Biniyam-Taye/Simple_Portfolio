import React, { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Github } from '../components/Icons';
import { personalInfo, projectsData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import ScrollReveal from '../components/ScrollReveal';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full-Stack', 'Frontend', 'AI & Full-Stack', 'UI/UX'];

  const filtered = projectsData.filter((p) => {
    const matchCat =
      selectedCategory === 'All' ||
      p.category === selectedCategory ||
      (selectedCategory === 'Full-Stack' && p.category?.includes('Full-Stack'));
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full pt-28 sm:pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Hero Section */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center flex flex-col items-center justify-center space-y-5 pt-4">
            {/* Centered Pill Badge */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-xs font-sans text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-xs group"
            >
              <span className="opacity-90">My Projects Portfolio</span>
              <span className="font-semibold text-zinc-900 dark:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                View on GitHub <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-ink dark:text-zinc-100 leading-[1.1] max-w-3xl">
              Things I've made trying
              <br />
              to put my mark
            </h1>

            {/* Subtitle Description */}
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans px-2">
              I've worked on tons of little projects over the years, but these are some of the ones that
              I'm most proud of. If you see something that piques your interest, check it out!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  const grid = document.getElementById('projects-grid');
                  if (grid) grid.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-sm hover:opacity-90 transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
              >
                View All Projects
              </button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 font-medium text-sm inline-flex items-center gap-2 transition-all shadow-xs hover:scale-105 active:scale-95"
              >
                <Github className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter & Search Bar */}
        <ScrollReveal animation="fade-up" delay={150} duration={600}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-b border-zinc-200/60 dark:border-zinc-800/80 pb-6">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs'
                      : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or tags..."
                className="w-full pl-9 pr-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs text-ink dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 font-sans shadow-xs transition-colors"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Column Responsive Projects Grid */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 scroll-mt-24"
        >
          {filtered.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              animation="scale-up"
              delay={(idx % 3) * 100}
              duration={700}
              className="h-full"
            >
              <div
                className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-2xl hover:-translate-y-1 group h-full"
              >
                {/* Preview Image */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-108"
                    onError={(e) => {
                      e.currentTarget.src = '/images/avatar.jpg';
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h2
                      onClick={() => setSelectedProject(project)}
                      className="font-display font-bold text-xl sm:text-2xl text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h2>
                    <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-sans font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center gap-3">
                    {/* GitHub button (Blue outline) */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-blue-400 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-xs font-medium transition-colors hover:scale-105 active:scale-95"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>

                    {/* Live Demo button (Light gray pill) */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium transition-colors hover:scale-105 active:scale-95"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
}
