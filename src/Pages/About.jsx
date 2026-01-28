import React from 'react'
import SectionTitle from '../Components/SectionTitle/SectionTitle'
import AboutSection from '../Components/AboutSection/AboutSection'
import Section1 from '../Components/Section/Section1'

const About = () => {
  return (
    <div>
 <Section1>
          <SectionTitle title='About'/>
          <div>
        <AboutSection title= "Our History" desc="Tripy is owned and managed by triy . in pvt.ltd , a leading brand in web dessigning services and e-commerce soulutions . rippy in pvt ltd is ciunted for its expertise and rich experiennce has raised our client's expectation . "/>
        <AboutSection title="Our Mission " desc=" our mission to touch the horizon where our capabilities may successfully meet with the requirements of our clints that too with ultimate transparency and cost effectiveness." />
        <AboutSection title="Our Vision " desc=" To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients. "/>
        </div>

        </Section1>
    </div>
  )
}

export default About