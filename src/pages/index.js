import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function HomePage() {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="page-home__grid">
        <div className="page-home__grid--description">
          <h1>Welcome at my personal website :)</h1>
          <p>
            My name is Maciej Spiechowicz. I am an IT Project Manager and
            Software Engineer with experience in both Front-end and Back-end
            technologies. I assume that a Programmer can be anyone, but not
            everyone can think from the perspective of complex mechanisms taking
            place in business field. For almost 14 years of my professional
            career I have seen many examples of badly managed IT projects and
            wasting the necessary funds that could be successfully used to
            increase the position on the market. That is why I decided that I
            want to help other companies accomplished their goals with less
            effort and better overall quality.
          </p>
        </div>
        <div className="page-home__grid--image">
          <StaticImage
            src="../images/foto.png"
            width={275}
            quality={95}
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Personal Foto"
          />
        </div>
        <h3>
          <i>
            &#8222;Life is too short to do the things that you don't like doing&#8220;
          </i>
        </h3>
      </div>
    </Layout>
  )
}
