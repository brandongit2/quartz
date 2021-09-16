import React from "react"

import type {NextPage} from "next"

import RootLayout from "#components/layouts/RootLayout"
import Link from "#components/Link"
import Navbar from "#components/Navbar/Navbar"
import QuartzIcon from "#public/quartz-icon.svg"
import QuartzLogo from "#public/quartz-logo.svg"
import {getTailwindConfig} from "#utils/getTailwindConfig"

const Index: NextPage = () => {
  return (
    <RootLayout title="Notary: Light-speed notes.">
      <Navbar noLogo noHeight />
      <div className="h-full grid place-items-center section overflow-hidden relative max-w-7xl">
        <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {(() => {
            try {
              window
            } catch {
              return null
            }

            const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
            const iconHeight = parseInt(getTailwindConfig().theme.spacing![28]) * rem
            let numIcons = Math.ceil(window.innerHeight / iconHeight)

            // Get it to an even number so that there is an integer center
            if (numIcons % 2 === 0) numIcons++

            return Array(numIcons)
              .fill(undefined)
              .map((_, i) =>
                i === (numIcons - 1) / 2 ? (
                  <QuartzLogo key={i} className="h-28" />
                ) : (
                  <QuartzIcon key={i} className="h-28" />
                ),
              )
          })()}
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
