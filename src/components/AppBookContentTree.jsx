import React from 'react'
import Tree from '../assets/tree.svg'

function AppBookContentTree() {
  return (
    <div className="app__book__content__tree">
      <img
        src={Tree}
        alt="Tree"
        className="app__book__content__tree__image"
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default AppBookContentTree
