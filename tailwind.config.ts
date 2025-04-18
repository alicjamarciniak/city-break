import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'pink-background': 'hsl(var(--pink-background))',
        'pink-foreground': 'hsl(var(--pink-foreground))',
        'swamp-background': 'hsl(var(--swamp-background))',
        'swamp-foreground': 'hsl(var(--swamp-foreground))',
        'yukon-background': 'hsl(var(--yukon-background))',
        'yukon-foreground': 'hsl(var(--yukon-foreground))',
        'dark-background': 'hsl(var(--dark-background))',
        'dark-foreground': 'hsl(var(--dark-foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        special: {
          DEFAULT: 'hsl(var(--special))',
          foreground: 'hsl(var(--special-foreground))',
        },
        'special-light': 'hsl(var(--special-light))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
      fontFamily: {
        roboto: 'var(--font-roboto)',
        oswald: 'var(--font-oswald)',
        miguel: 'var(--font-miguel-de-northern)',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '50%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 1s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ addComponents }) => {
      addComponents({
        '.t-h1': {
          '@apply text-[2rem] lg:text-[2.5rem]': '',
        },
        '.t-h2': {
          '@apply text-[1.5rem] lg:text-[2rem]': '',
        },
        '.t-h3': {
          '@apply text-[1.25rem] lg:text-[1.75rem]': '',
        },
        '.t-h4': {
          '@apply text-[1rem] lg:text-[1.5rem]': '',
        },
        '.t-h5': {
          '@apply text-[0.75rem] lg:text-[1.25rem]': '',
        },
        '.t-h6': {
          '@apply text-[0.625rem] lg:text-[1.125rem]': '',
        },
        '.t-p': {
          '@apply text-[0.5rem] lg:text-[1rem]': '',
        },
        '.t-small': {
          '@apply text-[0.375rem] lg:text-[0.875rem]': '',
        },
        '.text-2xs': {
          '@apply text-[0.55rem] leading-normal': '',
        },
        '.no-scroll': {
          '@apply h-[100vh] overflow-hidden': '',
        },
      });
    }),
  ],
};
export default config;
