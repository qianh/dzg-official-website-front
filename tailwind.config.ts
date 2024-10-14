import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1424px", // 1360 + 64（4rem * 16px）
      },
    },
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      boxShadow: {
        'card': '0px 8px 24px hsl(210, 8%, 62%, 0.2);',
      },
      backgroundImage: {
        'gradient-development-history-l': 'linear-gradient(135deg, rgba(227, 206, 43, 0.2) 0%, rgba(255, 224, 138, 0.2) 16.67%, rgba(239, 121, 70, 0.2) 100%)',
        'gradient-development-history': 'linear-gradient(135deg, rgba(227, 206, 43, 1) 0%, rgba(255, 224, 138, 1) 16.67%, rgba(239, 121, 70, 1) 100%)',
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
