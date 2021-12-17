import React from "react";
import { Col, Container } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';


const LogoSection = () => {
    const { data = [] } = useSelector(state => state.userLog.clients)

    return (

        <section className="clients_logo_outer">
            <Container >
                <Col md={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {data?.map(item => <Col md={3}>
                        <Fade bottom>
                            <div className="logo_box_clients">
                                <img alt='' src={item.photo} />
                            </div>
                        </Fade>
                    </Col>)}


                </Col>
            </Container>
        </section >
    );
};

export default LogoSection;
