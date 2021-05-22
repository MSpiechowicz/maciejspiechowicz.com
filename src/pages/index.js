import React from "react"
import PageLayout from "../components/PageLayout"
import PageSection from "../components/section/PageSection"
import StoreNavigation from "../store/StoreNavigation"
import PageSectionHome from "../components/section/PageSectionHome"
import PageSectionAbout from "../components/section/PageSectionAbout"
import PageSectionProject from "../components/section/PageSectionProject"
import { Provider } from "react-redux"

import "../styles/index.scss"

const index = () => {
  const sectionItems = [
    {
      key: "page_content_section_item_1",
      title: "Welcome at my personal website :)",
      subTitle: "Life is too short to do the things that you don't like doing",
      content: <PageSectionHome />,
    },
    {
      key: "page_content_section_item_2",
      title: "#Whoami",
      subTitle: "",
      content: <PageSectionAbout />,
    },
    {
      key: "page_content_section_item_3",
      title: "Projects",
      subTitle: "",
      content: <PageSectionProject />,
    },
  ]

  return (
    <Provider store={StoreNavigation}>
      <PageLayout>
        {sectionItems.map(item => (
          <PageSection
            key={item.key}
            title={item.title}
            subTitle={item.subTitle}
            content={item.content}
          />
        ))}
      </PageLayout>
    </Provider>
  )
}

export default index
