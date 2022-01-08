import React from 'react'
import { Logo1, Logo2, Logo3, Logo4, Logo5 } from '../../assets/images'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Fade from 'react-reveal/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const LogoSection = () => {
    const matches840 = useMediaQuery('(max-width:840px)');
    const matches480 = useMediaQuery('(max-width:480px)');
    return (
        <section class="logo_section">
            <div class="container">
                <div class="col-md-12">
                    <h1>
                        Experience the most flexible and comprehensive Third Party
                        Logistics and warehouse management with us.
                    </h1>

                    <div class="underline"></div>
                    <Fade bottom>
                        <div class="logo_slider_outer wow fadeInUp" data-wow-delay="1s">
                            <OwlCarousel
                                items={matches480 ? 2 : matches840 ? 3 : 5}
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
                    </Fade>
                </div>
            </div>
        </section>

    )
}

export default LogoSection
