import React from "react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { postResume } from '../../redux/action';

const CareerForm = () => {
    const dispatch = useDispatch();
    const Formik = useFormik({
        initialValues: {
            email: "",
            name: '',
            numberCode: '',
            number: '',
            resume: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email()
                .required("Email is Required"),
            name: Yup.string()
                .required("Name is Required"),
            numberCode: Yup.string()
                .required("Code is Required"),
            number: Yup.string()
                .required("Number is Required"),
            resume: Yup.string()
                .required("Resume is Required"),
        }),
        onSubmit: (inputData) => {
            console.log('==============================================', inputData)
            dispatch(postResume(inputData))
        },

    })
    return (
        <section class="career_form_section wow fadeInUp" data-wow-delay="1s">
            <div class="container">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form_outer">
                                <h2>POST YOUR RESUME</h2>

                                <form onSubmit={Formik.handleSubmit}>
                                    <div class="form-group">
                                        <label for="email">Name</label>
                                        <input type="name" class="form-control" id="name" onChange={Formik.handleChange} />

                                        {Formik.errors.name && Formik.touched.name ? (
                                            <div className="formError">{Formik.errors.name}</div>
                                        ) : null}
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Email ID</label>
                                        <input type="email" class="form-control" id="email" onChange={Formik.handleChange} />

                                        {Formik.errors.email && Formik.touched.email ? (
                                            <div className="formError">{Formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div class="form-group">
                                        <div class="labelpadding">
                                            <label for="pwd">Contact number</label>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-3 col-sm-12 labelpadding labelpaddingleft labelpaddingright">
                                                <input type="number" class="form-control" id="numberCode" onChange={Formik.handleChange} />

                                                {Formik.errors.numberCode && Formik.touched.numberCode ? (
                                                    <div className="formError">{Formik.errors.numberCode}</div>
                                                ) : null}
                                            </div>

                                            <div class="col-md-9 col-sm-12 labelpaddingleft labelpaddingright">
                                                <input type="number" class="form-control" id="number" onChange={Formik.handleChange} />

                                                {Formik.errors.number && Formik.touched.number ? (
                                                    <div className="formError">{Formik.errors.number}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">Resume</label>
                                        <input type="file" class="form-control" id="resume" onChange={Formik.handleChange} />

                                        {Formik.errors.resume && Formik.touched.resume ? (
                                            <div className="formError">{Formik.errors.resume}</div>
                                        ) : null}
                                    </div>

                                    <button type="submit" class="contact_button">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div class="col-md-6"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerForm;
