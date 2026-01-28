import React from 'react'
import './PopularContainer.css'
const PopularContainer = ({title,description, firstImage , secImage, reverse}) => {
  return (
    <div className={`PopularContainer ${reverse ? "reverse" :""}`}>
    <div className='txt'>   
    <h2>{title}</h2>
    <p>{description}</p>
    </div>
    <div className='images'>
        <img src={firstImage} alt="firstImage" />
        <img src={secImage} alt="secImage" />

    </div>



    </div>
  )
}

export default PopularContainer