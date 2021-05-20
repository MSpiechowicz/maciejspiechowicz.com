import React from "react"
import PageLayout from "../components/PageLayout"
import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = () => {
  return (
    <PageLayout>
      <div className="page-content_404">
        <StaticImage
          src="../images/404-black.png"
          width={512}
          quality={95}
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF", "PNG"]}
          alt="404"
        />
        <h2>Page Not Found</h2>
      </div>
    </PageLayout>
  )
}

export default NotFoundPage
