import React from 'react'
import { FooterTopBox } from '../common'
import Fade from 'react-reveal/Fade'
import NewsIntro from './NewsIntro'
import NewsSections from './NewsSections'

const News = () => {
    return (
        <div>
            <Fade bottom>
            <NewsSections />
                {/* <NewsIntro /> */}
            </Fade>
            <Fade bottom>
                <FooterTopBox />
            </Fade>
        </div>
    )
}

export default News
