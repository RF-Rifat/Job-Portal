/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F9FAFB",
          dark: "#121212",
        },
        foreground: {
          light: "#212121",
          dark: "#E5E7EB",
        },
        primary: {
          DEFAULT: "#0077CC",
          foreground: "#FFFFFF",
          dark: "#3B82F6",
        },
        secondary: {
          DEFAULT: "#34A853",
          foreground: "#FFFFFF",
          dark: "#4ADE80",
        },
        accent: {
          DEFAULT: "#E3F2FD",
          dark: "#93C5FD",
        },
        border: {
          light: "#E5E7EB",
          dark: "#374151",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#1E1E1E",
        },
        textPrimary: {
          light: "#212121",
          dark: "#E5E7EB",
        },
        textSecondary: {
          light: "#4B5563",
          dark: "#9CA3AF",
        },
        muted: {
          DEFAULT: "#6B7280",
          foreground: "#E5E7EB",
        },
        input: {
          light: "#FFFFFF",
          dark: "#1E1E1E",
        },
        ring: {
          light: "#0077CC",
          dark: "#3B82F6",
        },
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: ["2.25rem", { lineHeight: "1.4", fontWeight: "700" }], // 36px
        h2: ["1.875rem", { lineHeight: "1.4", fontWeight: "700" }], // 30px
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }], // 24px
        bodyLarge: ["1rem", { lineHeight: "1.6", fontWeight: "400" }], // 16px
        bodySmall: ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }], // 14px
        caption: ["0.75rem", { lineHeight: "1.6", fontWeight: "400" }], // 12px
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      boxShadow: {
        light: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Light theme
        dark: "0px 4px 12px rgba(0, 0, 0, 0.5)", // Dark theme
      },
      spacing: {
        sm: "8px 16px",
        md: "12px 20px",
        lg: "16px 24px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

