import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import FooterSection from '../Footer/FooterSection'
import './MainFooter.css'
const MainFooter = () => {
  return (
    <div className='MainFooter'>
        <SectionTitle title='Trippy' subTitle='choose your favourite destination'  />
        <div className='Footers'>
        <FooterSection  title="Project" w1="changeleo"  w2="status" w3="linces" w4="All verison"/>
        <FooterSection  title="Community" w1="GitHub"  w2="issues" w3="Project" w4="Twitter"/>
        <FooterSection  title="Help" w1="support"  w2="troubleshooting" w3="contact us" />
        <FooterSection  title="Others" w1="Terms of servise"  w2="privacy policy" w3="license" />
        </div>
    </div>
  )
}

export default MainFooter