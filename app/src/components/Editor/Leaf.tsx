import React from "react"

import type {FC} from "react"
import type {RenderLeafProps} from "slate-react"

const Leaf: FC<RenderLeafProps> = ({attributes, children}) => {
  return <span {...attributes}>{children}</span>
}

export default Leaf
