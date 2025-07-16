import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],},
      colors: {
        background: "#C03333",
        foreground: "C03333",
        primary: '#C03333',
        accent: '#FBBF24',
      },
    },
  },
  plugins: [],
} satisfies Config;
