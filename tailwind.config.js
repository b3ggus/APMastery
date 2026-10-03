/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#2B3639',
          soft: '#384548',
          line: '#4C5C60',
        },
        paper: {
          DEFAULT: '#F4EFE3',
          dim: '#E8E1D1',
          card: '#FBF8F0',
        },
        moss: {
          DEFAULT: '#4C7A5E',
          dark: '#365A44',
          light: '#7FA98C',
        },
        ember: {
          DEFAULT: '#C7723A',
          dark: '#9C5628',
          light: '#E0A06E',
        },
        indigo: {
          DEFAULT: '#4A5FBF',
          dark: '#37458F',
          light: '#8892D9',
        },
        signal: '#6FA287',
        danger: '#C1553D',
        gold: '#D4A72C',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        graph: "linear-gradient(rgba(244,239,227,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,227,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        graph: '24px 24px',
      },
    },
  },
  plugins: [],
}
