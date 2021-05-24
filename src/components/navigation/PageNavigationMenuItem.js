import React from "react"
import { VISIBLE, HIDDEN } from "../../redux/ReduxActionType"
import { useSelector, useDispatch } from "react-redux"

const PageNavigationItem = ({ icon, title, href, alt }) => {
  const dispatch = useDispatch()
  const visible = useSelector(state => state.isVisible)

  const changeVisibility = () => {
    !visible ? dispatch({ type: VISIBLE }) : dispatch({ type: HIDDEN })
  }

  return (
    <div className="page-navigation__menu__item">
      <a
        href={href}
        alt={alt}
        className="text__decoration--none"
        onClick={changeVisibility}
      >
        {icon}
        {title}
      </a>
    </div>
  )
}

export default PageNavigationItem
