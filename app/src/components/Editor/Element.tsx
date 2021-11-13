import React from "react"

import type {FC} from "react"
import type {RenderElementProps} from "slate-react"

const Element: FC<RenderElementProps> = ({attributes, children, element}) => {
  switch (element.type) {
    default:
      return <p {...attributes}>{children}</p>
  }
}

export default Element
