import React from 'react'
import Section1 from '../Components/Section/Section1.jsx'
import SectionTitle from '../Components/SectionTitle/SectionTitle.jsx'
import PopularContainer from '../Components/PopularContainer/PopularContainer.jsx'

const Home = () => {
  return (
    <div>
        <Section1>
          <SectionTitle title= "Popular Destinations" subTitle="Tours dive you the opportunity to see a lot, within a time frame."/>
        <PopularContainer style={{width:"100%"}} title="maldive beach" description="The Maldives beaches in 2026 remain the ultimate symbol of tropical paradise, where pristine white coral sands meet crystal-clear turquoise lagoons in perfect harmony. This archipelago offers an unparalleled blend of seclusion and luxury, featuring private overwater villas that provide direct access to vibrant coral reefs and exotic marine life. From the magical glow of bioluminescent shores at night to the serene beauty of its sun-drenched coastlines, the Maldives provides a breathtaking escape that seamlessly combines natural wonder with world-class tranquility."
        firstImage="/trippy/view1.jpg" secImage="/trippy/view2.jpg" />
        <PopularContainer title="The Alps"  description="The Alps are Earth’s most iconic mountain range, stretching across eight European countries to offer a breathtaking landscape of jagged limestone peaks, crystalline glacial lakes, and lush alpine meadows. In 2026, they continue to be a premier destination for year-round adventure, featuring world-class ski resorts in the winter and scenic hiking trails in the summer. This majestic range is not only a hub for outdoor sports like climbing and paragliding but also a sanctuary of serene beauty, dotted with charming traditional villages and eco-friendly luxury retreats that provide a perfect escape into nature's grandeur."
        firstImage="/trippy/view3.jpg" secImage="/trippy/view4.jpg" reverse="true" />
        </Section1> 
    </div>
  )
}

export default Home