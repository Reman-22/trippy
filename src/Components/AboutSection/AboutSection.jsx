import styles from './AboutSection.module.css'
const AboutSection = ({ title, desc}) => {
  return (
    < div className={styles.AboutSection}>
    <h2>{title}</h2>
    <p> {desc}</p>
    </div>
  )
}


export default AboutSection