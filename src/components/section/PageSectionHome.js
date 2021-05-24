import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const PageSectionHome = () => {
  return (
    <div className="page-content__section__home">
      <StaticImage
        src="../../images/foto.png"
        className="page-content__section__home--image"
        quality={95}
        layout="constrained"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Personal Foto"
      />
      <p>
        My name is <b>Maciej Spiechowicz</b>. I am an&nbsp;
        <b>IT Project Manager</b> and <b>Software Engineer</b> with experience
        in both Front-end and Back-end technologies. I assume that a Programmer
        can be anyone, but not everyone can think from the perspective of
        complex mechanisms taking place in business field.
      </p>
      <p>
        For almost 14 years of my professional career I have seen many examples
        of badly managed IT projects and wasting the necessary funds that could
        be successfully used to increase the position on the market.
      </p>
      <p>
        That is why I decided that I want to help other companies accomplished
        their goals with less effort and better overall quality.
      </p>
    </div>
  )
}

export default PageSectionHome
