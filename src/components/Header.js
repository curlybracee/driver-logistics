import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MainLogo } from '../assets/images'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Header = () => {
    const { pathname } = useLocation()
    const matches840 = useMediaQuery('(max-width:840px)');

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.screen.width > 758) {
            setIsMobile(false)
        }
    }, [window.screen])
    const [active, setActive] = useState({
        home: false,
        about_us: false,
        services: false,
        clientele: false,
        career: false,
        blog: false,
        contact: false,
    })
    useEffect(() => {
        switch (pathname) {
            case '/': setActive({ home: true }); break;
            case '/about-us': setActive({ about_us: true }); break;
            case '/services': setActive({ services: true }); break;
            case '/clientele': setActive({ clientele: true }); break;
            case '/career': setActive({ career: true }); break;
            case '/blog': setActive({ blog: true }); break;
            case '/contact': setActive({ contact: true }); break;
            default: setActive({ home: true })
        }
    }, [pathname])
    return (
        <section className='header_section'>
            <Container className='headerContainer'>
                <Col md={12}>
                    <div className="header_outer">
                        <Col md={3}>
                            <div className="main_logo">
                                <Link to="/">
                                    <img
                                        src={MainLogo}
                                        alt="Driver Logistics"
                                        title="Driver Logistics"
                                    />
                                </Link>
                            </div>
                        </Col>
                        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                            {
                                isMobile ? (
                                    <i className='fa fa-times'></i>
                                ) : <i className='fa fa-bars'></i>
                            }
                        </button>
                        <Col md={9} style={{ flex: 1 }}>
                            <div className="menupart">
                                <div id="main-nav" style={{ whiteSpace: 'nowrap' }}>
                                    <ul onClick={() => setIsMobile(false)} className={matches840 && isMobile ? "stellarnav-mobile" : "stellarnav"}>
                                        <li className={clsx(active.home && 'menu_active')}><Link to="/">
                                            <FontAwesomeIcon icon={faHome} size="1x" />  </Link></li>
                                        <li className={clsx(active.about_us && 'menu_active')}><Link to="/about-us">About Us</Link></li>
                                        <li className={clsx(active.services && 'menu_active')}><Link to="/services">Services</Link></li>
                                        <li className={clsx(active.clientele && 'menu_active')}><Link to="/clientele">Clientele</Link></li>
                                        <li className={clsx(active.career && 'menu_active')}><Link to="/career">Career</Link></li>
                                        <li className={clsx(active.blog && 'menu_active')}><Link to="/blog">Blog</Link></li>
                                        <li className={clsx(active.blog && 'menu_active')}><Link to="/blog">News</Link></li>
                                        <li className={clsx(active.blog && 'menu_active')}><Link to="/">Case Studies</Link></li>
                                        <li className={clsx(active.blog && 'menu_active')}><Link to="/">News Letters</Link></li>
                                        <li className={clsx(active.contact && 'menu_active')}><Link to="/contact">Contact</Link></li>
                                    </ul>


                                </div>
                            </div>
                        </Col>
                    </div>
                </Col>
            </Container>
        </section >
    )
}

export default Header
