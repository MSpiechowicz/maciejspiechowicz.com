import React from 'react'
import Mountain from '../assets/mountain.svg'

function AppMountain() {
  return (
    <div className="absolute top-0 md:top-6 right-0">
      <img
        src={Mountain}
        alt="Mountain"
        className="w-[250px] md:w-[350px] lg:w-[450px] h-[250px] md:h-[auto]" />
    </div>
  )
}

export default AppMountain
