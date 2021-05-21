import React from "react"
import PageLayout from "../components/PageLayout"
import PageSection from "../components/PageSection"
import { Provider } from "react-redux"
import StoreNavigation from "../store/StoreNavigation"

import "../styles/index.scss"

const index = () => {
  return (
    <Provider store={StoreNavigation}>
      <PageLayout>
        <PageSection />
      </PageLayout>
    </Provider>
  )
}

export default index
