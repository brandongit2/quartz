module.exports = {
  purge: [`./src/**/*.{js,ts,jsx,tsx}`],
  mode: `jit`,
  darkMode: false,
  important: true,
  theme: {
    colors: {
      black: `#333333`,
      white: `#EEEEEE`,
    },
    fontFamily: {
      sans: [`Gothic A1`, `sans-serif`],
    },
    extend: {
      height: {
        screen: `var(--full-height)`,
        max: `max-content`,
      },
      spacing: {
        128: `32rem`,
      },
      width: {
        screen: `var(--full-width)`,
      },
    },
  },
}
