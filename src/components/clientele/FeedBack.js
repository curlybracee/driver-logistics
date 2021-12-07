import React from "react";
import * as TestImages from '../../assets/images/testimonials'
import Fade from 'react-reveal/Fade'

const FeedBack = () => {
    return (
        <section class="inner_testimonials_outer">
            <div class="container">
                <div class="col-md-12">
                    <h1>WHAT OUR CUSTOMERS SAYS ABOUT US</h1>
                    <div class="row">

                        <div class="col-md-6 wow fadeInUp" data-wow-delay="1s">
                            <Fade bottom>
                                <div class="testimonial_contantbox">
                                    <div class="testimonial_icon">
                                        <img alt='' src={TestImages.Testimonial_icon} />
                                    </div>
                                </div>

                                <div class="testi_new_box">
                                    <span class="testi_left_imagebox">
                                        <img alt='' src={TestImages.Testi_people_1} />
                                        <h2>
                                            <strong>Sooraj</strong>
                                            <br />
                                            Area Manager, JK Tyres
                                        </h2>
                                    </span>

                                    <div class="testi_right_contant">
                                        "They have ensured seamless operations. Process oriented and
                                        flexible and agile. In this pandemic time they have right
                                        sized the operations and shown the cost optimization. Being
                                        enthusiastic and agile their operational flexibility is their
                                        USP. Good at handling any seasonal spikes. They are constantly
                                        striving to serve better with the technology like data
                                        analytics, and ML, AI."
                                    </div>
                                </div>
                            </Fade>
                        </div>

                        <div class="col-md-6 wow fadeInUp" data-wow-delay="2s">
                            <Fade bottom style={{ display: 'flex' }}>
                                <div class="testimonial_contantbox">
                                    <div class="testimonial_icon">
                                        <img alt='' src={TestImages.Testimonial_icon} />
                                    </div>
                                </div>

                                <div class="testi_new_box blog_second" >
                                    <div style={{ display: 'flex !important' }}>
                                        <span class="testi_left_imagebox">
                                            <img alt='' src={TestImages.Testi_people_2} />
                                            <h2>
                                                <strong>Sooraj</strong>
                                                <br />
                                            Area Manager, JK Tyres
                                        </h2>
                                        </span>

                                        <div class="testi_right_contant">
                                            "Driver Logistics team consistently improves fulfilling our
                                            markert requirement with prompt and timely deliveries to our
                                            Channel Partners. Delightfully wishing all the best to this
                                            awesome team."
                                    </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-6 wow fadeInUp" data-wow-delay="3s">
                            <Fade bottom>
                                <div class="testimonial_contantbox">
                                    <div class="testimonial_icon">
                                        <img alt='' src={TestImages.Testimonial_icon} />
                                    </div>
                                </div>

                                <div class="testi_new_box">
                                    <span class="testi_left_imagebox">
                                        <img alt='' src={TestImages.Testi_people_3} />
                                        <h2>
                                            <strong>Sooraj</strong>
                                            <br />
                                            Area Manager, JK Tyres
                                        </h2>
                                    </span>

                                    <div class="testi_right_contant">
                                        "They have ensured seamless operations. Process oriented and
                                        flexible and agile. In this pandemic time they have right
                                        sized the operations and shown the cost optimization. Being
                                        enthusiastic and agile their operational flexibility is their
                                        USP. Good at handling any seasonal spikes. They are constantly
                                        striving to serve better with the technology like data
                                        analytics, and ML, AI."
                                    </div>
                                </div>
                            </Fade>
                        </div>

                        <div class="col-md-6 wow fadeInUp" data-wow-delay="4s">
                            <Fade bottom>
                                <div class="testimonial_contantbox">
                                    <div class="testimonial_icon">
                                        <img alt='' src={TestImages.Testimonial_icon} />
                                    </div>
                                </div>

                                <div class="testi_new_box blog_second">
                                    <span class="testi_left_imagebox">
                                        <img alt='' src={TestImages.Testi_people_4} />
                                        <h2>
                                            <strong>Sooraj</strong>
                                            <br />
                                            Area Manager, JK Tyres
                                        </h2>
                                    </span>

                                    <div class="testi_right_contant">
                                        "Driver Logistics team consistently improves fulfilling our
                                        markert requirement with prompt and timely deliveries to our
                                        Channel Partners. Delightfully wishing all the best to this
                                        awesome team."
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedBack;
