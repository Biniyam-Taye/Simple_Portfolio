import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';
import { personalInfo } from '../data/portfolioData';
import PortraitScrollAnimation from './PortraitScrollAnimation';

export default function Hero() {
  const leftColRef = useRef(null);

  // Smooth scroll-reveal effect for About Me paragraphs and sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-5');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = leftColRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full pt-24 sm:pt-32 pb-16 sm:pb-36 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Bio Paragraphs with Smooth Scroll Reveals */}
          <div ref={leftColRef} className="md:col-span-7 flex flex-col justify-start">
            <h1
              className="scroll-reveal opacity-0 translate-y-5 transition-all duration-700 ease-out text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight font-display leading-[1.08]"
              style={{ color: 'var(--text-color)' }}
            >
              About me
            </h1>

            <div
              className="mt-5 sm:mt-6 space-y-5 sm:space-y-6 text-sm sm:text-base leading-relaxed font-sans"
              style={{ color: 'var(--text-muted)' }}
            >
              <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-700 delay-100 ease-out">
                I’m <strong style={{ color: 'var(--text-color)' }} className="font-semibold">{personalInfo.name}</strong>, a passionate full-stack web developer specializing in React, Next.js, Node.js, MongoDB, MySQL, Express, and modern AI integrations. I love turning ideas into smooth, scalable, and user-focused applications that deliver real value.
              </p>

              <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-700 delay-150 ease-out">
                My journey into tech started with a deep curiosity for how digital products are built. Over time, that curiosity grew into a strong commitment to mastering full-stack development and exploring the possibilities of AI-powered solutions.
              </p>

              <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-700 delay-200 ease-out space-y-2 pt-1 border-l-2 border-teal-500/30 pl-3.5 sm:pl-4 py-0.5 hover:border-teal-500 transition-colors duration-300">
                <h2 style={{ color: 'var(--text-color)' }} className="font-semibold text-base sm:text-lg">
                  My Approach:
                </h2>
                <p>
                  I believe in building clean, maintainable, and efficient systems. Writing reliable code, optimizing performance, and ensuring scalability are always top priorities in my work. I enjoy learning new tools, improving workflows, and staying aligned with modern development standards.
                </p>
              </div>

              <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-700 delay-200 ease-out space-y-2 pt-1 border-l-2 border-teal-500/30 pl-3.5 sm:pl-4 py-0.5 hover:border-teal-500 transition-colors duration-300">
                <h2 style={{ color: 'var(--text-color)' }} className="font-semibold text-base sm:text-lg">
                  What I Do:
                </h2>
                <p>
                  I build full-stack web applications from front to back, with experience in creating dynamic interfaces, robust APIs, and secure data-driven systems. Recently, I’ve been focusing on integrating AI features into web apps such as smart automation, chat-based tools, and intelligent content generation to enhance user experiences and product capabilities.
                </p>
              </div>

              <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-700 delay-250 ease-out">
                Outside of coding, I enjoy exploring new technologies, improving my skill set, and sharing what I learn with other developers. I’m always excited about new challenges and opportunities to build meaningful digital products.
              </p>
            </div>
          </div>

          {/* Right Column: Rounded Photo Card & Social Links */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start md:sticky md:top-28 self-start w-full">
            {/* Photo Card with Rounded Corners and Subtle Angle matching reference */}
            <div className="relative group w-full max-w-[320px] sm:max-w-[360px] mx-auto md:mx-0">
              <div
                className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] border shadow-xl rotate-1 sm:rotate-2 group-hover:rotate-0 transition-transform duration-300"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--card-border)',
                }}
              >
                <PortraitScrollAnimation alt={personalInfo.name} />
              </div>

              {/* Social Links under photo with unique interactive hover motion */}
              <div className="mt-6 sm:mt-7 flex flex-col gap-2.5 sm:gap-3 font-sans text-sm w-full pl-0 md:pl-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between p-2 rounded-xl transition-all duration-300 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 hover:text-teal-600"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <div className="inline-flex items-center gap-3">
                    <Linkedin className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:text-teal-600" />
                    <span className="font-medium transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--text-color)' }}>
                      Follow on LinkedIn
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-teal-600" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between p-2 rounded-xl transition-all duration-300 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 hover:text-teal-600"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <div className="inline-flex items-center gap-3">
                    <Github className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:text-teal-600" />
                    <span className="font-medium transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--text-color)' }}>
                      Follow on GitHub
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-teal-600" />
                </a>

                {personalInfo.twitter && (
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-between p-2 rounded-xl transition-all duration-300 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 hover:text-teal-600"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <div className="inline-flex items-center gap-3">
                      <Twitter className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:text-teal-600" />
                      <span className="font-medium transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--text-color)' }}>
                        Follow on X (Twitter)
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-teal-600" />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
