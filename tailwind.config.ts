/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0fafa',
          100: '#ccefef',
          200: '#99dede',
          300: '#66cdcd',
          400: '#33bbbb',
          500: '#0d9488',
          600: '#0a7a70',
          700: '#075f58',
          800: '#04453f',
          900: '#022b27',
          950: '#011916',
        },
        slate: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        serif: ['Crimson Pro', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: (theme: (arg: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.800'),
            maxWidth: '70ch',
            fontFamily: theme('fontFamily.sans'),
            h1: { fontFamily: theme('fontFamily.serif'), color: theme('colors.slate.900') },
            h2: { fontFamily: theme('fontFamily.serif'), color: theme('colors.slate.900') },
            h3: { fontFamily: theme('fontFamily.serif'), color: theme('colors.slate.900') },
            a: {
              color: theme('colors.teal.700'),
              textDecoration: 'underline',
              '&:hover': { color: theme('colors.teal.900') },
            },
            blockquote: {
              borderLeftColor: theme('colors.teal.500'),
              color: theme('colors.slate.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
