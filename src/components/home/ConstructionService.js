import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ServiceConstructionImg } from '../../assets/images'

const ConstructionService = () => {
    return (
        <section className="service_section_outer_two">
            <Container className="container">
                <div className="service_contantbox_outer">
                    <Row className="row">
                        <Col md={6}
                            className="col-md-6 new_class_one new_class_one wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            <div className="service_box service_img_left">
                                <div className="service_box_title">3PL-Consultation</div>

                                <ul>
                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>Solutionize
                                        end to end Supply requirement.
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>ROI
                                        analysis for latest technological implementations.
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>Big Data
                                        analysis, Volume projection and trend mapping
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
                                <img src={ServiceConstructionImg} alt='' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default ConstructionService
