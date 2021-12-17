import React from 'react';
import AboutUsHead from './AboutUsHead'
import OurTeam from './OurTeam'
import OurVision from './OurVision'
import { FooterTopBox } from '../common';
import Fade from 'react-reveal/Fade';

const AboutUs = () => {
    return (
        <div className="page-wrapper">
            <Fade bottom>
                <AboutUsHead />
            </Fade>
            <Fade bottom>
                <OurTeam />
            </Fade>
            <Fade bottom>
                <OurVision />
            </Fade>
            <Fade bottom>
                <FooterTopBox />
            </Fade>
        </div>
    )
}
export default AboutUs

