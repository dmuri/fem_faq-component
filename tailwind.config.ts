import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        md: '921px',
      },
      gridTemplateColumns: {
       '50-50': '50% 50%',
      },
      colors: {
        primary: {
          'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
          'soft-red': 'hsl(14, 88%, 65%)',
          'gradient-violet': 'hsl(273, 75%, 66%)',
          'gradient-blue': 'hsl(240, 73%, 65%)'
        },
        neutral: {
          'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
          'dark-grayish-blue': 'hsl(240, 6%, 50%)',
          'divider': 'hsl(240, 5%, 91%)'
        },
      },
    },
  },
  plugins: [],
}
export default config
