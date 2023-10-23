import React from "react";
import Facebook from "../assets/Facebook.webp";
import Gmail from "../assets/Gmail.webp";
import Mastodon from "../assets/Mastodon.webp";
import AppFooterItem from "./AppFooterItem";
import Linkedin from "../assets/Linkedin.webp";

function AppFooter() {
  const footerItems = [
    {
      src: Facebook,
      alt: "Facebook logo",
      name: "Facebook",
    },
    {
      src: Gmail,
      alt: "Gmail logo",
      name: "Gmail",
    },
    {
      src: Mastodon,
      alt: "Mastodon logo",
      name: "Mastodon",
    },
    {
      src: Linkedin,
      alt: "Linkedin logo",
      name: "Linkedin",
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
          />
        ))
      }
    </div>
  );
}

export default AppFooter;
