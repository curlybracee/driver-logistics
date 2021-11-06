import React from 'react'
import { ContactSecImg } from '../../assets/images'

const ContactSection = () => {
    return (<section class="inner_contact_section">

        <div class="container">

            <div class="col-md-12">

                <div class="row">

                    <div class="col-md-6 inner_contact_box">

                        <div class="inner_contact_contantbox">
                            <h1>TALK TO <span class="banner_redfont">US</span>
                            </h1>

                            <p>Have questions about our services? Let's talk about
                                how we can help you achieve your goals and take
                                your business to the top!</p>

                        </div>

                    </div>

                    <div class="col-md-6 inner_contact_box">

                        <div class="inner_contact_contantbox wow fadeInUp" data-wow-delay="1s">

                            <img src={ContactSecImg} alt='img' />

                        </div>

                    </div>


                </div>

            </div>

        </div>

    </section>

    )
}

export default ContactSection
