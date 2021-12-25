import clsx from "clsx"
import React from "react"

import type {FC} from "react"
import type {RenderElementProps} from "slate-react"

export const Heading1: FC<JSX.IntrinsicElements[`h1`]> = ({className, children, ...props}) => (
  <h1 {...props} className={clsx(`text-2xl`, className)}>
    {children}
  </h1>
)

export const Heading2: FC<JSX.IntrinsicElements[`h2`]> = ({className, children, ...props}) => (
  <h1 {...props} className={clsx(`text-xl`, className)}>
    {children}
  </h1>
)

export const Heading3: FC<JSX.IntrinsicElements[`h3`]> = ({className, children, ...props}) => (
  <h1 {...props} className={clsx(`text-lg`, className)}>
    {children}
  </h1>
)

const Element: FC<RenderElementProps> = ({attributes, children, element}) => {
  switch (element.type) {
    case `heading1`:
      return <Heading1 {...attributes}>{children}</Heading1>
    case `heading2`:
      return <Heading2 {...attributes}>{children}</Heading2>
    case `heading3`:
      return <Heading3 {...attributes}>{children}</Heading3>
    default:
      return <p {...attributes}>{children}</p>
  }
}

export default Element
