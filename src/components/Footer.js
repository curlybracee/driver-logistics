import React from 'react';
import footerLogo from '../assets/images/footer_logo.png';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { postSubscription } from '../redux/action';

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



                        <div class="col-md-12">


                            <div class="footer_form">

                                <form onSubmit={Formik.handleSubmit} action="#" method="Post">
                                    <input type="text" id='email' name="email" placeholder="" onChange={Formik.handleChange} />
                                    {Formik.errors.email && Formik.touched.email ? (
                                        <div className="formError">{Formik.errors.email}</div>
                                    ) : null}

                                    <button type="submit" class="btn btn-default">Send</button>
                                </form>
                            </div>




                        </div>

                        <div class="copyright_outer">
                            <div class="col-md-6">

                                <p>Copyright © Driver Logistics 2021.All right reserved</p>
                            </div>

                            <div class="col-md-6">

                                <div class="footer_rightpart">

                                    <div class="dlab-topbar-right">
                                        <ul class="dlab-social-icon">



                                            <li><a class="fa fa-instagram" href="#"></a></li>
                                            <li><a class="fa fa-facebook" href="#"></a></li>
                                            <li><a class="fa fa-linkedin" href="#"></a></li>
                                            <li><a class="fa fa-envelope" href="#"></a></li>
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
