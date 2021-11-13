module.exports = {
  purge: [`./src/**/*.{js,ts,jsx,tsx}`],
  mode: `jit`,
  darkMode: false,
  important: true,
  theme: {
    colors: {
      black: `#000000`,
      grey: `#333333`,
      white: `#EEEEEE`,
      yellow: `#FFE018`,
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
