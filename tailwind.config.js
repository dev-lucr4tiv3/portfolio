/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'neon-green': '#50C878',
        'neon-blue': '#4D4DFF',
        'neon-purple': '#9D00FF',
        'terminal-black': '#121212',
        'discord-blurple': '#7289DA',
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'blink': 'blink 1s step-end infinite',
      },
      boxShadow: {
        'neon': '0 0 5px var(--neon-green), 0 0 10px var(--neon-green)',
      },
    },
  },
  plugins: [],
};