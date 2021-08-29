import React from "react"

import type {FC} from "react"

const Header: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({
  style,
  ...props
}) => {
  return <h1 style={{gridArea: `header`, ...style}} {...props} />
}

export default Header
