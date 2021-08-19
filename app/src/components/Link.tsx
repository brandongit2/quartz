import {default as NextLink} from "next/link"

import type {LinkProps as NextLinkProps} from "next/link"
import type {FC} from "react"

export type LinkProps = {
  disabled?: boolean
}

const Link: FC<LinkProps & NextLinkProps> = ({children, disabled = false, ...props}) => {
  if (disabled) {
    return <>{children}</>
  } else {
    return (
      <NextLink {...props}>
        <a>{children}</a>
      </NextLink>
    )
  }
}

export default Link
