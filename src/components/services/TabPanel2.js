import React from 'react';
import { tab_img_2 } from '../../assets/images';


function TabPanel2() {
    return (
        <div role="tabpanel" id="skltbsResponsive2" class="skltbs-panel">

            <div class="row">
                <div class="col-md-6">

                    <div class="inner_service_section_contantpart wow fadeInUp" data-wow-delay="1s">

                        <h1>FLEET &
                        TRANSPORTATION <span class="banner_redfont">MANAGEMENT</span></h1>
                        <p>We have a team of fleet managers who go beyond and
                        above to make sure this most crucial part of the service
                        is delivered in the best way possible. We adapt the
                        latest technology and innovative approach to improve
                        efficiency, ensuring customer satisfaction, and increase
                        productivity.</p>

                    </div>

                </div>

                <div class="col-md-6 tab_img_box">

                    <div class="inner_service_section_contantpart wow fadeInUp" data-wow-delay="1s">

                        <img src={tab_img_2} />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default TabPanel2
