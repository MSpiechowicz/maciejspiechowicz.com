import React from "react"

const PageNavigationItem = ({ icon, title, href, alt }) => {
  return (
    <div className="page-navigation__menu__item">
      <a href={href} alt={alt} className="text__decoration--none">
        {icon}
        {title}
      </a>
    </div>
  )
}

export default PageNavigationItem
