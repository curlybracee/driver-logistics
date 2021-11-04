import React from 'react'
import ConstructionService from './ConstructionService'
import DigitisationService from './DigitisationService'
import FleetTransportService from './FleetTransportService'
import Hero from './Hero'
import LatestFromBlogs from './LatestFromBlogs'
import LogoSection from './LogoSection'
import Testimonial from './Testimonial'
import WhareHouseService from './WhareHouseService'
const Home = () => {
    return (
        <div>
            <Hero />
            <LogoSection />
            <WhareHouseService />
            <FleetTransportService />
            <ConstructionService />
            <DigitisationService />
            <Testimonial />
            <LatestFromBlogs />
        </div>
    )
}

export default Home
