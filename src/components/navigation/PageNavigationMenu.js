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
      title: "Home",
      icon: <Filter1Rounded />,
      url: "/",
      alt: "Home",
    },
    {
      key: "menu_item_2",
      title: "About",
      icon: <Filter2Rounded />,
      url: "/",
      alt: "About",
    },
    {
      key: "menu_item_3",
      title: "Projects",
      icon: <Filter3Rounded />,
      url: "/",
      alt: "Projects",
    },
    {
      key: "menu_item_4",
      title: "Contact",
      icon: <Filter4Rounded />,
      url: "/",
      alt: "Contact",
    },
  ]

  return (
    <div className="page-navigation__menu">
      {menuItems.map(item => (
        <PageNavigationMenuItem
          key={item.key}
          title={item.title}
          icon={item.icon}
          url={item.url}
          alt={item.alt}
        />
      ))}
    </div>
  )
}

export default PageNavigationMenu
