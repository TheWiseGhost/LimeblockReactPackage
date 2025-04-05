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
        lime: "#90F08C",
      },
      fontFamily: { inter: ["Inter", "sans-serif"] },
    },
  },
  presets: [require("@limeblock/react/tailwind-preset")],
  plugins: [require("tailwindcss-animate")],
};
