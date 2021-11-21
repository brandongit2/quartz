import type {BaseEditor} from "slate"
import type {HistoryEditor} from "slate-history"
import type {ReactEditor} from "slate-react"

type CustomElement = {
  type: `heading1` | `heading2` | `heading3` | `paragraph` | `math`
  children: CustomText[]
}
type CustomText = {text: string}

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}
