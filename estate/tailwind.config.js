/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#070b14", 900: "#0b1220", 800: "#121b2e", 700: "#1c2840" },
        mist: "#f4f6f8",
        gold: { DEFAULT: "#c9a24b", soft: "#e6cf93" },
        jade: { DEFAULT: "#2fbf8f", deep: "#0f7a5a" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      keyframes: { rise: { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "none" } } },
      animation: { rise: "rise .5s ease-out both" },
    },
  },
  plugins: [],
};
