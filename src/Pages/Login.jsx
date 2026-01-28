import React from 'react'
import ContactForm from '../Components/ContactForm/ContactForm.jsx'

const Login = () => {
  
  return (
    <div>
        <ContactForm title="Sign in" form1="Email" form2="password"  btn="Sign in" desc=" Dont have an email? " btn2="register"/>
    </div>
  )
}

export default Login