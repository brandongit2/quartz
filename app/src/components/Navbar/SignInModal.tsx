import {Dispatch, SetStateAction} from "react"

import type { FC} from "react";

import Modal from "#components/Modal"

export type SignInModalProps = {
  visible: boolean
  onClose: () => void
}

const SignInModal: FC<SignInModalProps> = ({visible, onClose}) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <Modal.Header>Sign in</Modal.Header>
      <Modal.Body>this is where the form goes</Modal.Body>
    </Modal>
  )
}

export default SignInModal
