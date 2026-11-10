import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code2, Layers, Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero',       href: '#hero',       icon: Home,      label: 'Home' },
    { id: 'about',      href: '#about',      icon: User,      label: 'About' },
    { id: 'projects',   href: '#projects',   icon: Briefcase, label: 'Projects' },
    { id: 'skills',     href: '#skills',     icon: Code2,     label: 'Skills' },
    { id: 'experience', href: '#experience', icon: Layers,    label: 'Experience' },
    { id: 'contact',    href: '#contact',    icon: Mail,      label: 'Contact' },
  ];

  const socialLinks = [
    { href: personalInfo.github,   icon: Github,   label: 'GitHub' },
    { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: personalInfo.twitter,  icon: Twitter,  label: 'Twitter' },
  ];

  return (
    <>
      {/* Left Sidebar – navigation */}
      <aside className="fixed left-0 top-0 h-full z-50 flex flex-col items-center justify-between py-8 w-16 border-r border-zinc-200 bg-white/90 backdrop-blur-sm hidden lg:flex">
        {/* Logo mark */}
        <a
          href="#hero"
          className="w-9 h-9 rounded-none bg-orange-500 flex items-center justify-center shadow-none hover:bg-orange-600 transition-colors"
          aria-label="Home"
        >
          <span className="font-black text-white text-base font-display leading-none">B</span>
        </a>

        {/* Nav icons */}
        <nav className="flex flex-col items-center gap-1">
          {navItems.map(({ id, href, icon: Icon, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={href}
                aria-label={label}
                title={label}
                className={`group relative flex items-center justify-center w-10 h-10 transition-all duration-200 ${
                  isActive
                    ? 'text-orange-500'
                    : 'text-zinc-400 hover:text-zinc-900'
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-orange-500 -ml-px" />
                )}
                <Icon className="w-4 h-4" strokeWidth={isActive ? 2.5 : 1.5} />
                {/* Tooltip */}
                <span className="absolute left-full ml-3 px-2 py-1 bg-zinc-900 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-sans">
                  {label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Social links at bottom */}
        <div className="flex flex-col items-center gap-3">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="text-zinc-400 hover:text-orange-500 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </aside>

      {/* Right sidebar – social strip (like in the reference) */}
      <aside className="fixed right-0 top-0 h-full z-50 flex-col items-center justify-center gap-5 w-12 border-l border-zinc-200 bg-white/90 backdrop-blur-sm hidden lg:flex">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="text-zinc-400 hover:text-orange-500 transition-colors"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
        {/* Vertical label */}
        <div className="mt-4 flex flex-col items-center gap-1">
          <div className="w-px h-10 bg-zinc-300" />
          <span
            className="text-[9px] font-mono text-zinc-400 tracking-widest uppercase"
            style={{ writingMode: 'vertical-rl' }}
          >
            Social
          </span>
        </div>
      </aside>

      {/* Mobile bottom bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex items-center justify-around bg-white border-t border-zinc-200 py-2 px-4">
        {navItems.map(({ id, href, icon: Icon, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={href}
              aria-label={label}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                isActive ? 'text-orange-500' : 'text-zinc-400'
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[9px] font-medium">{label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
