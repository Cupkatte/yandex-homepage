/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#161617",
        "bg-line": "#232325",
        text: "#ffffff",
      },
    },
  },
  plugins: [],
};
