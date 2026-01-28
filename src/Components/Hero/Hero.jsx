import React from 'react'
import styles from  "../Hero/Hero.module.css"

const Hero =({title, description, bgImage , btn})=> {
  return (
    <div className={styles.Hero}>
      <img src={bgImage} alt="hero bgimage" className={styles.backgroundImage} />
      <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <button className={styles.btn}> { btn}</button>
      </div>
      </div>
  )
}

export default Hero