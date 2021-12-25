import {styled} from "@stitches/react"
import React from "react"

import type {FC} from "react"

const UnstyledButton: FC<JSX.IntrinsicElements[`button`]> = ({children, ...props}) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}

const Button = styled(UnstyledButton, {})

export default Button
