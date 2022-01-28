import React from 'react'
import { ContactSecImg } from '../../assets/images'
import Fade from 'react-reveal/Fade';

const ContactSection = () => {
    return (<section class="inner_contact_section">

        <div class="container">

            <div class="col-md-12">

                <div class="row">

                    <div class="col-md-6 inner_contact_box" style={{padding:'0px'}}>

                        <div class="inner_contact_contantbox">
                            <h1>TALK TO <span class="banner_redfont">US</span>
                            </h1>

                            <p>Have questions about our services? Let's talk about
                            how we can help you achieve your goals and take
                                your business to the top!</p>

                        </div>

                    </div>
                    <div class="col-md-6 inner_contact_box">
                        <Fade bottom>

                            <div class="inner_contact_contantbox wow fadeInUp" data-wow-delay="1s">

                                <img src={ContactSecImg} alt='img' />

                            </div>

                        </Fade>
                    </div>


                </div>

            </div>

        </div>

    </section>

    )
}

export default ContactSection
