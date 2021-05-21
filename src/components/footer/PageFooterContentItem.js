import React from "react"

const PageFooterContentItem = ({ url, icon }) => {
  return (
    <li>
      <a href={url}>{icon}</a>
    </li>
  )
}

export default PageFooterContentItem
