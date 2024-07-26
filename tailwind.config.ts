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
        primary: "#FFFE33",
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
        "hero-pattern": "url('https://www.pixelstalk.net/wp-content/uploads/images3/Free-Download-Spongebob-Wallpaper-1080p.jpg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "2px rgb(255, 255, 1)",
        },
        ".text-shadow": {
          "text-shadow": "2px 2px 0 rgb(0, 0, 0,1)",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke": "2px rgb(255, 255, 255)",
        },
        ".text-shadow-white": {
          "text-shadow": "2px 2px 0 rgb(255, 255, 255)",
        },
      });
    },
  ],
};
export default config;
