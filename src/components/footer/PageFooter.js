import React from "react"
import PageFooterContent from "./PageFooterContent"
import PageFooterButton from "./PageFooterButton"

const PageFooter = () => {
  return (
    <footer className="background__color--secondary text--center font__color--main">
      <PageFooterContent />
      <PageFooterButton />
    </footer>
  )
}

export default PageFooter
