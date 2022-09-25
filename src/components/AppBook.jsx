import React from 'react'
import AppContact from './AppContact'
import AppDescription from './AppDescription'
import AppMotto from './AppMotto'
import AppMountain from './AppMountain'
import AppTitle from './AppTitle'
import AppTree from './AppTree'

function AppBook() {
  return (
    <div className="w-[350px] md:w-[500px] lg:w-[650px] h-[500px] md:h-[650px] lg:h-[800px] bg-white flex flex-row self-center rounded-l-2xl rounded-r-2xl shadow-3xl overflow-hidden relative">
      <div className="bg-blue w-[25px] md:w-[30px] lg:w-[35px] h-auto rounded-l-2xl"></div>
      <div className="bg-blue w-[5px] md:w-[6px] lg:w-[7px] h-auto ml-1"></div>
      <div className="w-auto h-auto p-6 md:p-10 relative">
        <AppMountain />
        <AppTitle />
        <AppDescription />
        <AppContact />
        <AppTree />
        <AppMotto />
      </div>
      <div className="absolute right-0 bg-blue w-[10px] md:w-[15px] lg:w-[20px] h-[100px] flex flex-col self-center rounded-l-lg"></div>
    </div>
  )
}

export default AppBook
