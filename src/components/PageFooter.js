import React from "react"
import { Link } from "gatsby"
// import { Linkedin, Facebook, Twitter, GitHub } from "react-feather"

export default function Footer() {
  return (
    <footer>
      <div className="footer-data">
        <ul className="list-social">
          <li>
            <Link to="http://www.linkedin.com/in/mspiechowicz">
              {/* <Linkedin className="list-social-icon" /> */}
            </Link>
          </li>
          <li>
            <Link to="http://www.facebook.com/maciej.spiechowicz">
              {/* <Facebook className="list-social-icon" /> */}
            </Link>
          </li>
          <li>
            <Link to="http://github.com/mspiechowicz">
              {/* <GitHub className="list-social-icon" /> */}
            </Link>
          </li>
          <li>
            <Link to="http://twitter.com/m_spiechowicz">
              {/* <Twitter className="list-social-icon" /> */}
            </Link>
          </li>
        </ul>
        <p>Copyright {new Date().getFullYear()} Maciej Spiechowicz</p>
      </div>
    </footer>
  )
}
