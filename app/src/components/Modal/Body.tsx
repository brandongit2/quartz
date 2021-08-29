import React from "react"

import type {FC} from "react"

const Body: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({style, ...props}) => {
  return <div style={{gridArea: `body`, ...style}} {...props} />
}

export default Body
