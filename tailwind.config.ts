import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0b1220',
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
        },
        // Primary = warm orange (travel-agency classic)
        brand: {
          50: '#fff5ec',
          100: '#ffe6d1',
          200: '#ffc89a',
          300: '#ffa56a',
          400: '#ff8537',
          500: '#f76d1f',
          600: '#e85a13',
          700: '#c0480f',
          800: '#923810',
        },
        // Secondary accent (used for "Call Now" red emphasis)
        hot: {
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(15, 23, 60, 0.18)',
        glow: '0 0 0 6px rgba(247, 109, 31, 0.18)',
      },
      backgroundImage: {
        'hero-grad': 'linear-gradient(135deg, #0b1220 0%, #1f2937 60%, #f76d1f 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
