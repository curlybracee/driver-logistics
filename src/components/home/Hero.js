import React from 'react'
import { Link } from 'react-router-dom'
import { HeroImg } from '../../assets/images'

const Hero = () => {
    return (
        <div className='main_bannerpart'>
            <div className='banner_contantpart_outer'>
                <div class="banner_contantpart wow fadeInUp" data-wow-delay="1s">
                    <h1>
                        Let us be Your<br />
                        <span class="banner_redfont">3PL</span> Wizard<br />
                        <p>
                            Experience the most flexible and comprehensive<br />
                            Third Party Logistics and warehouse<br />
                            management with us.
                        </p>
                        <div class="banner_readmore">
                            <Link to="/about-us" class="theme-btn btn-style-one">
                                <span class="btn-title">Contact Us</span>
                            </Link>
                        </div>
                    </h1>
                </div>
                <div className="banner_imagepart wow fadeInUp">
                    <img src={HeroImg} alt="banner" />
                </div>
            </div>
        </div>
    )
}

export default Hero
