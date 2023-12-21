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
