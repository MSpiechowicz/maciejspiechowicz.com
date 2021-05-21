import React, { Fragment } from "react"
import PageHeader from "../components/PageHeader"
import PageContent from "../components/PageContent"
import PageNavigation from "../components/navigation/PageNavigation"
import PageFooter from "../components/PageFooter"

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