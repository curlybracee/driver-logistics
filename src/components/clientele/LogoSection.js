import React from "react";
import { Col, Container } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';
import _ from 'lodash'

const LogoSection = () => {
    const { data :{data=[]}={} } = useSelector(state => _.get(state,'userLog.clients',{}))
    console.log({data});

    return (

        <section className="clients_logo_outer">
            <Container >
                <Col md={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {data?.map(item => <Col key={item.id} md={3}>
                        <Fade bottom>
                            <div className="logo_box_clients">
                                <img alt='' src={item.image} />
                            </div>
                        </Fade>
                    </Col>)}
                </Col>
            </Container>
        </section >
    );
};

export default LogoSection;
