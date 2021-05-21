import React, { useState, useContext, useEffect } from "react"
import PageNavigationMenu from "./PageNavigationMenu"
import StoreNavigation from "../../store/StoreNavigation"

const PageNavigation = () => {
  return (
    <div className="page-navigation">
      <PageNavigationMenu />
    </div>
  )
}

export default PageNavigation
