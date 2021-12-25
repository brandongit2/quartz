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
      <div className="h-full flex flex-col justify-center items-start px-16">
        <QuartzLogo className="h-16" />

        <div className="mt-12 flex flex-col gap-4 items-start">
          <p className="text-2xl font-bold">LaTeX-grade documents without the LaTeX-grade complexity.</p>
          <Link href="/doc">
            <a className="text-xl font-semibold">Create a document →</a>
          </Link>
        </div>
      </div>
    </RootLayout>
  )
}

export default Index
