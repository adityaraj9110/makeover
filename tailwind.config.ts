import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        venus: {
          deep:  "#1C0F2E",
          gold:  "#C9A84C",
          blush: "#F2DFD0",
          rose:  "#C97D7D",
          white: "#FDF8F4",
          ink:   "#2A1A1A",
        },
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        dm:        ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "hero":    ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section": ["40px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "card":    ["24px", { lineHeight: "1.3" }],
        "body":    ["16px", { lineHeight: "1.6" }],
        "caption": ["13px", { lineHeight: "1.5" }],
        "btn":     ["15px", { lineHeight: "1", letterSpacing: "0.02em" }],
      },
      animation: {
        marquee:    "marquee 25s linear infinite",
        "fade-in":  "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,168,76,0)" },
          "50%":      { boxShadow: "0 0 20px 4px rgba(201,168,76,0.3)" },
        },
      },
      backgroundImage: {
        "venus-gradient": "linear-gradient(135deg, #1C0F2E 0%, #2D1447 100%)",
        "gold-gradient":  "linear-gradient(90deg, #C9A84C 0%, #E8C97A 100%)",
        "blush-gradient": "linear-gradient(180deg, #FDF8F4 0%, #F2DFD0 100%)",
      },
      boxShadow: {
        "card-hover": "0 8px 32px rgba(201,168,76,0.2)",
        "card":       "0 2px 16px rgba(28,15,46,0.08)",
        "nav":        "0 2px 20px rgba(28,15,46,0.12)",
        "gold-glow":  "0 0 20px rgba(201,168,76,0.4)",
      },
      borderRadius: {
        card: "4px",
      },
      maxWidth: {
        content: "1200px",
      },
      backdropBlur: {
        nav: "12px",
      },
      zIndex: {
        nav:      "100",
        whatsapp: "200",
        popup:    "300",
        drawer:   "400",
      },
    },
  },
  plugins: [],
};

export default config;
