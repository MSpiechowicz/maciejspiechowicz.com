import React from "react";
import Logo from "../assets/Logo.webp";

function AppLogo() {
  return (
    <div
      className="w-full h-full justify-center items-center flex"
    >
      <img
        src={Logo}
        alt="Logo for the personal website, with the name Maciej Spiechowicz and the stars above it"
        className="h-auto max-[511px]:w-[250px] min-[512px]:w-[450px]" />
    </div>
  );
}

export default AppLogo;
