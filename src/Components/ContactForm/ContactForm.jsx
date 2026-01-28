import React from 'react'
import './ContactForm.css'
import { useNavigate } from 'react-router-dom'
const ContactForm = ({title , form1,form2, form3 , form4 ,btn ,desc , btn2}) => {
  const navigate = useNavigate()
  const ChangeUrl =()=>{
    navigate(`/${btn2} `)
  } 
  const Change =()=>{
    if(btn === "Register"){
      navigate("/login")
    }
    else if (btn === "Sign in"){
      navigate("/")
    }
    }
  return (
    <div className='ContactForm'>
    <h3> {title}  </h3>
    <input placeholder={form1}/>
    <input placeholder={form2}/>
    { form3?<input placeholder={form3} /> :""}
    {form4? <input placeholder={form4}/>:""}
    <button className='btn' onClick={Change}   >{btn}</button>
    <p>{desc}</p> 
     {btn2? <button  onClick={ChangeUrl} > {btn2}</button>:""}

    </div>
  )
}

export default ContactForm