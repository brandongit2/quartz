import Head from "next/head"
import React from "react"

import type {FC} from "react"

export type RootLayoutProps = {
  title: string
} & React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement>

const RootLayout: FC<RootLayoutProps> = ({children, title, ...props}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="h-screen grid place-items-stretch">
        <div {...props}>{children}</div>
      </div>
      <div id="modals" />
    </>
  )
}

export default RootLayout
