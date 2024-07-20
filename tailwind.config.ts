import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      textShadow: {
        default: "2px 2px 0 #000",
      },
      textShadowBlack: {
        default: "2px 2px 0 #1E293B",
      },
      colors: {
        // primary: "#050816",
        primary: "#FCEE4D",
        secondary: "#1E293B",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg.webp')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "2px white",
        },
        ".text-shadow": {
          "text-shadow": "4px 4px 0 #fff",
        },
        ".text-stroke-black": {
          "-webkit-text-stroke": "2px white",
        },
        ".text-shadow-black": {
          "text-shadow": "2px 2px 0 #fff",
        },
      });
    },
  ],
};
export default config;
