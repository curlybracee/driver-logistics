import React from 'react';
import AboutUsHead from './AboutUsHead'
import OurTeam from './OurTeam'
import OurVision from './OurVision'
import { FooterTopBox } from '../common';

const AboutUs = () => {
    return (
        <div className="page-wrapper">
            <AboutUsHead />
            <OurTeam />
            <OurVision />
            <FooterTopBox />
        </div>
    )
}
export default AboutUs

