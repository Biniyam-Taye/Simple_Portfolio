/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F45E0C',
          light:   '#FF8040',
          dark:    '#C44A00',
        },
        background: '#fafafa',
        surface: '#ffffff',
        ink: '#111111',
        'ink-muted': '#52525b',
        'border-base': '#e4e4e7',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans:    ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono:    ['"Space Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 12vw, 9rem)', { lineHeight: '0.88', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(3rem, 9vw,  7rem)', { lineHeight: '0.9',  letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 6vw,  4rem)', { lineHeight: '1',    letterSpacing: '-0.02em' }],
      },
      animation: {
        'float':   'float 6s ease-in-out infinite',
        'marquee': 'marquee 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      boxShadow: {
        'orange-hard': '4px 4px 0px 0px #F45E0C',
        'black-hard':  '4px 4px 0px 0px #111111',
      },
    },
  },
  plugins: [],
}
