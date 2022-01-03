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

                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="services.html">Services</a></li>

                                        <li><a href="career.html">Career</a></li>
                                        <li><a href="blog.html">Blog</a></li>


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

                        <div class="footer_form">

                            <form onSubmit={Formik.handleSubmit}>
                                <Grid container>
                                    <Grid md={10} sm={12}>
                                        <input type="text" id='email' style={{ height: '80%', marginTop: '8px' }} name="email" placeholder=""
                                            onChange={Formik.handleChange}
                                        />

                                        {Formik.errors.email && Formik.touched.email ? (
                                            <div className="formError">{Formik.errors.email}</div>
                                        ) : null}
                                    </Grid>
                                    <Grid md={2} sm={12}>
                                        <button type="submit" class=" btn-default" >Send</button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>

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

            </div>

        </section>
    )
}
export default Footer
