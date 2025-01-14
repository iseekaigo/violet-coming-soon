import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        violet: {
          light: "#E5DEFF",
          DEFAULT: "#8B5CF6",
          dark: "#4A3B76",
        },
        pink: {
          light: "#FFDEE2",
          DEFAULT: "#FF719A",
        },
        peach: "#FDE1D3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        "float": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(100px, -100px) rotate(120deg)" },
          "66%": { transform: "translate(-50px, -200px) rotate(240deg)" },
          "100%": { transform: "translate(0, -300px) rotate(360deg)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "float": "float 15s linear infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;