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
        primary: "#7b83fe",
        secondary: "#dc22ff",
        neutral: "#222",
        "neutral-content": "#6e6e6e",
        "base-100": "#ffffff",
      },
    },
  },
  plugins: [],
};
