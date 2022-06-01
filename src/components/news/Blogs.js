import React from 'react'
import { FooterTopBox } from '../common'
import Fade from 'react-reveal/Fade'
import BlogIntro from './BlogIntro'
import BlogSections from './BlogSections'

const Blogs = () => {
    return (
        <div>
            <Fade bottom>
                <BlogIntro />
            </Fade>
            <BlogSections />
            <Fade bottom>
                <FooterTopBox />
            </Fade>
        </div>
    )
}

export default Blogs
