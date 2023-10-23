import React from "react";
import Facebook from "../assets/Facebook.webp";
import Gmail from "../assets/Gmail.webp";
import Linkedin from "../assets/Linkedin.webp";
import Mastodon from "../assets/Mastodon.webp";
import AppFooterItem from "./AppFooterItem";
import { AppFooterItemProperty } from "./index";

function AppFooter() {
  const footerItems: Array<AppFooterItemProperty> = [
    {
      src: Facebook,
      alt: "Facebook logo",
      name: "Facebook",
      url: "https://www.facebook.com/maciej.spiechowicz"
    },
    {
      src: Gmail,
      alt: "Gmail logo",
      name: "Gmail",
      url: "mailto:maciej.spiechowicz@gmail.com"
    },
    {
      src: Mastodon,
      alt: "Mastodon logo",
      name: "Mastodon",
      url: "https://mastodon.social/@mspiechowicz"
    },
    {
      src: Linkedin,
      alt: "Linkedin logo",
      name: "Linkedin",
      url: "https://www.linkedin.com/in/mspiechowicz/"
    },
  ];

  return (
    <div
      className="max-[511px]:w-[350px] min-[512px]:w-[600px] h-auto justify-center items-center flex gap-8"
    >
      {
        footerItems?.map((item, index) => (
          <AppFooterItem
            key={index}
            src={item.src}
            alt={item.alt}
            name={item.name}
            url={item.url}
          />
        ))
      }
    </div>
  );
}

export default AppFooter;
