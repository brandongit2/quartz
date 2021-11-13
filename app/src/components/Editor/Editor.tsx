import React, {useCallback, useRef, useState} from "react"
import {createEditor, Editor as SlateEditor, Range} from "slate"
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

  const addMathBlock = () => {
    //  Range.transform() editor.selection
    SlateEditor.insertNode(editor, {
      type: `math`,
      children: [{text: `this is a math block`}],
    })
  }

  return (
    <Slate value={value} onChange={setValue} editor={editor}>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-md">
        <button onClick={addMathBlock}>add a math block</button>
      </div>
    </Slate>
  )
}

export default Editor
