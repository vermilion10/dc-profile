/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord: {
          bg: '#313338',
          card: '#111214',
          cardInner: '#2b2d31',
          text: '#dbdee1',
          heading: '#f2f3f5',
          divider: '#1e1f22',
          blurBg: 'rgba(0, 0, 0, 0.4)'
        }
      }
    },
  },
  plugins: [],
}
