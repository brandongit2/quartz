import Head from "next/head"
import React from "react"

import type {FC} from "react"

export type RootLayoutProps = {
  title: string
}

const RootLayout: FC<RootLayoutProps> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="h-full">{children}</div>
      <div id="modals" />
    </>
  )
}

export default RootLayout
