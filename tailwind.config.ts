import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Barlow", "sans-serif"],
        heading: ["Instrument Serif", "serif"],
      },
      colors: {
        ink: "#000000",
        mist: "#FFFFFF",
        graphite: "rgba(255,255,255,0.64)",
        frost: "rgba(255,255,255,0.9)",
      },
      boxShadow: {
        "glass-inner":
          "inset 0 1px 1px rgba(255,255,255,0.14), 0 18px 80px rgba(0,0,0,0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;
