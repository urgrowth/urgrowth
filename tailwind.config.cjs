/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        "urgrowth-light": {
          "primary": "#0c52ee",
          "secondary": "#3d0fe6",
          "accent": "#3375e3",
          "neutral": "#34363b",
          "base-100": "#EDEADF",
          "info": "#1e69a9",
          "success": "#219d2b",
          "warning": "#fcbd27",
          "error": "#c01d1d",
        },
      },
      {
        "relaxed-blue": {
          "primary": "#1534A5",
          "secondary": "#2e7dee",
          "accent": "#1E44CD",
          "neutral": "#34363b",
          "base-100": "#EDEADF",
          "info": "#1e69a9",
          "success": "#219d2b",
          "warning": "#fcbd27",
          "error": "#c01d1d",
        },
      },
      {
        "living-nature": {
          "primary": "#344E41",
          "secondary": "#558055",
          "accent": "#358065",
          "neutral": "#5C7D57",
          "base-100": "#EDEADF",
          "info": "#266D85",
          "success": "#397D51",
          "warning": "#fcbd27",
          "error": "#702E19",
        },
      },
    ],  },
  plugins: [require("daisyui")],
};
