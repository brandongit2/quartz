import chroma from "chroma-js"

import type {EasingFunctions} from "./easingFunctions"

import {ease} from "./easingFunctions"

/**
 * Generate a CSS `linear-gradient()` with specified easing.
 * @param easingFunction The easing function to use. Please refer to the type definition for more.
 * @param colors         An array of CSS colors to be used in the gradient.
 * @param [positions]    An array of positions (specified as numbers from 0-1), corresponding to each color. `colors` and `positions` must have the same length.
 * @param [angle]        A CSS angle to be used for the gradient.
 */
export function gradientEase(easingFunction: EasingFunctions, colors: string[], positions?: number[], angle?: string) {
  if (positions && colors.length !== positions.length)
    throw new Error(`\`colors.length\` and \`positions.length\` don't match.`)

  if (!positions)
    // Evenly populate the positions array from 0 to 1
    positions = Array(colors.length)
      .fill(null)
      .map((_, i) => i / colors.length)

  let gradientString = `linear-gradient(`
  if (angle) gradientString += `${angle},`

  let curPos = positions[0]
  for (let i = 0; i < colors.length - 1; i++) {
    // Let chroma.js generate a gradient between colors[i] and colors[i + 1]
    const scale = chroma.scale([colors[i], colors[i + 1]])
    const range = positions[i + 1] - positions[i]

    // Easing function stuff. Default is `linear` but it can be specified through the `easingFunction` parameter
    let func
    if (easingFunction === `linear`) {
      func = `linear`
    } else {
      func = `easeInOut${easingFunction.replace(/^ease(In)?(Out)?/, ``)}`
      if (!/In/.test(easingFunction) && i === 0) func = func.replace(`In`, ``)
      if (!/Out/.test(easingFunction) && i === colors.length - 2) func = func.replace(`Out`, ``)
    }

    // Sample the gradient 10 times between `curPos` and `curPos + range`, and add it to the final string
    for (let j = 0; j <= 10; j++) {
      const color = scale(ease(func as EasingFunctions, j / 10)).hex()
      const pos = (curPos + (j / 10) * range) * 100
      gradientString += `${color} ${pos}%,`
    }

    curPos += range
  }

  // Remove trailing comma and add closing parenthesis
  gradientString = gradientString.slice(0, -1)
  gradientString += `)`

  return gradientString
}
