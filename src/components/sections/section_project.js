import React from "react"
import Project from "../project"

export default function ProjectSection() {
  return (
    <div className="page-projects__grid">
      <h1>Recent Projects</h1>
      <Project
        title="Personal Website - Gatsby"
        memberNumber="1"
        date="10 May 2021"
        progress="25%"
        url="https://github.com/MSpiechowicz/maciejspiechowicz.com"
      />
      <Project
        title="CityOS Charging Station IOT"
        memberNumber="1"
        date="05 May 2021"
        progress="15%"
        url="https://github.com/MSpiechowicz/cityos-charging-station-iot"
      />
      <Project
        title="HTML Template"
        memberNumber="1"
        date="13 Nov 2020"
        progress="100%"
        url="https://github.com/MSpiechowicz/personal-website"
      />
      <Project
        title="CityOS OCPP"
        memberNumber="1"
        date="25 Mar 2020"
        progress="35%"
        url="https://github.com/MSpiechowicz/cityos-ocpp"
      />
    </div>
  )
}
