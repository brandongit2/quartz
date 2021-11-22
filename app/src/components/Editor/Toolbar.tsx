import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import clsx from "clsx"
import React, {useCallback, useState} from "react"
import {Editor, Transforms} from "slate"
import tw, {css} from "twin.macro"

import type {Side} from "@radix-ui/popper"
import type {FC} from "react"
import type {CustomTypes} from "slate"

import getParentBlockElement from "#components/Editor/getParentBlockElement"
import TriangleIcon from "#public/icons/triangle.svg"

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
    <div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-mauve12 text-mauve3 rounded-md p-4 flex gap-4"
      style={{filter: `drop-shadow(0px 0px 20px #FFF5)`}}
    >
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="px-2 py-1 border border-mauve3 flex gap-2 items-center" ref={triggerRef}>
          Block style
          <TriangleIcon
            className={clsx(`h-3 transition-transform`)}
            style={{transform: dropdownTriggerDirection === `up` && `scaleY(-1)`}}
          />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          align="start"
          sideOffset={-1}
          forceMount
          className="overflow-hidden"
          css={css`
            &[data-state="open"] > div {
              ${tw`translate-y-0`}
            }

            &[data-state="closed"] > div {
              ${tw`translate-y-full`}
            }
          `}
          ref={contentRef}
        >
          <div className="p-4 bg-mauve12 text-mauve3 border border-mauve3 flex flex-col gap-2 transition-transform">
            <DropdownMenu.Item>Header 1</DropdownMenu.Item>
            <DropdownMenu.Item>Header 2</DropdownMenu.Item>
            <DropdownMenu.Item>Header 3</DropdownMenu.Item>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <button onMouseDown={(e) => e.preventDefault()} onClick={addMathBlock}>
        add a math block
      </button>
    </div>
  )
}

export default Toolbar
