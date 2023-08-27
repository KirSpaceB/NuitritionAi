import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primaryColorOne':'#FECE46',
        'primaryColorTwo':'#FB9595',
        'buttonPrimary':'#A8BBFF'
      },
    },
  },
  plugins: [],
}
export default config
