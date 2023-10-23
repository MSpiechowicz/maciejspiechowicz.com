import React from "react";
import { AppFooterItemProperty } from "./index";

function AppFooterItem(props: AppFooterItemProperty) {
  return (
    <div
      className="w-fit h-auto justify-self-start items-center flex gap-3"
    >
      <a
      href={props.url}
      target="_blank noreferrer"
      className="flex justify-center items-center gap-3 cursor-pointer hover:underline decoration-white decoration-2 underline-offset-4 outline-transparent outline-offset-4 outline-1 rounded-md"
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
      </a>
    </div>
  );
}

export default AppFooterItem;
