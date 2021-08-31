import type {FC} from "react"

import Modal from "#components/Modal"

export type SignUpModalProps = {
  visible: boolean
  onClose: () => void
}

const SignUpModal: FC<SignUpModalProps> = ({visible, onClose}) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <Modal.Header>Sign up</Modal.Header>
      <Modal.Body>this is where the form goes</Modal.Body>
    </Modal>
  )
}

export default SignUpModal
