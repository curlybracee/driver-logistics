import React from "react";
import { Container } from "react-bootstrap";

const BelowService = () => {
    return (
        <section style={{
            width: '100%',
            background: 'none',
            paddingTop: '50px',
            paddingBottom:'30px',
            position: 'relative',
            zIndex: '1',
            textAlign: 'center'
        }}>
            <Container className="container">
                <div className="service_contantbox_outer">
                    <div className="service_box service_img_right">
                        <h3 style={{
                            textAlign: 'center',
                            width: '100%',
                            paddingLeft: '40px',
                            paddingRight: '40px',
                            marginBottom: '20px',
                            fontFamily: 'sans-serif'}}>
                            Best in Class Logistics Company in Kochi,Kerala<br /> with Pan India
                            Presence
                        </h3>
                        <h4>
                            Kerala’s leading logistics company for comprehensive 3PL services.
                        </h4>
                        <p>
                            Driver Logistics gained a paramount name among logistics companies in Kerala by delivering outright and customised logistics and warehouse solutions for clients, enabling them to save on time and cost.

                            The services offered by Driver Logistics, one of the best logistics companies in Kerala, are Inventory Management, Manpower Management, Asset Management, Fleet Management, and more!
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BelowService;
