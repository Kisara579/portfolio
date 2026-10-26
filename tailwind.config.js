/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          green: '#00ff41',
          darkgreen: '#0a3a0a',
          bg: '#0a0a0f',
          surface: '#111118',
          border: '#1a3a1a',
          amber: '#ffb000',
          red: '#ff0040',
          text: '#c0c0c0',
          bright: '#e0e0e0',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
        'scanline': 'scanline 6s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'typing': 'typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'border-flow': 'borderFlow 3s linear infinite',
      },
      keyframes: {
        pulseGreen: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,255,65,0.3), 0 0 10px rgba(0,255,65,0.1)' },
          '50%': { boxShadow: '0 0 10px rgba(0,255,65,0.6), 0 0 20px rgba(0,255,65,0.3), 0 0 30px rgba(0,255,65,0.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
