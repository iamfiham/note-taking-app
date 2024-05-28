/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        new: '0px 1px 1px rgba(3, 7, 18, 0.025),0px 3px 3px rgba(3, 7, 18, 0.02), 0px 6px 6px rgba(3, 7, 18, 0.015),0px 10px 10px rgba(3, 7, 18, 0.01),0px 16px 16px rgba(3, 7, 18, 0.01)',
      },
    },
  },
  plugins: [],
};
