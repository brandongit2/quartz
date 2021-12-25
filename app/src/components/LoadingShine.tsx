import {keyframes, styled} from "@stitches/react"

import type React from "react"

import {gradientEase} from "#utils/gradientEase"

const shine = keyframes({
  from: {"background-position": `400% top`},
  to: {
    "background-position": `0% top`,
  },
})

export type LoadingShineProps = {
  className?: string
  style?: React.CSSProperties
}

export const LoadingShine = styled(`div`, {
  animation: `${shine} 8s linear infinite`,
  backgroundImage: gradientEase(`easeInOutSine`, [`#ccc`, `#eee`, `#ccc`], [0.3, 0.5, 0.7], `70deg`),
  backgroundSize: `800% 100%`,
})
