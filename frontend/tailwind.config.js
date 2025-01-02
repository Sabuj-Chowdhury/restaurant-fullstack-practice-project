/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "intro-bg": "url(./src/assets/home/chef-service.jpg)",
        "featured-bg": "url(./src/assets/home/featured.jpg)",
      },
    },
  },
  plugins: [daisyui],
};
