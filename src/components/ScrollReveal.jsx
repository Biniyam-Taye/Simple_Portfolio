import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up', // 'fade-up' | 'scale-up' | 'fade-left' | 'fade-right'
  delay = 0,
  duration = 750,
  threshold = 0.1,
  once = true,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, once]);

  // Bold yet buttery smooth animation states
  const getAnimationClasses = () => {
    switch (animation) {
      case 'scale-up':
        return isVisible
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-[0.94] translate-y-8';
      case 'fade-left':
        return isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-10';
      case 'fade-right':
        return isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-10';
      case 'fade-up':
      default:
        return isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all will-change-[transform,opacity] ${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
