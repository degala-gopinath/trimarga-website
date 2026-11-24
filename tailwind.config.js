/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0907',
          surface: '#110F0C',
          surface2: '#181511',
          yellow: '#FBAF01',
          white: '#FFFFFF',
        },
        // Trimarga means "three paths" — one hue per route to growth.
        path: {
          found: '#E2651A',
          trusted: '#FBAF01',
          customers: '#FFD166',
        },
      },
      fontFamily: {
        // Clash Display (Indian Type Foundry, free commercial licence)
        display: ['"Clash Display"', 'Georgia', 'serif'],
        serif: ['"Clash Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
