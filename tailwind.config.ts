import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#0A327B",
      red: "#F65552",
      vdgBlue: "#1C202B",
      dgBlue: "#5E6778",
      gBlue: "#939CAD",
      lgBlue: "#E5EFFA",
      vlgBlue: "#DDE7EE",
      snow: "#F7FAFD",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
