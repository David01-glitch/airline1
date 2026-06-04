import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070a18',
          900: '#0b1024',
          800: '#0f1530',
          700: '#1a2147',
        },
        brand: {
          50: '#eef0ff',
          100: '#dde1ff',
          400: '#7b86ff',
          500: '#5b67f5',
          600: '#4f57e6',
          700: '#3f46c4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(15, 23, 60, 0.25)',
        glow: '0 0 0 6px rgba(91, 103, 245, 0.15)',
      },
      backgroundImage: {
        'hero-grad': 'linear-gradient(135deg, #0b1024 0%, #1a2147 60%, #3f46c4 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
