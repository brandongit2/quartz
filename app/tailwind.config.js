const {crimsonDark, mauveDark} = require(`@radix-ui/colors`)

module.exports = {
  purge: [`./src/**/*.{js,ts,jsx,tsx}`],
  mode: `jit`,
  darkMode: false,
  important: true,
  theme: {
    colors: {
      ...crimsonDark,
      ...mauveDark,
    },
    fontFamily: {
      sans: [`Gothic A1`, `sans-serif`],
    },
  },
}
