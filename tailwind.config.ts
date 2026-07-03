import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: "hsl(215 29% 18% / <alpha-value>)", // #1E293B
        input: "hsl(215 29% 18% / <alpha-value>)", // #1E293B
        ring: "200 92% 60%", // #38BDF8 (Accent Color)
        background: "225 89% 5%", // #020617 (Secondary Background)
        foreground: "210 17% 91%", // #E5E7EB (Primary Text)
        primary: {
          DEFAULT: "200 92% 60%", // #38BDF8 (Cyan Blue Accent)
          foreground: "225 89% 5%", // #020617
        },
        secondary: {
          DEFAULT: "214 20% 65%", // #94A3B8 (Muted Gray)
          foreground: "225 89% 5%", // #020617
        },
        destructive: {
          DEFAULT: "0 84% 60%",
          foreground: "210 17% 91%",
        },
        muted: {
          DEFAULT: "214 20% 65%", // #94A3B8 (Muted Gray)
          foreground: "210 17% 91%", // #E5E7EB
        },
        accent: {
          DEFAULT: "200 92% 60%", // #38BDF8 (Cyan Blue Accent)
          foreground: "225 89% 5%", // #020617
        },
        popover: {
          DEFAULT: "222 30% 11%", // #0F172A (Primary Background)
          foreground: "210 17% 91%", // #E5E7EB
        },
        card: {
          DEFAULT: "222 30% 11%", // #0F172A (Primary Background)
          foreground: "210 17% 91%", // #E5E7EB
        },
        sidebar: {
          DEFAULT: "222 30% 11%", // #0F172A
          foreground: "210 17% 91%", // #E5E7EB
          primary: "200 92% 60%", // #38BDF8
          "primary-foreground": "225 89% 5%", // #020617
          accent: "200 92% 60%", // #38BDF8
          "accent-foreground": "225 89% 5%", // #020617
          border: "215 29% 18%", // #1E293B
          ring: "200 92% 60%", // #38BDF8
        },
      },
      borderRadius: {
        lg: "0.5rem", // 8px
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
