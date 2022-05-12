import React from "react";
import { Container } from "react-bootstrap";

const BelowService = () => {
    return (
        <section style={{
            width: '100%',
            background: 'none',
            paddingTop: '80px',
            paddingBottom: '80px',
            position: 'relative',
            zIndex: '1',
            textAlign: 'center'
        }}>
            <Container className="container">
                <div className="service_contantbox_outer">
                    <div className="service_box service_img_right">
                        <h1 style={{
                            textAlign: 'center',
                            width: '100%',
                            fontSize: '28px',
                            paddingLeft: '40px',
                            paddingRight: '40px',
                            lineHeight: '33px',
                            marginBottom: '20px',
                            fontWeight: '600',
                            fontFamily: 'sans-serif'}}>
                            Best in Class Logistics Company in Kochi,Kerala<br /> with Pan India
                            Presence
                        </h1>
                        <h3>
                            Kerala’s leading logistics company for comprehensive 3PL services.
                        </h3>
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
