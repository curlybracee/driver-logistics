import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HeroImg } from '../../assets/images'

const Hero = () => {
    const { data = [] } = useSelector(state => state.userLog.banner)
    const currentBanner = data[0] || {};
    return (
        <div className='main_bannerpart'>
            <div className='banner_contantpart_outer'>
                <div class="banner_contantpart wow fadeInUp" data-wow-delay="1s">
                    <h1>
                        {currentBanner.title}<br />
                        <span class="banner_redfont">3PL</span> Wizard<br />
                        <div dangerouslySetInnerHTML={{ __html: currentBanner.description }} />
                        <div class="banner_readmore">
                            <Link to="/about-us" class="theme-btn btn-style-one">
                                <span class="btn-title">Contact Us</span>
                            </Link>
                        </div>
                    </h1>
                </div>
                <div className="banner_imagepart wow fadeInUp">
                    <img src={currentBanner.image} alt="banner" />
                </div>
            </div>
        </div>
    )
}

export default Hero
