import React from 'react'
import './TripCard.css'
const TripCard = ({Image , title, description}) => {
  return (
    <div className='TripCard'>
    <img src={Image} alt="Image trip" />
    <h3>{ title}</h3>
    <p>{description}</p>
    </div>
  )
}

export default TripCard