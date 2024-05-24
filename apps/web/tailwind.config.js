/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
      },
    },
  },
  daisyui: {
    themes: ['emerald', 'dracula'],
  },
  plugins: [daisyui],
};
