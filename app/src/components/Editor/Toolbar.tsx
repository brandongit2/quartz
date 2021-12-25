import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import React, {useCallback, useState} from "react"
import {Editor, Transforms} from "slate"

import type {Side} from "@radix-ui/popper"
import type {FC} from "react"
import type {CustomTypes} from "slate"

import {Heading1, Heading2, Heading3} from "#components/Editor/Element"
import getParentBlockElement from "#components/Editor/getParentBlockElement"
import TriangleIcon from "#public/icons/triangle.svg"

const DropdownItem: FC = ({children}) => (
  <DropdownMenu.Item className="hover:bg-mauve-light-5 transition-colors px-2 py-1 cursor-pointer text-sm">
    {children}
  </DropdownMenu.Item>
)

type ToolbarProps = {
  editor: CustomTypes[`Editor`]
}

const Toolbar: FC<ToolbarProps> = ({editor}) => {
  const addMathBlock = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault()

    const parentBlockElement = editor.selection && getParentBlockElement(editor, editor.selection)
    parentBlockElement && Transforms.select(editor, Editor.end(editor, parentBlockElement[1]))
    Editor.insertNode(editor, {
      type: `math`,
      children: [{text: `this is a math block`}],
    })
  }

  // Hook onto Radix's `data-side` attribute; don't actually control it.
  const [dropdownSide, setDropdownSide] = useState<Side>(`top`)
  const contentRef = useCallback((node: HTMLDivElement | null) => {
    const dataSide = node?.getAttribute(`data-side`)
    dataSide && setDropdownSide(dataSide as Side)
  }, [])

  // Hook onto Radix's `data-state` attribute; don't actually control it.
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const triggerRef = useCallback((node: HTMLButtonElement | null) => {
    const dataState = node?.getAttribute(`data-state`)
    dataState && setDropdownIsOpen(dataState === `open`)
  }, [])

  let dropdownTriggerDirection: `up` | `down` = `down`
  if (dropdownSide === `top` && dropdownIsOpen) dropdownTriggerDirection = `down`
  if (dropdownSide === `top` && !dropdownIsOpen) dropdownTriggerDirection = `up`
  if (dropdownSide === `bottom` && dropdownIsOpen) dropdownTriggerDirection = `up`
  if (dropdownSide === `bottom` && !dropdownIsOpen) dropdownTriggerDirection = `down`

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-mauve-light-1 text-mauve-light-12 p-2 flex gap-2">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="btn btn-inverted" ref={triggerRef}>
          Block style
          <TriangleIcon
            className="h-2 transition-transform"
            style={{transform: dropdownTriggerDirection === `up` && `scaleY(-1)`}}
          />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          align="start"
          forceMount
          style={{transform: `translateX(-0.5px)`}}
          sideOffset={-1}
          css={css`
            &[data-state="open"] > div > div {
              transform: translateY(0%);
            }

            &[data-state="closed"] > div > div {
              transform: translateY(100%);
            }
          `}
          ref={contentRef}
        >
          <div className="overflow-hidden">
            <div className="p-2 bg-mauve-light-1 text-mauve-light-12 border border-mauve-light-12 flex flex-col gap-1 transition-transform">
              <DropdownItem>
                <Heading1>Header 1</Heading1>
              </DropdownItem>
              <DropdownItem>
                <Heading2>Header 2</Heading2>
              </DropdownItem>
              <DropdownItem>
                <Heading3>Header 3</Heading3>
              </DropdownItem>
            </div>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <button onMouseDown={(e) => e.preventDefault()} onClick={addMathBlock} className="btn btn-inverted">
        Add a math block
      </button>
    </div>
  )
}

export default Toolbar
