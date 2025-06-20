/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 👈 Ativando dark mode via classe
  theme: {
    extend: {
      colors: {
        primary: "#0a1f32",
        accent: "#d2920c",
        light: {
          background: "#0a1f32",
          surface: "#f8f9fa",
          textPrimary: "#ffffff",
          textSecondary: "#4a4a4a",
        },
        dark: {
          background: "#0a1f32",
          surface: "#142c45",
          textPrimary: "#ffffff",
          textSecondary: "#cbd5e1",
        },
      },
    },
  },
  plugins: [],
}
