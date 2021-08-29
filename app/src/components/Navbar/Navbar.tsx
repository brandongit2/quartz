import clsx from "clsx"

import type {FC} from "react"

import NotaryLogo from "#public/notary-logo.svg"
import React, {useState} from "react"
import SignUpModal from "#components/Navbar/SignUpModal"
import SignInModal from "#components/Navbar/SignInModal"

export type NavbarProps = {
  noLogo?: boolean
  noHeight?: boolean
  className?: string
}

const Navbar: FC<NavbarProps> = ({className, noLogo = false, noHeight = false}) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)

  return (
    <div className={clsx(`w-full flex justify-between items-center px-6 py-4`, noHeight && `absolute`, className)}>
      {!noLogo ? <NotaryLogo className="h-14" /> : <div />}
      <div className="flex gap-4">
        <button className="button" onClick={() => setShowSignInModal(true)}>
          Sign in
        </button>
        <button className="button" onClick={() => setShowSignUpModal(true)}>
          Sign up
        </button>
      </div>
      <SignInModal visible={showSignInModal} onClose={() => setShowSignInModal(false)} />
      <SignUpModal visible={showSignUpModal} onClose={() => setShowSignUpModal(false)} />
    </div>
  )
}

export default Navbar
