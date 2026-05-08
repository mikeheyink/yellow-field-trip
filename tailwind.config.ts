import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FFD400',
          ink: '#1A1A1A',
        },
        ink: '#1A1A1A',
        paper: '#FAFAF7',
        muted: '#6B6B6B',
        rule: '#E5E5E0',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      fontSize: {
        body: ['1.0625rem', { lineHeight: '1.6' }],
      },
      maxWidth: {
        prose: '36rem',
      },
    },
  },
  plugins: [],
};

export default config;
