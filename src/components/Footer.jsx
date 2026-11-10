import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { getAssetUrl } from '../utils/imageHelper';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const footerLinks = [
    { label: 'About', path: '/' },
    { label: 'Hire', path: '/hire' },
    { label: 'Education', path: '/education' },
    { label: 'Projects', path: '/projects' },
    { label: 'Uses', path: '/uses' },
  ];

  return (
    <footer
      className="w-full border-t transition-colors mt-auto"
      style={{
        backgroundColor: 'var(--bg-color)',
        borderColor: 'var(--card-border)',
        color: 'var(--text-color)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100 dark:border-zinc-850">
          
          {/* Brand & Mini Bio */}
          <div className="flex items-center gap-3">
            <Link to="/" className="w-9 h-9 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm shrink-0">
              <img
                src={getAssetUrl(personalInfo.navbarAvatar, '/images/avatar.jpg')}
                alt={personalInfo.name}
                onError={(e) => { e.currentTarget.src = '/images/avatar.jpg'; }}
                className="w-full h-full object-cover"
              />
            </Link>
            <div>
              <div className="font-display font-bold text-base text-ink dark:text-zinc-100">{personalInfo.name}</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-sans">{personalInfo.role}</div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium">
            {footerLinks.map(link => (
              <Link
                key={link.label}
                to={link.path}
                className="text-zinc-500 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-ink dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-ink dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-ink dark:hover:text-white transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 dark:text-zinc-500 font-sans">
          <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          <span>Crafted with React 19, Tailwind CSS & Vite</span>
        </div>
      </div>
    </footer>
  );
}
