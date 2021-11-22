import clsx from "clsx"
import React, {useState} from "react"

import type {FC} from "react"

import SignInModal from "#components/Navbar/SignInModal"
import SignUpModal from "#components/Navbar/SignUpModal"
import QuartzLogo from "#public/quartz-logo.svg"

export type NavbarProps = {
  noLogo?: boolean
  noHeight?: boolean
  className?: string
}

const Navbar: FC<NavbarProps> = ({className, noLogo = false, noHeight = false}) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)

  return (
    <div className={clsx(`w-full h-16 flex justify-between items-center px-6 py-4`, noHeight && `absolute`, className)}>
      {noLogo ? <div /> : <QuartzLogo className="h-full" />}
      <div className="flex gap-4">
        <button className="btn btn-sm" onClick={() => setShowSignInModal(true)}>
          Sign in
        </button>
        <button className="btn btn-sm" onClick={() => setShowSignUpModal(true)}>
          Sign up
        </button>
      </div>
      <SignInModal visible={showSignInModal} onClose={() => setShowSignInModal(false)} />
      <SignUpModal visible={showSignUpModal} onClose={() => setShowSignUpModal(false)} />
    </div>
  )
}

export default Navbar
