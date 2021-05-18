import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import HomeSection from "../components/sections/section_home"
import AboutSection from "../components/sections/section_about"
import ContactSection from "../components/sections/section_contact"
import ProjectSection from "../components/sections/section_project"

import "../styles/main.scss"
// import Layout from "../components/layout"

export default function Index() {
  return (
    <main>
      <Header />
      <div className="page-content">
        <section>
          <HomeSection />
        </section>
        <section>
          <AboutSection />
        </section>
        <section>
          <ProjectSection />
        </section>
        <section>
          <ContactSection />
        </section>
      </div>
      <Footer />
    </main>
  )
}
