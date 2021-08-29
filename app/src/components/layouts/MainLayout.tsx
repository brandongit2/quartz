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
      <Navbar className="sticky top-0 left-0" />
      <div className="min-h-screen grid bg-sepia gap-6 px-12 py-6" style={{gridTemplateRows: `max-content 1fr`}}>
        <main>{children}</main>
      </div>
    </RootLayout>
  )
}

export default MainLayout
