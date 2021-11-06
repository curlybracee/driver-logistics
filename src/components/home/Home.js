import React from 'react'
import ConstructionService from './ConstructionService'
import DigitisationService from './DigitisationService'
import FleetTransportService from './FleetTransportService'
import Hero from './Hero'
// import LatestFromBlogs from './LatestFromBlogs'
import LogoSection from './LogoSection'
import Testimonial from './Testimonial'
import WhareHouseService from './WhareHouseService'
import Fade from 'react-reveal/Fade';
const Home = () => {
    return (
        <div>
            <Fade bottom>
                <Hero />
            </Fade>
            <LogoSection />
            <Fade bottom>
                <WhareHouseService />
            </Fade>
            <Fade bottom>
                <FleetTransportService />
            </Fade>
            <Fade bottom>
                <ConstructionService />
            </Fade>
            <Fade bottom>
                <DigitisationService />
            </Fade>
            <Fade bottom>
                <Testimonial />
            </Fade>
            {/* <LatestFromBlogs /> */}
        </div>
    )
}

export default Home
