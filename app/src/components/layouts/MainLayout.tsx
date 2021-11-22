import React from "react"

import type {FC} from "react"

import RootLayout from "#components/layouts/RootLayout"
import Navbar from "#components/Navbar/Navbar"

export type MainLayoutProps = {
  title: string
}

const MainLayout: FC<MainLayoutProps> = ({children, title}) => {
  return (
    <RootLayout title={title}>
      <div className="grid h-full" style={{gridTemplateRows: `auto 1fr`}}>
        <Navbar className="sticky top-0 left-0" />
        <main className="mx-6 my-4">{children}</main>
      </div>
    </RootLayout>
  )
}

export default MainLayout
