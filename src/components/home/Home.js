import React from 'react'
import ConstructionService from './ConstructionService'
import DigitisationService from './DigitisationService'
import FleetTransportService from './FleetTransportService'
import Hero from './Hero'
import LogoSection from './LogoSection'
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
        </div>
    )
}

export default Home
