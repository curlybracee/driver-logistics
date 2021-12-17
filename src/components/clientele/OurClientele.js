import React from 'react'
import { ClienteleImg } from '../../assets/images/clients'

const OurClientele = () => {
    return (
        <section className="inner_blog_section">

            <div className="container">

                <div className="col-md-12">

                    <div className="row">

                        <div className="col-md-6 inner_text_box wow fadeInUp" data-wow-delay="1s">

                            <div className="">
                                <h1>Our <span className="banner_redfont">CLIENTELE</span>
                                </h1>

                                <p>Our name spreads far and wide amongst
                                    businesses<br />Our client base stands testimony to our
                                    excellence and dedication.Join the list.</p>

                            </div>

                        </div>

                        <div className="col-md-6 inner_text_box">

                            <div className=" wow fadeInUp" data-wow-delay="1s">

                                <img src={ClienteleImg} alt='' />

                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </section>
    )
}

export default OurClientele
