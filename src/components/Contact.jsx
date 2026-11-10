import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Copy, MapPin, Clock } from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData]     = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setSubmitting] = useState(false);
  const [isSubmitted, setSubmitted]   = useState(false);
  const [copiedEmail, setCopied]      = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const triggerConfetti = () => {
    const colors = ['#F45E0C', '#111111', '#FF8040'];
    const end = Date.now() + 1200;
    (function frame() {
      confetti({ particleCount: 3, angle: 60,  spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      triggerConfetti();
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-zinc-50 border-b border-border-base">
      {/* Header */}
      <div className="grid grid-cols-[1fr_auto] border-b border-border-base">
        <div className="p-6 flex flex-col gap-1">
          <span className="section-label">07 — Contact</span>
          <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Let's Build<br />
            <span style={{ color: 'var(--orange)' }}>Something</span>
          </h2>
        </div>
        <div className="hidden lg:flex flex-col items-end justify-end p-6 w-48 xl:w-64">
          <div className="font-display font-black text-[5rem] leading-none text-zinc-200 select-none">07</div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-border-base">

        {/* Left info */}
        <div className="divide-y divide-border-base">
          {/* Email copier */}
          <div className="p-6">
            <div className="section-label mb-3">Direct Email</div>
            <div
              onClick={handleCopy}
              className="flex items-center justify-between p-4 border border-border-base bg-white hover:border-orange cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange/10 border border-orange/30 flex items-center justify-center text-orange">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-ink-muted mb-0.5">EMAIL</div>
                  <div className="text-xs font-bold text-ink group-hover:text-orange transition-colors">{personalInfo.email}</div>
                </div>
              </div>
              {copiedEmail
                ? <CheckCircle className="w-4 h-4 text-emerald-500" />
                : <Copy className="w-4 h-4 text-zinc-400 group-hover:text-orange transition-colors" />
              }
            </div>
          </div>

          {/* Quick info */}
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-2.5 text-xs text-ink-muted font-mono">
              <MapPin className="w-3.5 h-3.5 text-orange" />
              {personalInfo.location}
            </div>
            <div className="flex items-center gap-2.5 text-xs text-ink-muted font-mono">
              <Clock className="w-3.5 h-3.5 text-orange" />
              Usually responds within 24 hours
            </div>
          </div>

          {/* Socials */}
          <div className="p-6">
            <div className="section-label mb-3">Connect</div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { href: personalInfo.github,   Icon: Github,   label: 'GitHub' },
                { href: personalInfo.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: personalInfo.twitter,  Icon: Twitter,  label: 'Twitter' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-1.5 p-3 border border-border-base bg-white hover:border-orange hover:text-orange transition-all text-ink-muted"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-wide">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="relative p-6 sm:p-8 bg-white">
          {isSubmitted && (
            <div className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center p-8 text-center">
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="font-display font-bold text-2xl text-ink mb-2">Message Sent!</h4>
              <p className="text-sm text-ink-muted">Thank you for reaching out. I'll be in touch shortly.</p>
            </div>
          )}

          <h3 className="font-display font-bold text-2xl text-ink mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-ink-muted uppercase tracking-wide mb-1.5">
                  Your Name <span className="text-orange">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="field"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-ink-muted uppercase tracking-wide mb-1.5">
                  Email <span className="text-orange">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="field"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-ink-muted uppercase tracking-wide mb-1.5">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Collaboration"
                className="field"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-ink-muted uppercase tracking-wide mb-1.5">
                Message <span className="text-orange">*</span>
              </label>
              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, goals, and timeline…"
                className="field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-orange w-full justify-center disabled:opacity-50"
            >
              {isSubmitting ? 'Sending…' : (
                <>Transmit Message <Send className="w-3.5 h-3.5" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
