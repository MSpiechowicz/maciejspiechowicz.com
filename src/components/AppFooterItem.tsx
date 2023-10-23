import React from "react";

interface AppFooterProps {
  src: string;
  alt: string;
  name: string;
}

function AppFooterItem(props: AppFooterProps) {
  return (
    <div
      className="w-fit h-auto justify-self-start items-center flex gap-3"
    >
      <img
        src={props.src}
        alt={props.alt}
        className="w-[32px] h-[32px]"
      />
      <span
        className="max-[512px]:hidden text-white text font-bold text-[1.15rem]"
      >
        {props.name}
      </span>
    </div>
  );
}

export default AppFooterItem;
