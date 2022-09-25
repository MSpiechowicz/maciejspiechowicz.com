import React from 'react'
import Tree from '../assets/tree.svg'

function AppTree() {
  return (
    <div className="absolute bottom-0 left-0">
      <img
        src={Tree}
        alt="Tree"
        className="w-[155px] h-auto" />
    </div>
  )
}

export default AppTree
