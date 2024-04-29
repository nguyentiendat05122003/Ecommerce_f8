/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
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
        archivo: ["var(--font-archivo)"],
        archivoSemiExpanded: ["var(--font-archivoSemiExpanded)"],
      },
      borderWidth: {
        min: ["var(--min)"],
      },
      height: {
        searchHeight: ["var(--search-height)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--header))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        inputBorder: "hsl(var(--accent))",
        red: "hsl(var(--red))",
        green: "hsl(var(--green))",
        widget: "hsl(var(--widget))",
        backDrop: "var(--backDrop)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      dropShadow: {
        main: "var(--shadow)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
