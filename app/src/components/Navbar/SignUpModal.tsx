import SignUpForm from "#components/forms/sign-up/SignUpForm"
import Modal from "#components/Modal"

import {Dispatch, FC, SetStateAction} from "react"

export type SignUpModalProps = {
  visible: boolean
  onClose: () => void
}

const SignUpModal: FC<SignUpModalProps> = ({visible, onClose}) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <Modal.Header>Sign up</Modal.Header>
      <Modal.Body><SignUpForm /></Modal.Body>
    </Modal>
  )
}

export default SignUpModal
