import React from 'react'
import './navbar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ContactForm from '../ContactForm/ContactForm'

function NavBar({logo, items ,btn  }) {
  const navigate = useNavigate()
  const ChangeUrl =()=>{
    navigate("/register")
  }
  return (
    <nav className='navbar'>
        <h1>{logo}</h1>
        <div>
        <ul>
            {items?.map((item , index) => {
                return(
                    <li key={index}><NavLink to={item?.url} className={({isActive})=> isActive?'active':''} > {item?.icon}{item?.content} </NavLink></li>
                )
            })}
        </ul>
    <button className='btn' onClick={ChangeUrl} >{btn}</button>
    </div>
    </nav>
  )
}

export default NavBar