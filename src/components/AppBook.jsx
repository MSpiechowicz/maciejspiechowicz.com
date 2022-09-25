import React from 'react'
import AppBookContentContact from './AppBookContentContact'
import AppBookDecoration from './AppBookDecoration'
import AppBookContentDescription from './AppBookContentDescription'
import AppBookContentMotto from './AppBookContentMotto'
import AppBookContentMountain from './AppBookContentMountain'
import AppBookContentTitle from './AppBookContentTitle'
import AppBookContentTree from './AppBookContentTree'

function AppBook() {
  return (
    <div className="app__book">
      <AppBookDecoration />
      <div className="app__book__content">
        <AppBookContentMountain />
        <AppBookContentTitle />
        <AppBookContentDescription />
        <AppBookContentContact />
        <AppBookContentTree />
        <AppBookContentMotto />
      </div>
    </div>
  )
}

export default AppBook
