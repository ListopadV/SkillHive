import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      'max-sm': { max: '375px' },
      'max-md': { max: '768px' },
      'max-lg': { max: '1024px' },
      'max-xl': { max: '1440px' },
    },
    extend: {
      colors: {
        base: {
          light: "var(--color-base-light)",
          dark: "var(--color-base-dark)",
        },
        primary: {
          5: "var(--color-primary-5)",
          10: "var(--color-primary-10)",
          20: "var(--color-primary-20)",
          30: "var(--color-primary-30)",
          50: "var(--color-primary-50)",
          500: "var(--color-primary-500)",
        },
        grey: "var(--color-grey)",
        transparent: {
          500: "var(--color-transparent-500)",
        },
        light: {
          5: "var(--color-light-5)",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'button': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'button-hover': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'button-focus': '0 0 0 3px rgb(59 130 246 / 0.5)',
      },
      spacing: {
      },
      borderRadius: {
      }
    },
  },
  plugins: [],
}

export default config