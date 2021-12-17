import React from 'react'
import WorkWithUs from './WorkWithUs'
import Fade from 'react-reveal/Fade'
import CareerForm from './CareerForm'
import HowWeDrive from './HowWeDrive'

const Career = () => {
    return (
        <div>
            <Fade Bottom>
                <WorkWithUs />
            </Fade>
            <Fade Bottom>
                <CareerForm />
            </Fade>
            <HowWeDrive />
        </div>
    )
}

export default Career
