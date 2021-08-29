import Modal from "#components/Modal"
import {Dispatch, FC, SetStateAction} from "react"

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
