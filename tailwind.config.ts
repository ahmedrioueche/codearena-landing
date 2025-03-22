import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F2FAF4",
          foreground: "#1A3C34",
          primary: "#452FAB",
          secondary: "#344699",
          accent: "#9333EA",
          "secondary-disabled": "#B8E3C4",
          border: "#FFFFFF10",
          shadow: "#92E3A920",
          text: {
            primary: "",
            secondary: "",
          },
        },
        dark: {
          background: "#0D1117",
          foreground: "#E6F7EB",
          primary: "#452FAB",
          secondary: "#344699",
          accent: "#9333EA",
          "secondary-disabled": "#3A554A",
          border: "#FFFFFF30",
          shadow: "#6BBF8440",
        },
      },
      fontFamily: {
        dancing: ["Dancing Script", "serif"],
        stix: ["STIX Two Text", "serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translate(-50%, -50%) scale(0.9)" },
          "100%": { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: "class",
};

export default config;
