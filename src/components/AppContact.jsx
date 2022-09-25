import React from 'react'
import AppButton from './AppButton'

function AppContact() {
  return (
    <div className="mt-7 md:mt-6 flex flex-row gap-3">
      <AppButton
        text="Contact me"
        href="mailto:maciej.spiechowicz@gmail.com"
        label="Email" />
      <AppButton
        text="Linkedin"
        href="http://www.linkedin.com/in/mspiechowicz"
        label="Linkedin"
        secondary />
    </div>
  )
}

export default AppContact
