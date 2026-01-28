import React from 'react'
import Section1 from '../Components/Section/Section1.jsx'
import SectionTitle from '../Components/SectionTitle/SectionTitle.jsx'
import TripCard from '../Components/TripCard/TripCard.jsx'

const Service = () => {
  return (
    <div>
<Section1>
          <SectionTitle title="Recent Trips " subTitle=" You can discover unique destination using Google Maps."/>
          <div className='cards'>
          <TripCard Image="/trippy/Indonesia.jpg" title="Trip in Indonesia" description="A trip to Indonesia is an extraordinary journey through the world’s largest archipelago, offering a stunning mix of volcanic landscapes, lush tropical jungles, and world-class beaches. From the spiritual heart of Bali and its iconic rice terraces to the ancient wonders of Borobudur temple, the country is a vibrant tapestry of diverse cultures and traditions. Whether you are trekking to see wild orangutans in Sumatra, diving into the pristine reefs of Raja Ampat." />
          <TripCard Image="/trippy/Malaysia.jpg" title="Trip in Malaysia" description="A trip to Malaysia in 2026 offers a captivating blend of modernity and tradition, featuring everything from the iconic skyscrapers of Kuala Lumpur to the ancient, lush rainforests of Taman Negara. This diverse destination is a paradise for food lovers, offering a unique fusion of Malay, Chinese, and Indian flavors, while its stunning islands like Langkawi and the Cameron Highlands' tea plantations provide the perfect escape into nature." />
          <TripCard Image="/trippy/France.jpg" title="Trip in France" description="A trip to France in 2026 offers an exquisite blend of timeless art, iconic history, and world-class gastronomy. From the romantic streets of Paris and its legendary landmarks like the Eiffel Tower to the sun-drenched lavender fields of Provence and the glamorous beaches of the French Riviera, the country is a masterpiece of diversity. Whether you are exploring the fairytale chateaus of the Loire Valley, skiing in the majestic Alps, or indulging in gourmet pastries and fine wines." />
</div>
        </Section1>
    </div>
  )
}

export default Service