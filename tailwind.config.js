/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inder: ['Inder', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        sn: ['SN Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
