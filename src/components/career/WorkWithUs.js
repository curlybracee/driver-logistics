import React from "react";
import { WorkWithUsImg } from "../../assets/images";

const WorkWithUs = () => {
    return (
        <section class="inner_career_section">
            <div class="container">
                <div class="col-md-12">
                    <div class="row">
                        <div
                            class="col-md-6 inner_contact_box wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            <div class="inner_career_contantbox">
                                <h1>
                                    WORK WITH <span class="banner_redfont">US</span>
                                </h1>

                                <p>
                                    We're constantly looking for talented individuals at all
                                    levels who can deliver the caliber of service our customers
                                    require.We are fast, operate under pressure with limited
                                    resources. If you are crazy enough to relentlessly move our
                                    business forward, Driver Logistics is home to you.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 inner_contact_box">
                            <div
                                class="inner_career_contantbox wow fadeInUp"
                                data-wow-delay="1s"
                            >
                                <img src={WorkWithUsImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkWithUs;
