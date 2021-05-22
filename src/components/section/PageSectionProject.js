import React from "react"
import PageSectionProjectItem from "./PageSectionProjectItem"

const PageSectionProject = () => {
  const projectItems = [
    {
      key: "project_item_1",
      title: "Personal Website - Gatsby",
      memberNumber: 1,
      date: "10 May 2021",
      progress: "25%",
      url: "https://github.com/MSpiechowicz/maciejspiechowicz.com",
      alt: "Project_1",
    },
    {
      key: "project_item_2",
      title: "CityOS Charging Station IOT",
      memberNumber: 1,
      date: "05 May 2021",
      progress: "15%",
      url: "https://github.com/MSpiechowicz/cityos-charging-station-iot",
      alt: "Project_2",
    },
    {
      key: "project_item_3",
      title: "HTML Template",
      memberNumber: 1,
      date: "13 Nov 2020",
      progress: "100%",
      url: "https://github.com/MSpiechowicz/personal-website",
      alt: "Project_3",
    },
    {
      key: "project_item_4",
      title: "CityOS OCPP",
      memberNumber: 1,
      date: "25 Mar 2020",
      progress: "35%",
      url: "https://github.com/MSpiechowicz/cityos-ocpp",
      alt: "Project_4",
    },
  ]

  return (
    <div className="page-content__section__project">
      <h1>Recent Projects</h1>
      {projectItems.map(item => (
        <PageSectionProjectItem
          key={item.key}
          title={item.title}
          memberNumber={item.memberNumber}
          date={item.date}
          progress={item.progress}
          url={item.url}
          alt={item.alt}
        />
      ))}
    </div>
  )
}

export default PageSectionProject
