/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          deep: "#070708",
          base: "#0E0E10",
          elevated: "#161619",
          overlay: "#1F1F24",
        },
        line: {
          subtle: "#1E1E22",
          pronounced: "#2F2F36",
          active: "#50505A",
        },
        type: {
          primary: "#EDEDEB",
          secondary: "#9999A0",
          tertiary: "#56565E",
        },
        accent: {
          clay: "#C47A46",
          zinc: "#A3A3A8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};