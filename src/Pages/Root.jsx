import React from 'react'
import NavBar from '../Components/navbar/NavBar.jsx'
import {FaCircleInfo, FaHouseChimneyUser  } from "react-icons/fa6"
import {BiSolidContact} from "react-icons/bi"
import {MdOutlineHomeRepairService} from "react-icons/md"

import Hero from '../Components/Hero/Hero.jsx'
import MainFooter from '../Components/MainFooter/MainFooter.jsx'
import { Outlet } from 'react-router-dom'


const Root = () => {
    const items=[
      {
      icon:<FaHouseChimneyUser />,
      content:"home",
      url:"/"
    },
    {
      icon:<FaCircleInfo/>,
      content:"About",
      url:"/about"
    } ,
    {
      icon:<MdOutlineHomeRepairService  />,
      content:"Service",
      url:"/service"
    } ,
    {
      icon:<BiSolidContact  />,
      content:"Contact",
      url:"/contact"
    } 
    ]
  return (
    <div>
        <header>
      <NavBar logo="Trippy" items={items} btn="sign up" />
      <Hero bgImage= "/plane.jpg" title=" your travel your story" description="choose your favourite destination" btn="Travel Now"/>
      </header>
      <Outlet/>
    <footer>
        <MainFooter/>
      </footer>
    </div>
  )
}

export default Root