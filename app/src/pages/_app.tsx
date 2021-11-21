import {IdProvider} from "@radix-ui/react-id"
import React from "react"

import type {AppProps} from "next/app"

import "../styles.css"

function MyApp({Component, pageProps}: AppProps) {
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  )
}

export default MyApp
