import React, { Fragment } from "react"
import PageHeader from "../components/PageHeader"
import PageContent from "../components/PageContent"
import PageSideNavigation from "../components/PageSideNavigation"
import PageFooter from "../components/PageFooter"

const PageLayout = props => {
  return (
    <Fragment>
      <PageHeader />
      <main>
        <PageContent children={props.children}/>
        <PageSideNavigation />
      </main>
      <PageFooter />
    </Fragment>
  )
}

export default PageLayout;