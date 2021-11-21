import {Editor} from "slate"

import type {CustomTypes, Location} from "slate"

export default function getParentBlockElement(editor: CustomTypes[`Editor`], location: Location) {
  const nodes = Editor.levels(editor, {
    at: location,
    match: (node) => Editor.isBlock(editor, node),
  })
  return Array.from(nodes).at(-1)
}
