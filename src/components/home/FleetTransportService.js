import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ServiceFleetImg } from '../../assets/images'

const FleetTransportService = () => {
    return (
        <section className="service_section_outer_one">
            <Container>
                <div className="service_contantbox_outer">
                    <Row className="row row_reverse_new">
                        <Col md={6}
                            className="col-md-6 new_class_one new_class_one wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            <div className="service_box service_img_right">
                                <div className="service_box_title">
                                    Fleet & Transportation<br />
                                    Management
                                </div>

                                <ul>
                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>Extensive
                                        own fleet network covering the most
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>Logistics
                                        partners as well as attached vehicle network spanning
                                        across the 5 south indian states
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>Secondary
                                        transportation from Distribution Centres to client channel
                                        partners as well as direct and coustomer delivery
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>Reverse
                                        Logistics from client channel partners and individual
                                        coustomers
                                    </li>
                                </ul>

                                <div className="service_readmore">
                                    <Link to="services" className="theme-btn-two btn-style-two"
                                    ><span className="btn-title-two">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}
                            className="col-md-6 new_class_one wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            <div className="service_imagepart service_img_right">
                                <img src={ServiceFleetImg} alt='' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default FleetTransportService
