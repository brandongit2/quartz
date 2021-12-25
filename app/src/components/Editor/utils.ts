import {Editor} from "slate"

import type {CustomTypes} from "slate"

const changeBlockType = (editor: CustomTypes[`Editor`], newType: keyof Omit<CustomTypes[`Element`], `text`>) => {
  const selection = editor.selection
  if (selection === null) return
  const levels = Editor.levels(editor, {at: selection})
  return marks ? marks[format] === true : false
}

export const toggleNode = (editor: CustomTypes[`Editor`], type: keyof Omit<CustomTypes[`Element`], `paragraph`>) => {
  const isActive = isMarkActive(editor, type)

  if (isActive) {
    Editor.removeMark(editor, type)
  } else {
    Editor.addMark(editor, type, true)
  }
}
