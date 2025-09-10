import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Banner from '../components/Banner'
import ResNav from '../components/ResNav'


const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <ResNav/>
    <Outlet/>

    </>
  )
}

export default LayoutOne

