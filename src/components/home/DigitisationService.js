import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ServiceDigitisationImg } from '../../assets/images'

const DigitisationService = () => {
    return (
        <section className="service_section_outer_three">
            <Container className="container">
                <div className="service_contantbox_outer">
                    <Row className="row row_reverse_new">
                        <Col md={6}
                            className="col-md-6 new_class_one new_class_one wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            <div className="service_box service_img_right">
                                <div className="service_box_title">
                                    Digitisation & Business<br />
                                    Intelligence
                                </div>

                                <ul>
                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>Cloud based
                                        software monitored fleet Management
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>Real time
                                        MIS reports using API
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>e-PODS and
                                        real time delivery updates via SMS
                                    </li>
                                </ul>

                                <div className="service_readmore">
                                    <a href="about-us.html" className="theme-btn-two btn-style-two"
                                    ><span className="btn-title-two">Read More</span></a
                                    >
                                </div>
                            </div>
                        </Col>

                        <Col md={6}
                            className="col-md-6 new_class_one wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            <div className="service_imagepart service_img_left">
                                <img src={ServiceDigitisationImg} alt='' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default DigitisationService
