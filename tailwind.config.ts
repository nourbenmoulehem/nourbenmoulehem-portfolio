module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths to your project structure
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        gradientStart: 'var(--gradient-start)',
        gradientEnd: 'var(--gradient-end)',
      },
    },
  },
  plugins: [],
};                                                    