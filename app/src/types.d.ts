import type {BaseEditor} from "slate"
import type {HistoryEditor} from "slate-history"
import type {ReactEditor} from "slate-react"

type CustomElement = {
  type: `heading1` | `heading2` | `heading3` | `paragraph` | `math`
  children: Array<CustomText | CustomElement>
}

type CustomText = {
  mark?: `bold` | `italic` | `underline`
  text: string
}

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}

declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}
