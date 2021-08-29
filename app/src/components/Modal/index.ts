import Body from "./Body"
import Header from "./Header"
import ModalContainer from "./Modal"

const Modal = Object.assign(ModalContainer, {Header, Body})

export default Modal

export type {ModalProps} from "./Modal"
