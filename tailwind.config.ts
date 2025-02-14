import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark01: "#121212",
        dark02: "#2A2A2A",
        gray01: "#CBCBCB",
        gray02: "#717171",
      },
    },
  },
  plugins: [],
} satisfies Config;
