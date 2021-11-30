import React from 'react'
import { tab_img_1 } from '../../assets/images';
import Pulse from 'react-reveal/Pulse';


function TabPanel1(props) {

    return (
        <Pulse>
            <div role="tabpanel" id="skltbsResponsive1" class="skltbs-panel">
                <div class="row">
                    <div class="col-md-6 tab_img_box">

                        <div class="inner_service_section_contantpart wow fadeInUp" data-wow-delay="1s">

                            <h1>WAREHOUSE <span class="banner_redfont">MANAGEMENT</span>
                        AND <span class="banner_redfont">B2B</span>
                        FULFILLMENT</h1>
                            <p>For most of the visionary and growing businesses,
                            outsourcing their warehousing and B2B order fulfillment
                            processes to a 3PL can make it easier to manage
                            inventory, warehouse operations and improve
                            customer service and thus save a lot of time to focus
                            on more strategic tasks. This is where Driver logistics
                        can help companies to streamline and scale up.</p>

                            <p>With the right B2B Fulfillment third party logistics partner
                            like Driver Logistics, businesses can be more proactive
                            in the other areas of the business. As an experienced
                            3PL company, we have seem it all - from order
                            processing, inventory management to preparations for
                        peak shopping seasons.</p>

                            <p>We combine inbound fulfillment and technology first
                            cloud based software modules with APIs and EDI to give
                            our clients a hassle free way to manage and ship their
                        products.</p>

                        </div>

                    </div>

                    <div class="col-md-6 ">

                        <div class="inner_service_section_contantpart wow fadeInUp" data-wow-delay="1s">

                            <img src={tab_img_1} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </Pulse>

    )
}

export default TabPanel1
