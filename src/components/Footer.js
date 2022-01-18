import React from 'react';
import footerLogo from '../assets/images/footer_logo.png';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { postSubscription } from '../redux/action';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Grid } from '@material-ui/core';

const Footer = () => {
    const dispatch = useDispatch()
    const Formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email()
                .required("email is Required"),
        }),
        onSubmit: (inputData) => {
            const { email } = inputData;
            dispatch(postSubscription(email))
        },

    })

    return (

        <section class="footer_section inner_footer_top">

            <div class="container">

                <div class="col-md-12">

                    <div class="row">

                        <div class="col-md-3">

                            <div class="footer_logo">
                                <img src={footerLogo} />
                            </div>

                            <p>Driver Logistics has a mission
                                to be the supply chain
                                extension of the most
                                successful companies in the</p>

                        </div>

                        <div class="col-md-3">

                            <div class="footer_menu_outer">

                                <div class="footer_small_title">QUICK LINKS</div>

                                <div class="footer_menu">

                                    <ul>

                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about-us">About Us</Link></li>
                                        <li ><Link to="/services">Services</Link></li>
                                        <li ><Link to="/clientele">Clientele</Link></li>
                                        <li ><Link to="/career">Career</Link></li>
                                        <li ><Link to="/blog">Blog</Link></li>
                                    </ul>

                                </div>
                            </div>

                        </div>

                        <div class="col-md-3">



                            <div class="footer_small_title">CONTACT</div>

                            <p>University Road, CUSAT
                                PO, Kochi, Kerala, India -
                                682022
                                <a href="mailto:info@driverlogistics.in">info@driverlogistics.in</a>
                            </p>


                        </div>

                        <div class="col-md-3">
                            <div class="footer_small_title">SUBSCRIBE</div>
                            <p>We understand your
                                business and your
                                passion to drive it forward.</p>

                        </div>

                        <form onSubmit={Formik.handleSubmit} class="footer_form col-md-5">
                            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                                <Grid item md={9} xs={7}>
                                    <input type="text" id='email' style={{ width: '100%', height: '80%', marginTop: '8px', fontSize: 16 }} name="email" placeholder=""
                                        onChange={Formik.handleChange}
                                    />

                                    {Formik.errors.email && Formik.touched.email ? (
                                        <div className="formError">{Formik.errors.email}</div>
                                    ) : null}
                                </Grid>
                                <Grid item md={3} xs={5}>
                                    <button type="submit" class="btn-default" style={{ width: '100%', borderColor: 'transparent' }} >Send</button>
                                </Grid>
                            </Grid>
                        </form>


                        <div style={{ marginTop: '45px' }} >
                            <div class="col-md-6">

                                <p>Copyright © Driver Logistics 2021.All right reserved</p>
                            </div>

                            <div class="col-md-6">

                                <div class="footer_rightpart">

                                    <div class="dlab-topbar-right">
                                        <ul>

                                            <li class="dlab-social-icon"><Link href="#"> <FontAwesomeIcon icon={faEnvelope} size="1x" />  </Link></li>

                                            <li class="dlab-social-icon"><Link href="#"> <FontAwesomeIcon icon={faInstagram} size="1x" /> </Link></li>
                                            <li class="dlab-social-icon"><Link href="#"> <FontAwesomeIcon icon={faFacebookF} size="1x" /> </Link></li>
                                            <li class="dlab-social-icon"><Link href="#"> <FontAwesomeIcon icon={faLinkedinIn} size="1x" /> </Link></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div >

        </section >
    )
}
export default Footer
