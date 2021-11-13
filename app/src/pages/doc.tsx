import React from "react"

import type {NextPage} from "next"

import Editor from "#components/Editor"
import MainLayout from "#components/layouts/MainLayout"

const Doc: NextPage = () => {
  return (
    <MainLayout title="Document">
      <div className="max-w-4xl w-full mx-auto rounded-lg bg-grey p-6">
        <Editor />
      </div>
    </MainLayout>
  )
}

export default Doc
