import React from "react"

export default function Header() {
  return (
    <header className="background__color--secondary">
      <div className="container text--center">
        <div className="header-name">
          <h1>Maciej Spiechowicz</h1>
        </div>
        <div className="header-title">
          <h3>Project Manager & Software Engineer</h3>
        </div>
        <div className="header-button">
          <input
            type="checkbox"
            className="header-button__input"
          ></input>
          <div className="header-button__hamburger">
            <div></div>
          </div>
        </div>
        
      </div>
    </header>
  )
}
