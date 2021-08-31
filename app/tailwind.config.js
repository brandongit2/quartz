module.exports = {
  purge: [`./src/**/*.{js,ts,jsx,tsx}`],
  mode: `jit`,
  darkMode: false,
  important: true,
  theme: {
    colors: {
      black: `#363636`,
      white: `#FFFFFF`,
      sepia: `#FDDF91`,
      cream: `#FFF9E9`,
      danger: `#e3342f`,
    },
    fontFamily: {
      header: [`Lora`, `sans-serif`],
      body: [`Alegreya`, `sans-serif`],
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
