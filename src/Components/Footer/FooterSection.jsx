import React from 'react'
import './footerSection.css'
const FooterSection = ({title,w1,w2,w3,w4}) => {
  return (
    <div className='FooterSection'>
<h4>{title}</h4>
<ul>
    <li>{w1}</li>
    <li>{w2}</li>
    <li>{w3}</li>
    <li>{w4}</li>
</ul>
    </div>
  )
}

export default FooterSection