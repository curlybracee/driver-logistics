import React from 'react';
import HeaderTabList from './HeaderTabList';
import FooterTopBox from '../common/FooterTopBox';
import Fade from 'react-reveal/Fade';


function ServiceMain() {

    return (
        <div className="page-wrapper">
            <section className="inner_service_section">
                <div className="container">
                    <div className="col-md-12">
                        <HeaderTabList />
                    </div>
                </div>
            </section>
            <Fade bottom>
                <FooterTopBox />
            </Fade>
        </div>


    )


}

export default ServiceMain
