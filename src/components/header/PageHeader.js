import React from "react"
import PageHeaderContent from "./PageHeaderContent"
import PageHeaderButton from "./PageHeaderButton"

const PageHeader = () => {
  return (
    <header className="background__color--secondary">
      <PageHeaderContent />
      <PageHeaderButton />
    </header>
  )
}

export default PageHeader