import React from "react"
import { ArrowUpward } from "@material-ui/icons"
import { animateScroll as scroll } from "react-scroll"

const PageFooterButton = () => {
  return (
    <button className="page-footer__button" onClick={() => scroll.scrollToTop()}>
      <ArrowUpward />
    </button>
  )
}

export default PageFooterButton
