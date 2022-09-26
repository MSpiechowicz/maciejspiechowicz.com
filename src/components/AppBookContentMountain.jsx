import React from 'react'
import Mountain from '../assets/mountain.min.svg'

function AppBookContentMountain() {
  return (
    <div className="app__book__content__mountain">
      <img
        src={Mountain}
        alt="Mountain"
        className="app__book__content__mountain__image"
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default AppBookContentMountain
