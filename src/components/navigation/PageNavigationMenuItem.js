import React from "react"
import { VISIBLE, HIDDEN } from "../../redux/ReduxActionType"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-scroll"

const PageNavigationItem = ({ href, icon, title }) => {
  const dispatch = useDispatch()
  const visible = useSelector(state => state.isVisible)

  const changeVisibility = () => {
    !visible ? dispatch({ type: VISIBLE }) : dispatch({ type: HIDDEN })
  }

  return (
    <div className="page-navigation__menu__item">
      <Link
        className="text__decoration--none"
        to={href}
        smooth={true}
        offset={-100}
        duration={1000}
        onClick={changeVisibility}
      >
        {icon}
        {title}
      </Link>
    </div>
  )
}

export default PageNavigationItem
