import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1B2B',
          slate: '#1E293B',
          gold: '#C5A880',
          sand: '#F7F5F0',
          accent: '#0D9488',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
