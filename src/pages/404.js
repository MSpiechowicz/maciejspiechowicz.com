import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="page-not-found__flex">
      <div className="page-not-found__flex_image">
        <StaticImage
          src="../images/404-black.png"
          width={512}
          quality={95}
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="404"
        />
      </div>
      <h2>Page Not Found</h2>
    </div>
  </Layout>
)

export default NotFoundPage
