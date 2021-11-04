import React from 'react'
import about_inner_img from '../assets/images/about_inner_img_1.png';
import team_img_2 from '../assets/images/team_img_2.png';
import team_img_1 from '../assets/images/team_img_1.png';
import team_img_3 from '../assets/images/team_img_3.png';

const AboutUs = () => {
    return (
        <div class="page-wrapper">
            <section class="inner_aboutsection">

                <div class="container">

                    <div class="col-md-12">

                        <div class="row">

                            <div class="col-md-6">

                                <div class="inner_aboutsection_contantpart wow fadeInUp" data-wow-delay="1s">

                                    <h1>About <span class="banner_redfont">US</span></h1>
                                    <p>Driver Logistics has a mission to assist the most
                                    successful companies in the world to empower their
                                    supply chain.</p>

                                    <p>We understand that growing companies have their
                                    priorities and core functions to take care of. Managing
                                    logistics operations is a troublesome task for
                                    businesses. This is where we come into the picture. We
                                    have the experience, network, and technology to take
                                    care of a company's B2B fulfillment and logistics.</p>

                                    <p>We are a team of unwavering visionaries and
                                    unstoppable doers. We focus on finding new ways to
                                    help our customers succeed while incessantly
                                    improving ourselves.</p>

                                </div>

                            </div>


                            <div class="col-md-6">

                                <div class="inner_aboutsection_contantpart wow fadeInUp" data-wow-delay="1s">

                                    <img src={about_inner_img}></img>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </section>

            <section class="inner_team_section">

                <div class="container">

                    <div class="col-md-12">

                        <h2 class="background double"><span>OUR TEAM</span></h2>


                        <div class="row">


                            <div class="col-md-4 wow fadeInUp" data-wow-delay="1s">

                                <div class="team_box">

                                    <img src={team_img_1}></img>

                                    <div class="team_title">TEAM MEMBER NAME</div>
                                    <div class="team_post">POSITION</div>

                                </div>

                            </div>

                            <div class="col-md-4 wow fadeInUp" data-wow-delay="2s">

                                <div class="team_box">

                                    <img src={team_img_2}></img>
                                    <div class="team_title">TEAM MEMBER NAME</div>
                                    <div class="team_post">POSITION</div>

                                </div>

                            </div>

                            <div class="col-md-4 wow fadeInUp" data-wow-delay="3s">

                                <div class="team_box">

                                    <img src={team_img_3}></img>
                                    <div class="team_title">TEAM MEMBER NAME</div>
                                    <div class="team_post">POSITION</div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section class="mission_section">

                <div class="container">

                    <div class="col-md-12 wow fadeInUp" data-wow-delay="1s">

                        <h2 class="background double"><span>OUR VISION</span></h2>

                        <p>Driver Logistics has a mission to assist the most successful companies in the world to empower
                        their supply
                        chain.</p>

                        <p>We understand that growing companies have their priorities and core functions to take care of.
                        Managing
                        logistics operations is a troublesome task for businesses. This is where we come into the
                        picture. We have the
                        experience, network, and technology to take care of a company's B2B fulfillment and logistics.
                    </p>

                        <p>We are a team of unwavering visionaries and unstoppable doers. We focus on finding new ways to
                        help our
                        customers succeed while incessantly improving ourselves.</p>

                    </div>

                </div>

            </section>


            <section class="footer_top_box">

                <div class="container">

                    <div class="col-md-12 wow fadeInUp" data-wow-delay="1s">

                        <div class="footer_contantbox">

                            <div class="footer_contantbox_inner">

                                <p>Simply put, we are a top <span>3PL</span> company in India, that approaches things a
                                little
                                differently. Our business is being a successful extension of your business.</p>

                                <p>Get your <span>3PL</span> experience simplified and Amplified with Us.</p>

                                <div class="footertop_readmore"><a href="#">LET'S TALK</a></div>

                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}
export default AboutUs

