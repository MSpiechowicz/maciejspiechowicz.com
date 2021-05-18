import React from "react"
import { Home, HelpCircle, Mail } from "react-feather"

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
        <div className="header-menu">
          <input type="checkbox" className="header-menu__button--activate"></input>
          <div className="header-menu__hamburger">
            <div></div>
          </div>
          <div className="header-menu__navigation background__color--secondary">
            <div className="header-menu__navigation__item">
              <a href="/" alt="Home" className="text__decoration--none">
                <Home />
                Home
              </a>
            </div>
            <div className="header-menu__navigation__item">
              <a href="/about" alt="About" className="text__decoration--none">
                <HelpCircle />
                About
              </a>
            </div>
            <div className="header-menu__navigation__item">
              <a
                href="/contact"
                alt="Contact"
                className="text__decoration--none"
              >
                <Mail />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
