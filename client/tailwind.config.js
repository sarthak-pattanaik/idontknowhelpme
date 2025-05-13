/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // New custom colors
        electric: {
          DEFAULT: "#0066FF", // Electric Blue
          50: "#E6F0FF",
          100: "#CCE0FF",
          200: "#99C2FF",
          300: "#66A3FF",
          400: "#3385FF",
          500: "#0066FF",
          600: "#0052CC",
          700: "#003D99",
          800: "#002966",
          900: "#001433",
        },
        neon: {
          DEFAULT: "#39FF14", // Neon Green
          50: "#EAFFEB",
          100: "#D5FFD6",
          200: "#ABFFA8",
          300: "#82FF7B",
          400: "#58FF4D",
          500: "#39FF14",
          600: "#2ECC10",
          700: "#22990C",
          800: "#176608",
          900: "#0B3304",
        },
        purple: {
          DEFAULT: "#6600CC", // Deep Purple
          50: "#F0E6FF",
          100: "#E0CCFF",
          200: "#C299FF",
          300: "#A366FF",
          400: "#8533FF",
          500: "#6600CC",
          600: "#5200A3",
          700: "#3D007A",
          800: "#290052",
          900: "#140029",
        },
        // Keeping existing colors for compatibility
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#0066FF", // Electric Blue
          50: "#E6F0FF",
          100: "#CCE0FF",
          200: "#99C2FF",
          300: "#66A3FF",
          400: "#3385FF",
          500: "#0066FF",
          600: "#0052CC",
          700: "#003D99",
          800: "#002966",
          900: "#001433",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#6600CC", // Deep Purple
          50: "#F0E6FF",
          100: "#E0CCFF",
          200: "#C299FF",
          300: "#A366FF",
          400: "#8533FF",
          500: "#6600CC",
          600: "#5200A3",
          700: "#3D007A",
          800: "#290052",
          900: "#140029",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#39FF14", // Neon Green
          50: "#EAFFEB",
          100: "#D5FFD6",
          200: "#ABFFA8",
          300: "#82FF7B",
          400: "#58FF4D",
          500: "#39FF14",
          600: "#2ECC10",
          700: "#22990C",
          800: "#176608",
          900: "#0B3304",
          foreground: "#1E1E1E",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "#FF3A55", // Alert Red
          foreground: "#FFFFFF",
        },
        border: "#E0E0E0", // Light Gray
        input: "#E0E0E0", // Light Gray
        ring: "#0066FF", // Electric Blue
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
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "1",
            boxShadow: "0 0 0 0 rgba(0, 102, 255, 0)"
          },
          "50%": { 
            opacity: "0.8",
            boxShadow: "0 0 20px 5px rgba(0, 102, 255, 0.4)"
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    // Import plugins using dynamic import in ESM
  ],
}