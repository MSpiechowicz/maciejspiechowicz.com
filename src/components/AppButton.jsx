import React from 'react'

function AppButton({ text, href, label, secondary }) {
  return (
    <a
      aria-label={label}
      className={`p-2 md:p-3 rounded-2xl text-sm md:text-lg
        ${secondary ? "bg-white"
          : "bg-blue"}
        ${secondary ? "text-blue"
          : "text-white"}
        ${secondary ? "hover:bg-blue hover:text-white"
          : "hover:bg-white hover:text-blue"}
        border-2
        border-blue
        transition
        duration-300
        ease-in-out
      `}
      href={href}
      rel="noreferrer"
      target="_blank">
      {text}
    </a>
  )
}

export default AppButton
