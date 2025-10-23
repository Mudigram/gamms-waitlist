import { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#C5FF1E",
        dark: "#0A0A0A",
        card: "rgba(17,17,17,0.6)",
      },
      keyframes: {
        "pulse-slow": {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.88", transform: "scale(1.03)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up .4s ease both",
        "glow-move": "glow-move 3.5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
