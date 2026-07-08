import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          red: "#C8102E",
          "red-dark": "#A00D24",
          navy: "#1B4F72",
          "navy-dark": "#154060",
          charcoal: "#1F2937",
          black: "#0A0A0A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
