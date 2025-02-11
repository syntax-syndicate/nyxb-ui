import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
   darkMode: ["class"],
   content: [
      "app/**/*.{ts,tsx}",
      "components/**/*.{ts,tsx}",
      "./content/**/*.mdx",
      "./registry/**/*.{ts,tsx}",
   ],
   theme: {
      container: {
         center: true,
         padding: "2rem",
         screens: {
            "2xl": "1600px",
         },
      },
      extend: {
         colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
               DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
               foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
            },
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
            sidebar: {
               DEFAULT: "hsl(var(--sidebar-background))",
               foreground: "hsl(var(--sidebar-foreground))",
               primary: "hsl(var(--sidebar-primary))",
               "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
               accent: "hsl(var(--sidebar-accent))",
               "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
               border: "hsl(var(--sidebar-border))",
               ring: "hsl(var(--sidebar-ring))",
            },
            "color-1": "hsl(var(--color-1))",
            "color-2": "hsl(var(--color-2))",
            "color-3": "hsl(var(--color-3))",
            "color-4": "hsl(var(--color-4))",
            "color-5": "hsl(var(--color-5))",
         },
         borderRadius: {
            xl: `calc(var(--radius) + 4px)`,
            lg: `var(--radius)`,
            md: `calc(var(--radius) - 2px)`,
            sm: "calc(var(--radius) - 4px)",
         },
         fontFamily: {
            sans: ["var(--font-geist-sans)", ...fontFamily.sans],
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "caret-blink": "caret-blink 1.25s ease-out infinite",
            gradient: "gradient 8s linear infinite",
            meteor: "meteor 5s linear infinite",
            grid: "grid 15s linear infinite",
            marquee: "marquee var(--duration) infinite linear",
            "marquee-vertical":
               "marquee-vertical var(--duration) linear infinite",
            flip: "flip calc(var(--spark) * 2) infinite steps(2, end)",
            rotate: "rotate var(--spark) linear infinite both",
            "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
            slide: "slide var(--speed) ease-in-out infinite alternate",
            line: "line 2s linear infinite",
            shimmer: "shimmer 8s infinite",
            "border-beam":
               "border-beam calc(var(--duration)*1s) infinite linear",
            orbit: "orbit calc(var(--duration)*1s) linear infinite",
            backgroundPositionSpin:
               "background-position-spin 3000ms infinite alternate",
            "collapsible-down": "collapsible-down 0.2s ease-out",
            "collapsible-up": "collapsible-up 0.2s ease-out",
            shine: "shine var(--duration) infinite linear",
            pulse: "pulse var(--duration) ease-out infinite",
            rainbow: "rainbow var(--speed, 2s) infinite linear",
            "nyx-toc-fade-out": "nyx-toc-fade-out 0.2s ease-out",
            "line-shadow": "line-shadow 15s linear infinite",
            "aurora-border": "aurora-border 10s ease-in-out infinite",
            "aurora-1": "aurora-1 15s ease-in-out infinite",
            "aurora-2": "aurora-2 15s ease-in-out infinite",
            "aurora-3": "aurora-3 15s ease-in-out infinite",
            "aurora-4": "aurora-4 15s ease-in-out infinite",
            rippling: "rippling var(--duration, 0.6s) ease-out",
            ripple:
               "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
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
            "caret-blink": {
               "0%,70%,100%": { opacity: "1" },
               "20%,50%": { opacity: "0" },
            },
            "background-position-spin": {
               "0%": { backgroundPosition: "top center" },
               "100%": { backgroundPosition: "bottom center" },
            },
            gradient: {
               to: {
                  backgroundPosition: "var(--bg-size) 0",
               },
            },
            meteor: {
               "0%": {
                  transform: "rotate(215deg) translateX(0)",
                  opacity: "1",
               },
               "70%": { opacity: "1" },
               "100%": {
                  transform: "rotate(215deg) translateX(-500px)",
                  opacity: "0",
               },
            },
            grid: {
               "0%": { transform: "translateY(-50%)" },
               "100%": { transform: "translateY(0)" },
            },
            marquee: {
               from: { transform: "translateX(0)" },
               to: { transform: "translateX(calc(-100% - var(--gap)))" },
            },
            "marquee-vertical": {
               from: { transform: "translateY(0)" },
               to: { transform: "translateY(calc(-100% - var(--gap)))" },
            },
            flip: {
               to: { rotate: "360deg" },
            },
            rotate: {
               to: {
                  transform: "rotate(90deg)",
               },
            },
            "spin-around": {
               "0%": {
                  transform: "translateZ(0) rotate(0)",
               },
               "15%, 35%": {
                  transform: "translateZ(0) rotate(90deg)",
               },
               "65%, 85%": {
                  transform: "translateZ(0) rotate(270deg)",
               },
               "100%": {
                  transform: "translateZ(0) rotate(360deg)",
               },
            },
            ripple: {
               "0%, 100%": {
                  transform: "translate(-50%, -50%) scale(1)",
               },
               "50%": {
                  transform: "translate(-50%, -50%) scale(0.9)",
               },
            },
            rippling: {
               "0%": {
                  opacity: "1",
               },
               "100%": {
                  transform: "scale(2)",
                  opacity: "0",
               },
            },
            slide: {
               to: {
                  transform: "translate(calc(100cqw - 100%), 0)",
               },
            },
            line: {
               "0%": { "mask-position-x": "0%" },
               "100%": { "mask-position-x": "100%" },
            },
            "border-beam": {
               "100%": {
                  "offset-distance": "100%",
               },
            },
            shimmer: {
               "0%, 90%, 100%": {
                  "background-position": "calc(-100% - var(--shimmer-width)) 0",
               },
               "30%, 60%": {
                  "background-position": "calc(100% + var(--shimmer-width)) 0",
               },
            },
            orbit: {
               "0%": {
                  transform:
                     "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
               },
               "100%": {
                  transform:
                     "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
               },
            },
            "shine-pulse": {
               "0%": {
                  "background-position": "0% 0%",
               },
               "50%": {
                  "background-position": "100% 100%",
               },
               to: {
                  "background-position": "0% 0%",
               },
            },
            "collapsible-down": {
               from: { height: "0" },
               to: { height: "var(--radix-collapsible-content-height)" },
            },
            "collapsible-up": {
               from: { height: "var(--radix-collapsible-content-height)" },
               to: { height: "0" },
            },
            shine: {
               "0%": {
                  "background-position": "0% 0%",
               },
               "50%": {
                  "background-position": "100% 100%",
               },
               to: {
                  "background-position": "0% 0%",
               },
            },
            pulse: {
               "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
               "50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },
            },
            rainbow: {
               "0%": { "background-position": "0%" },
               "100%": { "background-position": "200%" },
            },
            "nyx-fade-out": {
               "0%": { opacity: "1" },
               "100%": { opacity: "0" },
            },
            "line-shadow": {
               "0%": { "background-position": "0 0" },
               "100%": { "background-position": "100% -100%" },
            },
            "aurora-border": {
               "0%, 100%": {
                  borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%",
               },
               "25%": { borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%" },
               "50%": { borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%" },
               "75%": { borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%" },
            },
            "aurora-1": {
               "0%, 100%": { top: "0", right: "0" },
               "50%": { top: "50%", right: "25%" },
               "75%": { top: "25%", right: "50%" },
            },
            "aurora-2": {
               "0%, 100%": { top: "0", left: "0" },
               "60%": { top: "75%", left: "25%" },
               "85%": { top: "50%", left: "50%" },
            },
            "aurora-3": {
               "0%, 100%": { bottom: "0", left: "0" },
               "40%": { bottom: "50%", left: "25%" },
               "65%": { bottom: "25%", left: "50%" },
            },
            "aurora-4": {
               "0%, 100%": { bottom: "0", right: "0" },
               "50%": { bottom: "25%", right: "40%" },
               "90%": { bottom: "50%", right: "25%" },
            },
         },
         spacing: {
            "nyx-layout-top":
               "calc(var(--nyx-banner-height) + var(--nyx-nav-height))",
         },
         borderColor: {
            "grid-line": "hsl(var(--border) / 0.5)",
         },
         gridTemplateColumns: {
            "grid-16": "repeat(16, minmax(0, 1fr))",
            "grid-12": "repeat(12, minmax(0, 1fr))",
            "grid-8": "repeat(8, minmax(0, 1fr))",
         },
      },
   },
   plugins: [
      require("tailwindcss-animate"),
      require("@tailwindcss/typography"),
   ],
}

export default config
