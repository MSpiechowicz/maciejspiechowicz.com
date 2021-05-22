import React from "react"
import {
  CopyrightRounded,
  LinkedIn,
  Twitter,
  GitHub,
  Facebook,
} from "@material-ui/icons"
import PageFooterContentItem from "./PageFooterContentItem"

const PageFooterContent = () => {
  const contactItems = [
    {
      key: "footer_contact_1",
      icon: <LinkedIn />,
      url: "https://pl.linkedin.com/in/mspiechowicz",
      alt: "LinkedIn",
    },
    {
      key: "footer_contact_2",
      icon: <GitHub style={{ width: "1.25rem" }} />,
      url: "http://github.com/mspiechowicz",
      alt: "GitHub",
    },
    {
      key: "footer_contact_3",
      icon: <Twitter />,
      url: "http://twitter.com/m_spiechowicz",
      alt: "Twitter",
    },
    {
      key: "footer_contact_4",
      icon: <Facebook />,
      url: "http://www.facebook.com/maciej.spiechowicz",
      alt: "Facebook",
    },
  ]

  return (
    <div className="page-footer__content">
      <ul>
        {contactItems.map(item => (
          <PageFooterContentItem
            key={item.key}
            url={item.url}
            icon={item.icon}
            alt={item.alt}
          />
        ))}
      </ul>
      <h5>
        {new Date().getFullYear()}&nbsp;
        <CopyrightRounded style={{ width: "1rem" }} />
        &nbsp;Maciej Spiechowicz
      </h5>
    </div>
  )
}

export default PageFooterContent
