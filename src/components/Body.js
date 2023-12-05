import React from 'react'
import Sidebar from "./Sidebar"
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {
  return (
    <div>
      <Header/>
      <div className="flex justify-start ">
        <Sidebar/>
        <Outlet/>
    </div>
    </div>
    
  )
}

export default Body;