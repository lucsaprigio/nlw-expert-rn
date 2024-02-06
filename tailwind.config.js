/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "Roboto_500Medium",
        subtitle: "Roboto_500Medium",
        body: "Roboto_400Regular",
        bold: "Roboto_700Bold"
      }
    },
  },
  plugins: [],
}

