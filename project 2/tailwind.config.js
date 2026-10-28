/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F8FA',
        ink: '#0F1B2D',
        muted: '#5B6B7F',
        line: '#D9E0E8',
        accent: {
          DEFAULT: '#2F54EB',
          dark: '#2441C2',
        },
        signal: '#F5A524',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
