// import React, { Children } from 'react'
import styles from './Section.module.css'
function Section1({children}) {
  return (
    <div className={styles.Section1}>
        {children}
        </div>
  )
}

export default Section1
