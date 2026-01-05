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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      sm_mobile: { max: "670px" },
      mobile: { max: "767px" },
      tablet: { min: "768px", max: "1024px" },
      desktop: { min: "1024px" },
      tablet_2: { raw: "(min-width: 768px) and (max-width: 1125px)" },
    }
  },
  plugins: [],
} satisfies Config;
