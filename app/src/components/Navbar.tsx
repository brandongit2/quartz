import clsx from "clsx"

import type {FC} from "react"

import NotaryLogo from "#public/notary-logo.svg"

export type NavbarProps = {
  noLogo?: boolean
  className?: string
}

const Navbar: FC<NavbarProps> = ({className, noLogo = false}) => {
  return <div className={clsx(`w-full`, className)}>{!noLogo && <NotaryLogo className="h-14" />}</div>
}

export default Navbar
