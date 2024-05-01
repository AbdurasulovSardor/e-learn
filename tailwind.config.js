module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1020px",
    },
    extend: {
      colors: {
        brightRed: "#EA5972",
        brightRedLight: "#EF8DB3",
        brightRedSupLight: "#FFF2E1",
        titleColor: "#1E2A39",
        descriptionColor: "#464646"
      }
    },
    container: {
      center: true,
      screens: {
        lg: '100%',
        xl: '1240px',
        '2xl': '1495px',
      },
    },
  },
  plugins: [],
}