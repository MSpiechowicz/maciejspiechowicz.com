import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function BlogPage() {
  return (
    <Layout>
      <Seo title="Blog" />
      <div className="page-not-found__flex">
        <div className="page-not-found__flex_image">
          <StaticImage
            src="../images/under-construction.png"
            width={512}
            quality={95}
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Under Construction"
          />
        </div>
        <h2>Page Under Construction</h2>
      </div>
    </Layout>
  )
}
