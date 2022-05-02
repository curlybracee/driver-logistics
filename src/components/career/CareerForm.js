import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { postResume } from '../../redux/action';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const CareerForm = () => {
    const dispatch = useDispatch();
    const [resume, setResume] = useState(null)
    const Formik = useFormik({
        initialValues: {
            email: "",
            name: '',
            numberCode: '',
            number: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email()
                .required("Email is Required"),
            name: Yup.string()
                .required("Name is Required"),
            number: Yup.string()
                .required("Number is Required").test('isPossible', 'not valid',
                    function (val) {
                        return val ? (isValidPhoneNumber(val) ? true : false) : true
                    }),
        }),
        onSubmit: (inputData) => {
            const { name, email, numberCode, number } = inputData;
            let objToSend = {
                name,
                emailid: email,
                phoneno: `${numberCode}${number}`,
                resume
            }
            dispatch(postResume(objToSend))
        },

    })

    // "name": "Priyesh",
    // "emailid": "priyesh@burgeontech.com",
    // "resume": "http://besterpsolution.in/demo/driver_logistics/public/resumes/1642036913.png",
    // "phoneno": "9847139911",
    // "updated_at": "2022-01-13T01:21:53.000000Z",
    // "created_at": "2022-01-13T01:21:53.000000Z",
    // "id": 5
    const handleFileChange = (event) => {
        setResume(event.currentTarget.files[0]);
    }
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
                                            <div class="col-sm-12 labelpadding labelpaddingleft labelpaddingright">
                                                {/* <input type="number" class="form-control" id="numberCode" onChange={Formik.handleChange} /> */}
                                                <PhoneInput
                                                    defaultCountry="IN"
                                                    placeholder="Enter phone number"
                                                    international
                                                    countryCallingCodeEditable={false}
                                                    id='number'
                                                    onChange={(val) => Formik.setFieldValue('number', val)}
                                                // error={value ? (isPossiblePhoneNumber(value) ? value : 'Invalid phone number') : 'Phone number required'}
                                                />
                                                {Formik.errors.number && Formik.touched.number ? (
                                                    <div className="formError">{Formik.errors.number}</div>
                                                ) : null}
                                            </div>
                                            {/* <div class="col-md-3 col-sm-12 labelpadding labelpaddingleft labelpaddingright">
                                                <input type="number" class="form-control" id="numberCode" maxLength={4} onChange={Formik.handleChange} />

                                                {Formik.errors.numberCode && Formik.touched.numberCode ? (
                                                    <div className="formError">{Formik.errors.numberCode}</div>
                                                ) : null}
                                            </div>

                                            <div class="col-md-9 col-sm-12 labelpaddingleft labelpaddingright">
                                                <input type="number" class="form-control" id="number" maxLength={10} onChange={Formik.handleChange} />

                                                {Formik.errors.number && Formik.touched.number ? (
                                                    <div className="formError">{Formik.errors.number}</div>
                                                ) : null}
                                            </div> */}
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">Resume</label>
                                        <input type="file" class="form-control" id="resume" onChange={handleFileChange} />
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
