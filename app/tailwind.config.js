module.exports = {
  purge: [`./src/**/*.{js,ts,jsx,tsx}`],
  mode: `jit`,
  darkMode: false,
  important: true,
  theme: {
    colors: {
      black: `#000000`,
      white: `#EEEEEE`,
    },
    fontFamily: {
      sans: [`Gothic A1`, `sans-serif`],
    },
    extend: {
      spacing: {
        128: `32rem`,
      },
    },
  },
}
