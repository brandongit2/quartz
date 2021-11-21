import React from "react"

import type {FC} from "react"
import type {RenderElementProps} from "slate-react"

const Element: FC<RenderElementProps> = ({attributes, children, element}) => {
  switch (element.type) {
    case `heading1`: {
      return <h1 {...attributes}>{children}</h1>
    }
    default:
      return <p {...attributes}>{children}</p>
  }
}

export default Element
