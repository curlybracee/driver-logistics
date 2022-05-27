import React, { useEffect } from "react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import 'react-phone-number-input/style.css'
import { fetchDashboard, fetchOrderDetails, fetchOrders, loginUser } from "../../redux/action";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch()
    const { auth: { data = [] } } = useSelector(state => state.userLog)
    console.log({ data })
    const history = useHistory()
    const Formik = useFormik({
        initialValues: {
            user_name: '',
            password: '',
        },
        validationSchema: Yup.object({
            user_name: Yup.string()
                .required("Name is Required"),
            password: Yup.string()
                .required("password is required"),
        }),
        onSubmit: (inputData) => {
            console.log({ inputData })
            let obj = {}
            obj.UserName = inputData.user_name;
            obj.Password = inputData.password;
            dispatch(loginUser(obj))
        },

    });
 
    if (data.length > 0) {
        history.push('/dashboard')
    }
    return (
        <section className="inner_contact_section">
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="1s">
                            <h5>Login</h5>
                            <div className="form_outer">
                                <form onSubmit={Formik.handleSubmit}>
                                    <div class="form-group">
                                        <label for="user_name">Username</label>
                                        <input type="name" class="form-control text-transform-unset" id="user_name" onChange={Formik.handleChange} />

                                        {Formik.errors.user_name && Formik.touched.user_name ? (
                                            <div className="formError">{Formik.errors.user_name}</div>
                                        ) : null}
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control text-transform-unset" id="password" onChange={Formik.handleChange} />

                                        {Formik.errors.password && Formik.touched.password ? (
                                            <div className="formError">{Formik.errors.password}</div>
                                        ) : null}
                                    </div>
                                    <button type="submit" className="contact_button">
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
