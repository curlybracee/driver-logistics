import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ServiceWareHouseImg } from '../../assets/images'

const WhareHouseService = () => {
    return (
        <section className="service_section_outer">
            <Container>
                <div className="service_contantbox_outer">
                    <h2 className="background double"><span>SERVICES</span></h2>
                    <Row className="row">
                        <Col
                            md={6}
                            className="col-md-6 new_class_one wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            <div className="service_box">
                                <div className="service_box_title">
                                    Warehouse<br />
                                    Management
                                </div>

                                <ul>
                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>Accurate
                                        maintenance of inventory in terms of quality as well as
                                        quantity
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>Proper
                                        storage / stacking goods
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>hygenic
                                        working environment in and around the warehouse.
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>optimum
                                        utilization of warehouse space and resources.
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>dynamic
                                        manpower planning to cater to altering customer
                                        requirements.
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>Efficient
                                        management of assets including but not limited to MHEs &
                                        IT infrastructure
                                    </li>

                                    <li>
                                        <i className="fa fa-circle" aria-hidden="true"></i>Value Added
                                        Services . Quality Check, Kitting, Replaceing , branding,
                                        Defective Liquidation.
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
                                <img src={ServiceWareHouseImg} alt='img' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default WhareHouseService
