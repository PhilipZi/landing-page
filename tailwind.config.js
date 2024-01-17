/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          ".btn-twitter": {
            color: "#fff",
          },
          ".dark-text": {
            color: "oklch(0.235742, 0.066235, 313.19)",
          },
          ".btn-twitter:hover": {
            "background-color": "#00FF00",
            "border-color": "#1C96E1",
          },
        },
      },
      "dark",
      "cmyk",
    ],
  },
};
