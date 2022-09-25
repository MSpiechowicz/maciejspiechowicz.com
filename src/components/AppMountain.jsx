import React from 'react'
import Mountain from '../assets/mountain.svg'

function AppMountain() {
  return (
    <div className="absolute top-0 right-0">
      <img
        src={Mountain}
        alt="Mountain"
        className="w-[250px] h-[250px]" />
    </div>
  )
}

export default AppMountain
