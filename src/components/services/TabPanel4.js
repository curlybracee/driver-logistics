import React from 'react'
import { tab_img_4 } from '../../assets/images';
import Pulse from 'react-reveal/Pulse';

function TabPanel4() {
    return (
        <Pulse>
            <div role="tabpanel" id="skltbsResponsive4" class="skltbs-panel">
                <div class="row">
                    <div class="col-md-6">

                        <div class="inner_service_section_contantpart wow fadeInUp" data-wow-delay="1s">

                            <h1>DIGITISATION &
                        BUSINESS<br /><span class="banner_redfont">INTELLIGENCE</span></h1>
                            <p>Driver Logistics specializes in developing customised
                            supply chain technology solutions to our customers.
                            Our growth has been driven by our customers asking
                            us to expand our service offerings to solve their
                        logistics problems.</p>

                            <p>We combine inhouse fulfillment and technology fisrt
                            cloud based software modules to give our customers
                            hassle free ways to manage and ship their
                            products.our API based software tools give you
                            accurate business insights for predictive planning
                        and optimisation of your entire supply chain.</p>

                        </div>

                    </div>

                    <div class="col-md-6 tab_img_box">

                        <div class="inner_service_section_contantpart wow fadeInUp" data-wow-delay="1s">

                            <img src={tab_img_4} alt='img' />

                        </div>

                    </div>
                </div>
            </div>
        </Pulse>
    )
}

export default TabPanel4
