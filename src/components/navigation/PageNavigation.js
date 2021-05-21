import React from "react"
import PageNavigationMenu from "./PageNavigationMenu"
import { useSelector } from "react-redux"

const PageNavigation = () => {
  const visible = useSelector(state => state.isVisible)

  return (
    <div className="page-navigation">
      <PageNavigationMenu />
    </div>
  )
}

export default PageNavigation
