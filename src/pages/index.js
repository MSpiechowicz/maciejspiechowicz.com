import React from "react"
import PageLayout from "../components/PageLayout"
import PageSection from "../components/section/PageSection"
import StoreNavigation from "../store/StoreNavigation"
import PageSectionHello from "../components/section/PageSectionHello"
import PageSectionWhoami from "../components/section/PageSectionWhoami"
import PageSectionProject from "../components/section/PageSectionProject"
import { Provider } from "react-redux"

import "../styles/index.scss"

const index = () => {
  const sectionItems = [
    {
      key: "page_content_section_item_1",
      title: "#Hello",
      content: <PageSectionHello />,
    },
    {
      key: "page_content_section_item_2",
      title: "#Whoami",
      content: <PageSectionWhoami />,
    },
    {
      key: "page_content_section_item_3",
      title: "#Project",
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
            content={item.content}
          />
        ))}
      </PageLayout>
    </Provider>
  )
}

export default index
