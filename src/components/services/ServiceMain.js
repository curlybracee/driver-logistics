import React, { useEffect } from 'react';
import HeaderTabList from './HeaderTabList';
import TabPanel1 from './TabPanel1';
import TabPanel2 from './TabPanel2';
import FooterTopBox from '../common/FooterTopBox';

function ServiceMain() {
    useEffect(() => {
        const script = document.createElement("script");
        document.head.appendChild(script);
        script.src = '../../assets/styles/dist/skeletabs.min.js';
        script.async = true;
        // script.onload = () => runScript();
    }, [])
    return (
        <div className="page-wrapper">
            <section class="inner_service_section">
                <div class="container">
                    <div class="col-md-12">
                        <div id="skltbsResponsive" class="skltbs">
                            <HeaderTabList />
                            <div class="skltbs-panel-group">
                                <TabPanel1 />
                                <TabPanel2 />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterTopBox />
        </div>

    )
}

export default ServiceMain
