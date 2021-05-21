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
      url: "http://www.linkedin.com/in/mspiechowicz",
      alt: "LinkedIn",
    },
    {
      key: "footer_contact_2",
      icon: <GitHub />,
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
          <PageFooterContentItem url={item.url} icon={item.icon} />
        ))}
      </ul>
      <h3>
        {new Date().getFullYear()}&nbsp;
        <CopyrightRounded />
        &nbsp;Maciej Spiechowicz
      </h3>
    </div>
  )
}

export default PageFooterContent
