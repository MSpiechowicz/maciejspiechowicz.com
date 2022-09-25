import React from 'react'
import AppContact from './AppContact'
import AppDescription from './AppDescription'
import AppMotto from './AppMotto'
import AppMountain from './AppMountain'
import AppTitle from './AppTitle'
import AppTree from './AppTree'

function AppBook() {
  return (
    <div className="w-[350px] h-[500px] bg-white flex flex-row self-center rounded-l-2xl rounded-r-2xl shadow-3xl overflow-hidden">
      <div className="bg-blue w-[25px] h-auto rounded-l-2xl"></div>
      <div className="bg-blue w-[5px] h-auto ml-1"></div>
      <div className="w-auto h-auto p-6 relative">
        <AppMountain />
        <AppTitle />
        <AppDescription />
        <AppContact />
        <AppTree />
        <AppMotto />
      </div>
      <div className="bg-blue w-[10px] ml-2 h-[100px] flex flex-col self-center rounded-l-lg"></div>
    </div>
  )
}

export default AppBook
