import React from "react"
import PageSectionItem from "./PageSectionItem"

const PageSection = ({ title = "", content = "" }) => {
  return (
    <section className="page-content__section">
      {<h1>{title}</h1>}
      <PageSectionItem content={content} />
    </section>
  )
}

export default PageSection
