import React from "react";
import { Col, Container } from "react-bootstrap";
import * as ClientImage from '../../assets/images/clients'
import Fade from 'react-reveal/Fade'

const LogoSection = () => {
    return (
        <section className="clients_logo_outer">
            <Container >
                <Col md={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Col md={3}>
                        <Fade bottom>
                            <div className="logo_box_clients">
                                <img alt='' src={ClientImage.Clients_1} />
                            </div>
                        </Fade>
                    </Col>
                    <Col md={3}>
                        <Fade bottom>
                            <div className="logo_box_clients">
                                <img alt='' src={ClientImage.Clients_1} />
                            </div>
                        </Fade>
                    </Col>
                    <Col md={3}>
                        <Fade bottom>
                            <div className="logo_box_clients">
                                <img alt='' src={ClientImage.Clients_3} />
                            </div>
                        </Fade>
                    </Col>
                    <Col md={3}>
                        <Fade bottom>
                            <div className="logo_box_clients">
                                <img alt='' src={ClientImage.Clients_4} />
                            </div>
                        </Fade>
                    </Col>
                    <Col md={3} >
                        <Fade bottom>
                            <div className="logo_box_clients">
                                <img alt='' src={ClientImage.Clients_5} />
                            </div>
                        </Fade>
                    </Col>

                    <Col md={3} >
                        <Fade bottom>

                            <div className="logo_box_clients">
                                <img alt='' src={ClientImage.Clients_6} />
                            </div>
                        </Fade>
                    </Col>

                    <Col md={3} >
                        <Fade bottom>
                            <div className="logo_box_clients">
                                <img alt='' src={ClientImage.Clients_7} />
                            </div>
                        </Fade>
                    </Col>

                    <Col md={3} >
                        <Fade bottom>
                            <div className="logo_box_clients">
                                <img alt='' src={ClientImage.Clients_8} />
                            </div>
                        </Fade>
                    </Col>

                    <Col md={3} >
                        <Fade bottom>
                            <div className="logo_box_clients">
                                <img alt='' src={ClientImage.Clients_9} />
                            </div>
                        </Fade>
                    </Col>

                    <Col md={3} >
                        <Fade bottom>
                            <div className="logo_box_clients">
                                <img alt='' src={ClientImage.Clients_10} />
                            </div>
                        </Fade>
                    </Col>

                    <Col md={3} >
                        <Fade bottom>
                            <div className="logo_box_clients">
                                <img alt='' src={ClientImage.Clients_11} />
                            </div>
                        </Fade>
                    </Col>
                </Col>
            </Container>
        </section >
    );
};

export default LogoSection;
