import React, { useEffect, useRef, useState } from 'react';

const IMAGES = [
  '/images/developer/pose-1.png',
  '/images/developer/pose-2.png',
  '/images/developer/pose-3.png',
];

// Smooth hermite smoothstep
function smoothstep(min, max, value) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

export default function PortraitScrollAnimation({ alt = 'Portrait' }) {
  const containerRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const sheenRef = useRef(null);

  // Animation frame and interpolation refs
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef(null);

  // Check prefers-reduced-motion
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // 1. Listen for changes in prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener?.('change', handler);
    return () => {
      mediaQuery.removeEventListener?.('change', handler);
    };
  }, []);

  // 2. Preload all three portrait images
  useEffect(() => {
    IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // 3. Apply 2.5D cinematic camera movement directly to DOM elements for 120fps hardware acceleration
  const applyProgress = (p) => {
    const clamped = Math.max(0, Math.min(1, p));

    let op1 = 0, op2 = 0, op3 = 0;
    let t1 = '', t2 = '', t3 = '';
    let f1 = 'none', f2 = 'none', f3 = 'none';

    if (clamped <= 0.5) {
      // ── STAGE 1: Pose 1 -> Pose 2 ──
      const u = clamped / 0.5; // 0.0 -> 1.0
      const ease = smoothstep(0, 1, u);

      // Opacities: crossfade with smooth overlap
      op1 = 1 - smoothstep(0.2, 0.9, u);
      op2 = smoothstep(0.1, 0.8, u);
      op3 = 0;

      // Pose 1 (Outgoing): smoothly tracks back, recedes in 3D depth, drifts slightly left
      const tx1 = -26 * ease;
      const ty1 = -12 * ease;
      const tz1 = -60 * ease;
      const ry1 = -4.5 * ease;
      const rx1 = 2.5 * ease;
      const sc1 = 1.0 - 0.03 * ease;
      const bright1 = 1.0 - 0.06 * ease;

      t1 = `translate3d(${tx1.toFixed(2)}px, ${ty1.toFixed(2)}px, ${tz1.toFixed(2)}px) rotateY(${ry1.toFixed(2)}deg) rotateX(${rx1.toFixed(2)}deg) scale(${sc1.toFixed(4)})`;
      f1 = `brightness(${bright1.toFixed(3)}) contrast(1.02)`;

      // Pose 2 (Incoming): swoops in from depth, rotating gently into viewer framing
      const inv = 1 - ease;
      const tx2 = 28 * inv;
      const ty2 = 14 * inv;
      const tz2 = -55 * inv;
      const ry2 = 4.2 * inv;
      const rx2 = -2.2 * inv;
      const sc2 = 1.0 + 0.035 * inv;
      const bright2 = 1.0 - 0.05 * inv;

      t2 = `translate3d(${tx2.toFixed(2)}px, ${ty2.toFixed(2)}px, ${tz2.toFixed(2)}px) rotateY(${ry2.toFixed(2)}deg) rotateX(${rx2.toFixed(2)}deg) scale(${sc2.toFixed(4)})`;
      f2 = `brightness(${bright2.toFixed(3)}) contrast(1.02)`;

      // Pose 3: Waiting in depth
      t3 = `translate3d(-25px, 12px, -60px) rotateY(-4deg) rotateX(2deg) scale(1.035)`;
      f3 = `brightness(0.95) contrast(1.02)`;
    } else {
      // ── STAGE 2: Pose 2 -> Pose 3 ──
      const v = (clamped - 0.5) / 0.5; // 0.0 -> 1.0
      const ease = smoothstep(0, 1, v);

      // Opacities
      op1 = 0;
      op2 = 1 - smoothstep(0.2, 0.9, v);
      op3 = smoothstep(0.1, 0.8, v);

      // Pose 1: Hidden
      t1 = `translate3d(-30px, -15px, -80px) rotateY(-5deg) rotateX(3deg) scale(0.96)`;
      f1 = `brightness(0.92) contrast(1.02)`;

      // Pose 2 (Outgoing): drifts right and recedes into background depth
      const tx2 = 24 * ease;
      const ty2 = -14 * ease;
      const tz2 = -55 * ease;
      const ry2 = 3.8 * ease;
      const rx2 = -2.0 * ease;
      const sc2 = 1.0 - 0.03 * ease;
      const bright2 = 1.0 - 0.05 * ease;

      t2 = `translate3d(${tx2.toFixed(2)}px, ${ty2.toFixed(2)}px, ${tz2.toFixed(2)}px) rotateY(${ry2.toFixed(2)}deg) rotateX(${rx2.toFixed(2)}deg) scale(${sc2.toFixed(4)})`;
      f2 = `brightness(${bright2.toFixed(3)}) contrast(1.02)`;

      // Pose 3 (Incoming & Settling): glides from lower-left depth into rest framing (0,0,0)
      const inv = 1 - ease;
      const tx3 = -26 * inv;
      const ty3 = 12 * inv;
      const tz3 = -50 * inv;
      const ry3 = -3.8 * inv;
      const rx3 = 2.0 * inv;
      const sc3 = 1.0 + 0.035 * inv;
      const bright3 = 1.0 - 0.05 * inv;

      t3 = `translate3d(${tx3.toFixed(2)}px, ${ty3.toFixed(2)}px, ${tz3.toFixed(2)}px) rotateY(${ry3.toFixed(2)}deg) rotateX(${rx3.toFixed(2)}deg) scale(${sc3.toFixed(4)})`;
      f3 = `brightness(${bright3.toFixed(3)}) contrast(1.02)`;
    }

    if (img1Ref.current) {
      img1Ref.current.style.opacity = op1.toFixed(4);
      img1Ref.current.style.transform = t1;
      img1Ref.current.style.filter = f1;
      img1Ref.current.style.visibility = op1 > 0.001 ? 'visible' : 'hidden';
    }
    if (img2Ref.current) {
      img2Ref.current.style.opacity = op2.toFixed(4);
      img2Ref.current.style.transform = t2;
      img2Ref.current.style.filter = f2;
      img2Ref.current.style.visibility = op2 > 0.001 ? 'visible' : 'hidden';
    }
    if (img3Ref.current) {
      img3Ref.current.style.opacity = op3.toFixed(4);
      img3Ref.current.style.transform = t3;
      img3Ref.current.style.filter = f3;
      img3Ref.current.style.visibility = op3 > 0.001 ? 'visible' : 'hidden';
    }

    // Subtle cinematic light sheen shifting angle across scroll
    if (sheenRef.current) {
      const sheenOpacity = (0.04 + Math.sin(clamped * Math.PI) * 0.06).toFixed(3);
      const sheenAngle = (120 + clamped * 60).toFixed(1);
      sheenRef.current.style.opacity = sheenOpacity;
      sheenRef.current.style.background = `linear-gradient(${sheenAngle}deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)`;
    }
  };

  // 4. Calculate scroll progress relative to the About Me section
  useEffect(() => {
    if (reducedMotion) return;

    const computeProgress = () => {
      if (!containerRef.current) return 0;

      const docScroll = window.scrollY || document.documentElement.scrollTop || 0;
      const docMaxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

      const section = containerRef.current.closest('section') || containerRef.current;
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        // Desktop scroll calculation
        const sectionRect = section.getBoundingClientRect();
        const sectionTop = docScroll + sectionRect.top;
        const sectionHeight = section.offsetHeight;

        const scrollRange = Math.max(120, Math.min(docMaxScroll, sectionHeight * 0.7));
        const currentScrolled = docScroll - Math.max(0, sectionTop);
        const raw = currentScrolled / scrollRange;
        return Math.max(0, Math.min(1, raw));
      } else {
        // Mobile scroll calculation
        const cardRect = containerRef.current.getBoundingClientRect();
        const winH = window.innerHeight;
        const start = winH * 0.85;
        const end = winH * 0.15;
        const raw = (start - cardRect.top) / Math.max(1, start - end);
        return Math.max(0, Math.min(1, raw));
      }
    };

    // RAF animation loop with spring-like smooth lerp
    const animationLoop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;

      if (Math.abs(diff) > 0.001) {
        currentProgressRef.current += diff * 0.15;
        applyProgress(currentProgressRef.current);
        rafIdRef.current = requestAnimationFrame(animationLoop);
      } else {
        currentProgressRef.current = targetProgressRef.current;
        applyProgress(targetProgressRef.current);
        rafIdRef.current = null;
      }
    };

    const handleScrollOrResize = () => {
      targetProgressRef.current = computeProgress();

      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(animationLoop);
      }
    };

    // Initial run
    const initialProgress = computeProgress();
    targetProgressRef.current = initialProgress;
    currentProgressRef.current = initialProgress;
    applyProgress(initialProgress);

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [reducedMotion]);

  // Static fallback if prefers-reduced-motion is active
  if (reducedMotion) {
    return (
      <div ref={containerRef} className="relative w-full h-full overflow-hidden select-none">
        <img
          src={IMAGES[0]}
          alt={alt}
          className="w-full h-full object-cover object-top filter contrast-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Pose 1: Initial Pose */}
      <img
        ref={img1Ref}
        src={IMAGES[0]}
        alt={`${alt} - Pose 1`}
        loading="eager"
        decoding="async"
        onError={(e) => { e.currentTarget.src = '/images/avatar.jpg'; }}
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        style={{
          opacity: 1,
          transform: 'translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg) scale(1)',
          transformOrigin: '50% 45%',
          backfaceVisibility: 'hidden',
          willChange: 'opacity, transform, filter',
        }}
      />

      {/* Pose 2: Mid Pose */}
      <img
        ref={img2Ref}
        src={IMAGES[1]}
        alt={`${alt} - Pose 2`}
        loading="eager"
        decoding="async"
        onError={(e) => { e.currentTarget.src = '/images/avatar.jpg'; }}
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        style={{
          opacity: 0,
          transform: 'translate3d(28px, 14px, -55px) rotateY(4.2deg) rotateX(-2.2deg) scale(1.035)',
          transformOrigin: '50% 45%',
          backfaceVisibility: 'hidden',
          willChange: 'opacity, transform, filter',
          visibility: 'hidden',
        }}
      />

      {/* Pose 3: Closing Pose */}
      <img
        ref={img3Ref}
        src={IMAGES[2]}
        alt={`${alt} - Pose 3`}
        loading="eager"
        decoding="async"
        onError={(e) => { e.currentTarget.src = '/images/avatar.jpg'; }}
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        style={{
          opacity: 0,
          transform: 'translate3d(-26px, 12px, -50px) rotateY(-3.8deg) rotateX(2deg) scale(1.035)',
          transformOrigin: '50% 45%',
          backfaceVisibility: 'hidden',
          willChange: 'opacity, transform, filter',
          visibility: 'hidden',
        }}
      />

      {/* Subtle dynamic cinematic lighting sheen strictly inside the card */}
      <div
        ref={sheenRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: 0.04,
          background: 'linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
}
