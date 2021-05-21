import React from "react"
import { VISIBLE, HIDDEN } from "../../redux/ReduxActionType"
import { useSelector, useDispatch } from "react-redux"
import { MenuRounded, MenuOpenRounded } from "@material-ui/icons"

const PageHeaderButton = () => {
  const dispatch = useDispatch()
  const visible = useSelector(state => state.isVisible)

  const changeVisibility = () => {
    !visible ? dispatch({ type: VISIBLE }) : dispatch({ type: HIDDEN })
  }

  return (
    <div className="page-header__button" onClick={changeVisibility}>
      {visible ? <MenuOpenRounded /> : <MenuRounded />}
    </div>
  )
}

export default PageHeaderButton
