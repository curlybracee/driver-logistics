import React from 'react';
import about_inner_img from '../../assets/images/about_inner_img_1.png';


function AboutUsHead() {
    return (
        <section className="inner_aboutsection">

            <div className="container">

                <div className="col-md-12">

                    <div className="row">

                        <div className="col-md-6" style={{padding:'0px'}}>

                            <div className="inner_aboutsection_contantpart wow fadeInUp" data-wow-delay="1s">

                                <h1>About <span className="banner_redfont">US</span></h1>
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


                        <div className="col-md-6">

                            <div className="inner_aboutsection_contantpart wow fadeInUp" data-wow-delay="1s">

                                <img src={about_inner_img}></img>

                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </section>
    )
}

export default AboutUsHead
