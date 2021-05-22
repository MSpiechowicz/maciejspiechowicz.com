import React, { Fragment } from "react"
import PageHeader from "../components/header/PageHeader"
import PageContent from "../components/content/PageContent"
import PageNavigation from "../components/navigation/PageNavigation"
import PageFooter from "../components/footer/PageFooter"

const PageLayout = props => {
  return (
    <Fragment>
      <PageHeader />
      <main>
        <PageContent children={props.children}/>
        <PageNavigation />
      </main>
      <PageFooter />
    </Fragment>
  )
}

export default PageLayout;