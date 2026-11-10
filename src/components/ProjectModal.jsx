import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Dialog */}
      <div
        className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl border z-15 my-8 shadow-2xl overflow-hidden transition-all"
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--card-border)',
          color: 'var(--text-color)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = '/images/avatar.jpg'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Title overlay */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono font-medium mb-1.5">
              {project.category}
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7 space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold opacity-60 mb-2">
              Overview
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {project.longDescription || project.description}
            </p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold opacity-60 mb-3">
                Key Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold opacity-60 mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t flex flex-wrap items-center justify-between gap-3" style={{ borderColor: 'var(--card-border)' }}>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl border border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-xs font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90 text-xs font-medium inline-flex items-center gap-1.5 transition-opacity"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono hover:underline cursor-pointer"
              style={{ color: 'var(--text-muted)' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
