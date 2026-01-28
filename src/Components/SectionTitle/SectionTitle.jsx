import React from 'react'
import styles from './SectionTitle.module.css'
const SectionTitle = ({ title, subTitle}) => {
  return (
    < div className={styles.title}>
    <h1>{title}</h1>
    <p> {subTitle}</p>
    </div>
  )
}


export default SectionTitle