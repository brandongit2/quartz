import React from "react"

import type {NextPage} from "next"

import RootLayout from "#components/layouts/RootLayout"
import Link from "#components/Link"
import Navbar from "#components/Navbar/Navbar"
import QuartzLogo from "#public/quartz-logo.svg"

const Index: NextPage = () => {
  return (
    <RootLayout title="Notary: Light-speed notes.">
      <Navbar noLogo noHeight />
      <div className="h-full grid place-items-center section overflow-hidden relative max-w-7xl">
        <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <QuartzLogo className="h-28" />
        </div>

        <div className="absolute left-1/2 bottom-1/4 transform -translate-x-1/2">
          <Link href="/doc">
            <a className="text-xl border-2 border-white p-3">Create a document →</a>
          </Link>
        </div>
      </div>
    </RootLayout>
  )
}

export default Index
