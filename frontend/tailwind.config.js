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
      width: {
        widthLogoNotFound: "calc(100% - 30px)",
        // widthLogoNotFound: "1192px",
      },
      height: {
        searchHeight: ["var(--search-height)"],
        heightLogoNotFound: "calc(100% - 30px)",
        // heightLogoNotFound: "1021px",
      },
      backgroundColor: {
        primary: "hsl(var(--accent))",
        subBgNotFound:
          "linear-gradient(163.23deg, rgba(255, 255, 255, 0.0001) 38.07%, rgba(240, 240, 240, 0.186708) 87.83%);",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--header))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        primary: "hsl(var(--accent))",
        foreground: "hsl(var(--foreground))",
        accent: "hsl(var(--accent))",
        red: "hsl(var(--red))",
        green: "hsl(var(--green))",
        gray: "hsl(var(--gray))",
        widget: "hsl(var(--widget))",
        backDrop: "var(--backDrop)",
        inputBorder: "hsl(var(--input-border))",
        header: "hsl(var(--header))",
        ["primary-foreground"]: "hsl(var(--primary-foreground))",
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
        hoverShadow: " 0 0 14px 0 rgba(0,66,154,1);",
        shadowNotFound:
          "12px 6px 15px rgba(89, 104, 122, 0.190023), inset 2px 2px 2px #FFFFFF",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
