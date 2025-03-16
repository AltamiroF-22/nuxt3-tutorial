import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app.vue", "./pages/**/*.vue", "./components/**/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
