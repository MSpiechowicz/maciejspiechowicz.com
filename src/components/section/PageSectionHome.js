import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function PageSectionHome() {
  return (
    <div className="page-content__section__home">
      <div className="page-content__section__home--description">
        <p>
          My name is Maciej Spiechowicz. I am an IT Project Manager and Software
          Engineer with experience in both Front-end and Back-end technologies.
          I assume that a Programmer can be anyone, but not everyone can think
          from the perspective of complex mechanisms taking place in business
          field. For almost 14 years of my professional career I have seen many
          examples of badly managed IT projects and wasting the necessary funds
          that could be successfully used to increase the position on the
          market. That is why I decided that I want to help other companies
          accomplished their goals with less effort and better overall quality.
        </p>
      </div>
      <div className="page-content__section__home--image">
        <StaticImage
          src="../../images/foto.png"
          width={275}
          quality={95}
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Personal Foto"
        />
      </div>
    </div>
  )
}
