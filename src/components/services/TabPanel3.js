import React from 'react'
import { tab_img_2 } from '../../assets/images';
import Pulse from 'react-reveal/Pulse';

function TabPanel3(props) {
    return (
        <Pulse>

            <div role="tabpanel" id="skltbsResponsive3" class="skltbs-panel">
                <div class="row">
                    <div class="col-md-6">

                        <div class="inner_service_section_contantpart wow fadeInUp" data-wow-delay="1s">

                            <h1><span class="banner_redfont">3PL</span><br /> CONSULTATION</h1>
                            <p>As a top 3PL company in india, We have been lucky to
                            learn a lot while helping businesses scale. It starts with
                        understanding what they need.</p>

                            <p>Driver Team has matured into a well acknowledged
                            player in warehousing, B2B fulfilment and logistics. Our
                            collective passion for innovation and excellence helps
                            us understand the supply chain challenges companies
                            face and we are equipped with knowledge andFollow link (ctrl + click)

                        resources to help businesses optimize their logistics.</p>

                            <p>We assist businesses to integrate the right tools to give
                            them accurate business intelligence & insights for
                            predictive planning and optimisation of their supply
                        chain</p>

                        </div>

                    </div>

                    <div class="col-md-6 tab_img_box">

                        <div class="inner_service_section_contantpart wow fadeInUp" data-wow-delay="1s">

                            <img src={tab_img_2} alt='' />

                        </div>

                    </div>
                </div>
            </div>
        </Pulse>

    )
}

export default TabPanel3
