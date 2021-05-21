import React from "react"
import PageSectionItem from "./PageSectionItem"

const PageSection = ({ title = "", subTitle = "", content = "" }) => {
  return (
    <section className="page-content__section">
      {<h1>{title}</h1>}
      {<h3>{subTitle}</h3>}
      <PageSectionItem content={content} />
    </section>
  )
}

export default PageSection
