import React from "react"

import type {FC} from "react"

import SignUpForm from "#components/forms/sign-up/SignUpForm"
import Modal from "#components/Modal"

export type SignUpModalProps = {
  visible: boolean
  onClose: () => void
}

const SignUpModal: FC<SignUpModalProps> = ({visible, onClose}) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <Modal.Header>Sign up</Modal.Header>
      <Modal.Body>
        <SignUpForm />
      </Modal.Body>
    </Modal>
  )
}

export default SignUpModal
