import React, {Dispatch, SetStateAction} from "react"
import ReactDOM from "react-dom"
import {AnimatePresence, motion} from "framer-motion"

import type {FC} from "react"

import CloseIcon from "#public/icons/close.svg"
import {getTailwindConfig} from "#utils/getTailwindConfig"

export type ModalProps = {
  visible: boolean
  onClose?: () => void
}

const Modal: FC<ModalProps> = ({children, visible, onClose}) => {
  const {theme} = getTailwindConfig()

  try {
    document
  } catch {
    return null
  }

  return ReactDOM.createPortal(
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="relative z-20"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.15}}
        >
          <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-40" onClick={onClose} />
          <div
            className="card px-6 py-4 fixed center grid gap-x-6 gap-y-4 bg-sepia rounded min-w-max"
            style={{
              gridTemplate: `
                "header close" auto
                "body body " 1fr / 1fr auto
              `,
            }}
          >
            <button className="plain">
              <CloseIcon
                className="w-5 h-5 my-1"
                style={{gridArea: `close`}}
                fill={theme.colors.black}
                onClick={onClose}
              />
            </button>
            {children}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.getElementById(`modals`)!,
  )
}

export default Modal
