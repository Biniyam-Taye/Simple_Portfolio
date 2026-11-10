import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Sun,
  Moon,
  Menu,
  X,
  User,
  Briefcase,
  GraduationCap,
  Code2,
  Laptop,
  Folder,
  ArrowUpRight
} from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { getAssetUrl } from '../utils/imageHelper';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      return saved === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [theme]);

  // Track scroll position
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-close menu on location change (React recommended state-adjustment during render pattern)
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setMobileMenuOpen(false);
  }

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const navItems = [
    { label: 'About',     path: '/',          icon: User,          count: null },
    { label: 'Projects',  path: '/projects',  icon: Code2,         count: '10+' },
    { label: 'Hire',      path: '/hire',      icon: Briefcase,     count: 'open' },
    { label: 'Education', path: '/education', icon: GraduationCap, count: null },
    { label: 'Uses',      path: '/uses',      icon: Laptop,        count: null },
  ];

  const isCurrentActive = (path) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '/about';
    return location.pathname === path;
  };

  /* shared pill style when scrolled */
  const pillBase = `
    transition-all duration-300
    border
    ${scrolled
      ? 'backdrop-blur-md shadow-lg shadow-zinc-950/5 dark:shadow-black/20'
      : 'shadow-sm backdrop-blur-0'}
  `;

  const pillBg = scrolled ? 'var(--nav-bg)' : 'var(--card-bg)';

  return (
    <>
      {/* ── Fixed Top Bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
        <div
          className={`max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 transition-all duration-300 ${
            scrolled ? 'pt-3 sm:pt-4' : 'pt-4 sm:pt-7'
          }`}
        >
          {/* 1. Profile Picture Avatar Circle (Smoothly fades out when sidebar is open to prevent duplicate avatars) */}
          <Link
            to="/"
            aria-label="Homepage"
            title={`${personalInfo.name} - Home`}
            className={`pointer-events-auto group relative flex items-center justify-center shrink-0 focus:outline-none rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-md hover:border-zinc-400 dark:hover:border-zinc-600 ${pillBase} ${
              mobileMenuOpen
                ? 'opacity-0 pointer-events-none scale-90 -translate-x-3'
                : 'opacity-100 scale-100 translate-x-0'
            }`}
            style={{
              backgroundColor: pillBg,
              borderColor: 'var(--card-border)',
            }}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden p-[1.5px]">
              <img
                src={getAssetUrl(personalInfo.navbarAvatar, '/images/avatar.jpg')}
                alt={personalInfo.name}
                onError={(e) => {
                  e.currentTarget.src = '/images/avatar.jpg';
                }}
                className="w-full h-full rounded-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>
          </Link>

          {/* 2. Desktop Navigation Links (Hidden on Mobile) */}
          <nav
            aria-label="Primary navigation"
            className={`hidden md:flex pointer-events-auto items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 ${pillBase}`}
            style={{
              backgroundColor: pillBg,
              borderColor: 'var(--card-border)',
            }}
          >
            {navItems.map((item) => {
              const active = isCurrentActive(item.path);
              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={`relative px-3 py-1 rounded-full whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:text-teal-600 dark:hover:text-teal-400 ${
                    active ? 'font-semibold' : 'font-medium'
                  }`}
                  style={{ color: active ? '#0d9488' : 'var(--text-muted)' }}
                >
                  <span>{item.label}</span>
                  {active && <span className="sr-only">(current page)</span>}
                </NavLink>
              );
            })}
          </nav>

          {/* 3. Desktop Dark-Mode Button (Hidden on Mobile) */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`hidden md:flex group pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full items-center justify-center shrink-0 transition-all duration-300 hover:scale-108 active:scale-95 hover:shadow-md hover:border-zinc-400 dark:hover:border-zinc-600 ${pillBase}`}
            style={{
              backgroundColor: pillBg,
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)',
            }}
          >
            {theme === 'dark' ? (
              <Sun
                className="w-4 h-4 text-amber-300 transition-transform duration-300 ease-out group-hover:rotate-45 group-hover:scale-110"
                strokeWidth={2}
              />
            ) : (
              <Moon
                className="w-4 h-4 text-zinc-700 dark:text-zinc-300 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-110"
                strokeWidth={2}
              />
            )}
          </button>

          {/* 4. Mobile Minimalist Sidebar Toggle Icon */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`md:hidden pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-md hover:border-zinc-400 dark:hover:border-zinc-600 ${pillBase}`}
            style={{
              backgroundColor: pillBg,
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)',
            }}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-4 h-4 transition-transform duration-300" />
            )}
          </button>
        </div>
      </header>

      {/* ── Mobile Backdrop Blur ── */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-zinc-950/40 dark:bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* ── Modern Curved Sidebar Drawer (Inspired by Image 2 design system) ── */}
      <aside
        className={`fixed top-2.5 right-2.5 bottom-2.5 w-[min(340px,calc(100vw-20px))] z-50 flex flex-col justify-between rounded-[32px] border shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300 ease-out md:hidden overflow-hidden ${
          mobileMenuOpen
            ? 'translate-x-0 opacity-100 pointer-events-auto'
            : 'translate-x-[110%] opacity-0 pointer-events-none'
        }`}
        style={{
          backgroundColor:
            theme === 'dark' ? 'rgba(18, 19, 23, 0.96)' : 'rgba(250, 250, 252, 0.97)',
          borderColor:
            theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
          color: 'var(--text-color)',
        }}
      >
        {/* Top Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 pt-5 pb-3 space-y-5">
          {/* Header with Sparkle/Star Icon & Clean Close */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-200/60 dark:border-zinc-800/60">
            <div className="flex items-center gap-2 font-display font-semibold tracking-tight text-base text-zinc-900 dark:text-zinc-100">
              {/* Modern 4-point star matching reference Image 2 */}
              <svg
                className="w-4 h-4 fill-current text-zinc-900 dark:text-zinc-100"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
              </svg>
              <span>Menu</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all hover:scale-105 active:scale-95"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* User Profile Capsule Card */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-zinc-100/70 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800/50">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 shrink-0">
              <img
                src={getAssetUrl(personalInfo.navbarAvatar, '/images/avatar.jpg')}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display font-semibold text-xs tracking-tight truncate text-zinc-900 dark:text-zinc-100">
                {personalInfo.name}
              </div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-sans truncate">
                Full-Stack &amp; AI Developer
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available</span>
            </div>
          </div>

          {/* Navigation Items (Inspired by Image 2's Pill & Capsule Styling) */}
          <nav className="space-y-1">
            {navItems.map(({ label, path, icon: Icon, count }) => {
              const active = isCurrentActive(path);
              return (
                <NavLink
                  key={label}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-sm font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                        active
                          ? 'text-white dark:text-zinc-950'
                          : 'text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white'
                      }`}
                    />
                    <span>{label}</span>
                  </div>

                  {/* Right side indicator: pill / count / sign like Image 2 */}
                  <div className="flex items-center gap-1.5">
                    {count && (
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          active
                            ? 'bg-zinc-800 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-900'
                            : 'bg-zinc-200/70 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                        }`}
                      >
                        {count}
                      </span>
                    )}
                    {active ? (
                      <span className="text-xs opacity-60 leading-none">−</span>
                    ) : (
                      <span className="text-xs opacity-40 group-hover:opacity-100 transition-opacity leading-none">
                        +
                      </span>
                    )}
                  </div>
                </NavLink>
              );
            })}
          </nav>

          {/* Sub-Tree Branch Section (Signature layout from Reference Image 2) */}
          <div className="pt-2">
            <div className="flex items-center justify-between px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Folder className="w-3.5 h-3.5" />
                <span>Specialties</span>
              </span>
              <span className="text-[10px] font-mono opacity-60">3</span>
            </div>

            {/* Tree lines matching Image 2 */}
            <div className="ml-5 pl-3.5 border-l-2 border-zinc-200 dark:border-zinc-800/80 space-y-1 mt-1.5">
              <NavLink
                to="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <span>Full-Stack Web</span>
                </div>
                <ArrowUpRight className="w-3 h-3 opacity-40" />
              </NavLink>

              <NavLink
                to="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>AI Integrations</span>
                </div>
                <ArrowUpRight className="w-3 h-3 opacity-40" />
              </NavLink>

              <NavLink
                to="/hire"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Available for Hire</span>
                </div>
                <ArrowUpRight className="w-3 h-3 opacity-40" />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom Drawer Controls: Tactile Segmented Theme Switcher & Social Pills */}
        <div className="p-4 border-t border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/40 space-y-3">
          {/* Segmented Pill Theme Switcher (Modern tactile slider style) */}
          <div className="p-1 rounded-2xl bg-zinc-200/60 dark:bg-zinc-800/70 flex items-center gap-1 text-xs font-medium">
            <button
              onClick={() => setTheme('light')}
              type="button"
              className={`flex-1 py-1.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 ${
                theme === 'light'
                  ? 'bg-white text-zinc-950 shadow-xs font-semibold'
                  : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Light</span>
            </button>
            <button
              onClick={() => setTheme('dark')}
              type="button"
              className={`flex-1 py-1.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-zinc-900 text-white shadow-xs font-semibold'
                  : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
              <span>Dark</span>
            </button>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center justify-between pt-1 px-1 text-zinc-500 dark:text-zinc-400">
            <span className="text-[11px] font-sans text-zinc-400">Socials</span>
            <div className="flex items-center gap-1.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-zinc-200/60 dark:hover:bg-zinc-800 hover:text-teal-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-zinc-200/60 dark:hover:bg-zinc-800 hover:text-teal-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              {personalInfo.twitter && (
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-zinc-200/60 dark:hover:bg-zinc-800 hover:text-teal-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
