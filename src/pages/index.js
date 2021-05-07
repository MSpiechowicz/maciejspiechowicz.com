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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="page-home__grid--image">
          <StaticImage
            src="../images/foto.png"
            width={300}
            quality={95}
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Personal Foto"
          />
        </div>
      </div>
    </Layout>
  )
}
