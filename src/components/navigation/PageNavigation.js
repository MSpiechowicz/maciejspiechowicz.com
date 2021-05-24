import React from "react"
import PageNavigationMenu from "./PageNavigationMenu"
import { useSelector } from "react-redux"

const PageNavigation = () => {
  const visible = useSelector(state => state.isVisible)

  return (
    <nav
      className={
        visible
          ? `page-navigation background__color--secondary font__color--main visible`
          : `page-navigation background__color--secondary font__color--main`
      }
    >
      <PageNavigationMenu />
    </nav>
  )
}

export default PageNavigation
