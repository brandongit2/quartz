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
      <Modal.Body>this is where the form goes</Modal.Body>
    </Modal>
  )
}

export default SignUpModal
