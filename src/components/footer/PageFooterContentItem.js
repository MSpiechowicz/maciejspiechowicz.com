import React from "react"

const PageFooterContentItem = ({ url, alt, icon }) => {
  return (
    <li>
      <a href={url} target="_blank" alt={alt} rel="noreferrer">
        {icon}
      </a>
    </li>
  )
}

export default PageFooterContentItem
