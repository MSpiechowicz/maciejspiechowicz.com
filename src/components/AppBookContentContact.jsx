import React from 'react'
import AppBookButton from './AppBookButton'

function AppBookContentContact() {
  return (
    <div className="app__book__content__contact">
      <AppBookButton
        text="Contact me"
        href="mailto:maciej.spiechowicz@gmail.com" />
      <AppBookButton
        text="Linkedin"
        href="http://www.linkedin.com/in/mspiechowicz"
        secondary />
    </div>
  )
}

export default AppBookContentContact
