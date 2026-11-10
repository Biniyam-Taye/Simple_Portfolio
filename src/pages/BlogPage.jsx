import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const [activeArticle, setActiveArticle] = useState(null);

  const posts = [
    {
      id: 'green-screen',
      date: 'October 6, 2018',
      title: 'Retractable Green Screen On the Cheap',
      excerpt: 'Low cost, high production value home-office hack.',
      content: `When setting up a high-quality video call or streaming environment in a small home office, lighting and backdrop are usually the biggest challenges.

Commercial pull-down green screens from specialized video equipment retailers can run upwards of $150 to $250. However, with a simple heavy-duty blackout roller blind and chromakey green fabric or matte spray paint, you can build an ultra-clean, ceiling-mounted retractable green screen for under $35.

Key Takeaways:
1. Mount directly into ceiling joists for stable, wrinkle-free tension.
2. Even lighting across the fabric is more important than camera sensor resolution.
3. Keep the screen at least 3 feet behind your chair to prevent green spill onto your hair and shoulders.`,
    },
    {
      id: 'wsl-metadata',
      date: 'March 10, 2018',
      title: 'Going Overboard with WSL metadata',
      excerpt: 'Use a folder from your Windows drive as your $HOME directory in WSL.',
      content: `Windows Subsystem for Linux (WSL) provides phenomenal developer capabilities on Windows. However, sharing files seamlessly between the Windows file system and your Linux environment without permission errors has historically been tricky.

With the introduction of DrvFs metadata support, Linux file attributes (chmod, chown) and case sensitivity can now be persisted directly onto NTFS drives.

By adding metadata flags to /etc/wsl.conf:
[automount]
options = "metadata,umask=22,fmask=11"

You can point your WSL user's home directory to /mnt/c/Users/<username>/workspace, enabling instant access to your code from both Windows IDEs and native Linux command line tools with zero synchronization lag.`,
    },
    {
      id: 'crazy-wsl',
      date: 'December 13, 2017',
      title: 'Getting Crazy with Windows Subsystem for Linux',
      excerpt: 'Getting Crazy with Windows Subsystem for Linux',
      content: `WSL changed the game for developers on Windows. Prior to this, running native bash scripts or Linux toolchains meant spinning up heavy VirtualBox VMs or dealing with Cygwin compromises.

In this post, I detail my initial journey configuring WSL from scratch:
- Replacing the default cmd prompt with a modern terminal emulator
- Setting up Zsh with Starship prompt
- Compiling native C and Node.js binaries directly on Windows
- Managing background server daemons like PostgreSQL and Redis directly from the command line.`,
    },
  ];

  return (
    <div className="w-full pt-28 sm:pt-32 pb-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10">
          
          {/* Continuous Vertical Timeline Line on Left */}
          <div
            className="absolute left-[7px] sm:left-[11px] top-4 bottom-8 w-[2px] pointer-events-none transition-colors"
            style={{
              backgroundColor: 'rgba(139, 92, 246, 0.4)', // subtle purple tint matching screenshot
            }}
          />

          {/* Posts List */}
          <div className="divide-y divide-transparent space-y-8 sm:space-y-12">
            {posts.map((post) => (
              <div
                key={post.id}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start pt-6 sm:pt-8"
              >
                {/* Purple Timeline Dot positioned exactly on the vertical line */}
                <div className="absolute -left-[23px] sm:-left-[35px] top-8 sm:top-10 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#8b5cf6] ring-4 ring-white dark:ring-[#0e0f12] shadow-sm shrink-0" />
                </div>

                {/* Left Column: Big Prominent Date */}
                <div className="md:col-span-4 pl-2 md:pl-0">
                  <h2
                    className="text-2xl sm:text-3xl font-bold font-display tracking-tight transition-colors"
                    style={{ color: 'var(--text-color)' }}
                  >
                    {post.date}
                  </h2>
                </div>

                {/* Middle Column: Subtle Date */}
                <div className="hidden md:block md:col-span-2 pt-1.5">
                  <span
                    className="text-xs sm:text-sm font-sans"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {post.date}
                  </span>
                </div>

                {/* Right Column: Article Title, Excerpt, and Link */}
                <div className="md:col-span-6 space-y-2 pt-0.5 pl-2 md:pl-0">
                  <h3
                    onClick={() => setActiveArticle(post)}
                    className="font-bold text-base sm:text-lg font-sans cursor-pointer hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    style={{ color: 'var(--text-color)' }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="text-xs sm:text-sm font-sans leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setActiveArticle(post)}
                      className="text-xs sm:text-sm font-medium transition-colors hover:underline inline-flex items-center gap-1 cursor-pointer"
                      style={{ color: '#0d9488' }}
                    >
                      Read article <span className="text-sm font-sans">›</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl border"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full border text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              style={{ borderColor: 'var(--card-border)' }}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              {activeArticle.date}
            </span>

            <h2 className="font-display font-bold text-2xl sm:text-3xl mt-2 mb-4 pr-8">
              {activeArticle.title}
            </h2>

            <div
              className="border-t pt-5 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4 font-sans"
              style={{
                borderColor: 'var(--card-border)',
                color: 'var(--text-muted)',
              }}
            >
              {activeArticle.content}
            </div>

            <div className="mt-8 pt-5 border-t flex justify-end" style={{ borderColor: 'var(--card-border)' }}>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
