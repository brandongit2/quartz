import React, {useCallback, useRef, useState} from "react"
import {createEditor} from "slate"
import {withHistory} from "slate-history"
import {Editable, Slate, withReact} from "slate-react"

import type {FC} from "react"
import type {Descendant, CustomTypes} from "slate"

import Element from "./Element"
import Leaf from "./Leaf"
import type {CustomElement} from "src/types"

const Editor: FC = () => {
  const editorRef = useRef<CustomTypes[`Editor`] | null>(null)
  if (!editorRef.current) editorRef.current = withReact(withHistory(createEditor()))
  const editor = editorRef.current

  const renderElement = useCallback((props) => <Element {...props} />, [])
  const renderLeaf = useCallback((props) => <Leaf {...props} />, [])

  const initialValue: CustomElement[] = [
    {
      type: `paragraph`,
      children: [{text: ``}],
    },
  ]
  const [value, setValue] = useState<Descendant[]>(initialValue)

  return (
    <Slate value={value} onChange={setValue} editor={editor}>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} className="flex flex-col gap-2" />
    </Slate>
  )
}

export default Editor
