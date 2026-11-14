import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        am: {
          white: '#FFFFFF',
          offwhite: '#F8FAFC',
          lightgray: '#F1F5F9',
          dark: '#0B0F17',
          black: '#000000',
          slate: '#1E293B',
          road: '#181E29',
          red: {
            DEFAULT: '#DC2626',
            hover: '#B91C1C',
            light: '#FEF2F2',
            border: '#FCA5A5',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
