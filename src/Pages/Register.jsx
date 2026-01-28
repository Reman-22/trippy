import React from 'react'
import ContactForm from '../Components/ContactForm/ContactForm.jsx'

const Register = () => {
  return (
    <div>
    <ContactForm title="Register" form1="user_name " form2="Email" form3="password"  form4=" Rewrite password" btn="Register" desc=" already have an email? " btn2="login"/>
    </div>
  )
}

export default Register