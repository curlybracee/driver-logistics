import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { postLogin, getLogin } from '../../redux/action';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { LoginSideImg } from '../../assets/images'

const LoginForm = () => {
    const dispatch = useDispatch();
    const Formik = useFormik({
        initialValues: {
            name: "",
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Username is Required"),
            password: Yup.string()
                .required("Password is Required"),

        }),
        onSubmit: (inputData) => {
            const { name, password } = inputData;
            let objToSend = {
                UserName: name,
                Password: password
            }

            dispatch(postLogin(objToSend))
        },

    })



    return (
        <div>
            <section class="inner_career_section">
                <section class="career_form_section wow fadeInUp" data-wow-delay="1s">
                    <div class="container">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <img src={LoginSideImg}></img>
                                </div>
                                <div class="col-md-6">
                                    <div class="form_outer loginfrm1">
                                        <h2>Login</h2>

                                        <form onSubmit={Formik.handleSubmit}>
                                            <div class="form-group">
                                                <label for="pwd">Username</label>
                                                <input type="name" class="form-control" id="name" onChange={Formik.handleChange} />

                                                {Formik.errors.name && Formik.touched.name ? (
                                                    <div className="formError">{Formik.errors.name}</div>
                                                ) : null}
                                            </div>
                                            <div class="form-group">
                                                <label for="email">Password</label>
                                                <input type="password" class="form-control" id="password" onChange={Formik.handleChange} />

                                                {Formik.errors.password && Formik.touched.password ? (
                                                    <div className="formError">{Formik.errors.password}</div>
                                                ) : null}
                                            </div>


                                            <button type="submit" class="contact_button" style={{ width: '100%' }}>
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default LoginForm;
