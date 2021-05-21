import React from "react"
import PageNavigationMenu from "./PageNavigationMenu"
import { useSelector } from "react-redux"

const PageNavigation = () => {
  const visible = useSelector(state => state.isVisible)

  return (
    <div
      className={
        visible
          ? `page-navigation background__color--secondary font__color--main visible`
          : `page-navigation background__color--secondary font__color--main`
      }
    >
      <PageNavigationMenu />
    </div>
  )
}

export default PageNavigation
