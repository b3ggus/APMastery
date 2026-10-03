/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ink stays dark — it's used as an accent (text/borders/CTA buttons)
        // layered on top of the already-light paper-card quiz surfaces, and
        // must keep working there regardless of the overall page theme.
        ink: {
          DEFAULT: '#2B3639',
          soft: '#384548',
          line: '#4C5C60',
        },
        // panel is the light chrome surface — section cards, the nav bar,
        // leaderboard rows — distinct from ink so the two roles can't
        // collide with each other.
        panel: {
          DEFAULT: '#FFFFFF',
          soft: '#F7F4EC',
          line: '#E6E0D1',
        },
        paper: {
          DEFAULT: '#2A241F',
          dim: '#6B6258',
          card: '#FBF8F0',
        },
        moss: {
          DEFAULT: '#3F7A57',
          dark: '#2E5B40',
          light: '#7FA98C',
        },
        ember: {
          DEFAULT: '#C2652A',
          dark: '#9C5628',
          light: '#E0A06E',
        },
        indigo: {
          DEFAULT: '#4452B0',
          dark: '#37458F',
          light: '#8892D9',
        },
        signal: '#3E8F67',
        danger: '#B8452E',
        gold: '#AD7F0C',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
