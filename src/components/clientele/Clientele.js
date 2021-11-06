import React from 'react'
import OurClientele from './OurClientele'
import Fade from 'react-reveal/Fade'
import LogoSection from './LogoSection'
import FeedBack from './FeedBack'
import { FooterTopBox } from '../common'
const Clientele = () => {
    return (
        <div>
            <Fade bottom>
                <OurClientele />
            </Fade>
            <Fade bottom>
                <LogoSection />
            </Fade>
            <FeedBack />
            <Fade bottom>
                <FooterTopBox />
            </Fade>
        </div>
    )
}

export default Clientele
