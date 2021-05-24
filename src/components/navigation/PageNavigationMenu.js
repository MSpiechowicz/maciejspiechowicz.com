import React from "react"
import PageNavigationMenuItem from "./PageNavigationMenuItem"
import {
  Filter1Rounded,
  Filter2Rounded,
  Filter3Rounded,
  Filter4Rounded,
} from "@material-ui/icons"

const PageNavigationMenu = () => {
  const menuItems = [
    {
      key: "menu_item_1",
      href: "section-hello",
      icon: <Filter1Rounded />,
      title: "Hello",
    },
    {
      key: "menu_item_2",
      href: "section-whoami",
      icon: <Filter2Rounded />,
      title: "Whoami",
    },
    {
      key: "menu_item_3",
      href: "section-project",
      icon: <Filter3Rounded />,
      title: "Project",
    },
    {
      key: "menu_item_4",
      href: "section-contact",
      icon: <Filter4Rounded />,
      title: "Contact",
    },
  ]

  return (
    <div className="page-navigation__menu">
      {menuItems.map(item => (
        <PageNavigationMenuItem
          key={item.key}
          href={item.href}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </div>
  )
}

export default PageNavigationMenu
