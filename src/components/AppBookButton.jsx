import React from 'react'

function AppBookButton({ text, href, secondary }) {
  return (
    <a
      className={`app__book__button
        ${secondary ? "bg-white"
          : "bg-blue"}
        ${secondary ? "text-blue"
          : "text-white"}
        ${secondary ? "hover:bg-blue hover:text-white"
          : "hover:bg-white hover:text-blue"}
      `}
      href={href}
      rel="noreferrer"
      target="_blank">
      {text}
    </a>
  )
}

export default AppBookButton
