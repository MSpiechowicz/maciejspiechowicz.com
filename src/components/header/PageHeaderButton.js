import React, { useState } from "react"
import StoreNavigation from "../../store/StoreNavigation"
import { MenuRounded, MenuOpenRounded } from "@material-ui/icons"

const PageHeaderButton = () => {
  const [active, setActive] = useState(false)

  const changeVisibility = () => {
    setActive(prevState => !prevState)
  }

  return (
    <div className="page-header__button" onClick={changeVisibility}>
      {active ? <MenuOpenRounded /> : <MenuRounded />}
    </div>
  )
}

export default PageHeaderButton
