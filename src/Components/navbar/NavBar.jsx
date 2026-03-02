import React from 'react'
import './navbar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
function NavBar({logo, items ,btn  }) {
  const navigate = useNavigate()
  const [showMenu,setShowMenu]=useState(false);
  const ChangeUrl =()=>{
    navigate("/register")
  }
  return (
    <nav className='navbar' >
            <div className="menu-toggle" onClick={()=>setShowMenu(!showMenu)}>
              {showMenu?<HiX size={30}/>:<HiMenuAlt3 size={30}/>}</div>
               <h1>{logo}</h1>
          <div  >
        <ul className={showMenu?"nav-links open":"nav-links"}>
            {items?.map((item , index) => {
                return(
                    <li key={index}><NavLink to={item?.url} className={({isActive})=> isActive?'active':''} onClick={()=>setShowMenu(false)}> {item?.icon}{item?.content} </NavLink></li>
                )
            })}
        </ul>
    <button className='btn' onClick={ChangeUrl} >{btn}</button>
    </div>
    </nav>
  )
}

export default NavBar