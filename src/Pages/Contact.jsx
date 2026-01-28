import React from 'react'
import SectionTitle from '../Components/SectionTitle/SectionTitle.jsx'
import ContactForm from '../Components/ContactForm/ContactForm.jsx'

const Contact = () => {
  return (
    <div className='Contact'>
        <SectionTitle title="Contact" />
        <ContactForm title= " Send a message to us!" form1="Name" form2= "Email" form3="subject" btn="Send Message"/>

    </div>
  )
}

export default Contact