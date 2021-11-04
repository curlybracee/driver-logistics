import React from 'react'
import { Logo1, Logo2, Logo3, Logo4, Logo5 } from '../../assets/images'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const LogoSection = () => {
    return (
        <section class="logo_section">
            <div class="container">
                <div class="col-md-12">
                    <h1>
                        Experience the most flexible and comprehensive Third Party
                        Logistics and warehouse management with us.
                    </h1>

                    <div class="underline"></div>

                    <div class="logo_slider_outer wow fadeInUp" data-wow-delay="1s">
                        <OwlCarousel
                            items={5}
                            dots={false}
                            rewind={false}
                            className='owl-theme' loop margin={10}>
                            <div className='logo-item'><img src={Logo1} alt='logo1' /></div>

                            <div className='logo-item'><img src={Logo2} alt='logo2' /></div>

                            <div className='logo-item'><img src={Logo3} alt='Logo3' /></div>
                            <div className='logo-item'><img src={Logo4} alt='logo5' /></div>
                            <div className='logo-item'><img src={Logo5} alt='logo5' /></div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default LogoSection
