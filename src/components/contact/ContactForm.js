import React from "react";
import { LocationIco, MailIco, PhoneIco } from "../../assets/images";
import Fade from 'react-reveal/Fade';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { postContactForm } from "../../redux/action";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
// import { postSubscription } from '../redux/action';

const ContactForm = () => {
    const [value, setValue] = React.useState('')
    const dispatch = useDispatch()
    const Formik = useFormik({
        initialValues: {
            email: "",
            name: '',
            numberCode: '',
            number: '',
            message: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email()
                .required("Email is Required"),
            name: Yup.string()
                .required("Name is Required"),
            number: Yup.string()
                .required("Number is Required").test('isPossible', 'not valid',
                function (val){
                   return val?(isValidPhoneNumber(val)?true:false):true
                }),
            company: Yup.string()
                .required("company is Required"),
            query: Yup.string()
                .required("query is Required"),
        }),
        onSubmit: (inputData) => {
            let objToSend = {
                ...inputData,
                phone: inputData.numberCode + inputData.number,
                message: inputData.query
            }
            delete objToSend.number
            delete objToSend.numberCode
            delete objToSend.query

            dispatch(postContactForm(objToSend))
        },
        // "name": "Priyesh",
        // "email": "priyeshk00@gmail.com",
        // "message": "Hi test message",
        // "subject": "New Enquiry",
        // "phone": "9847139911",
    })
    return (
        <section className="contact_form_section">
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="1s">
                            <div className="form_outer">
                                <form onSubmit={Formik.handleSubmit}>
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="name" class="form-control" id="name" onChange={Formik.handleChange} />

                                        {Formik.errors.name && Formik.touched.name ? (
                                            <div className="formError">{Formik.errors.name}</div>
                                        ) : null}
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email ID</label>
                                        <input type="email" class="form-control" id="email" onChange={Formik.handleChange} />

                                        {Formik.errors.email && Formik.touched.email ? (
                                            <div className="formError">{Formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div class="form-group">
                                        <label for="company">Company</label>
                                        <input type="company" class="form-control" id="company" onChange={Formik.handleChange} />

                                        {Formik.errors.company && Formik.touched.company ? (
                                            <div className="formError">{Formik.errors.company}</div>
                                        ) : null}
                                    </div>

                                    <div class="form-group">
                                        <div class="labelpadding">

                                            <label for="numberCode">Contact number</label>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-12 labelpadding labelpaddingleft labelpaddingright">
                                                {/* <input type="number" class="form-control" id="numberCode" onChange={Formik.handleChange} /> */}
                                                <PhoneInput
                                                    defaultCountry="IN"
                                                    placeholder="Enter phone number"
                                                    value={value}
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

                                            {/* <div class="col-md-9 col-sm-12 labelpaddingleft labelpaddingright">
                                                <input type="number" class="form-control" id="number" onChange={Formik.handleChange} />

                                                {Formik.errors.number && Formik.touched.number ? (
                                                    <div className="formError">{Formik.errors.number}</div>
                                                ) : null}
                                            </div> */}
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label for="query">Your Query</label>
                                        <textarea
                                            className="form-control b12"

                                            id="query"
                                            rows="3"
                                            onChange={Formik.handleChange}
                                        ></textarea>
                                        {Formik.errors.query && Formik.touched.query ? (
                                            <div className="formError">{Formik.errors.query}</div>
                                        ) : null}
                                    </div>

                                    <button type="submit" className="contact_button">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6 wow fadeInUp" data-wow-delay="2s">
                            <Fade bottom>
                                <div className="contact_address">
                                    <h1>Contact Details</h1>

                                    <ul>
                                        <li>
                                            <img src={LocationIco} alt='' />
                                            University Road, CUSAT PO, Kochi,
                                            <br />
                                            Kerala, India - 682022
                                        </li>

                                        <li>
                                            <img src={MailIco} alt='' />
                                            <a href="mailto:info@driverlogistics.in">
                                                info @driverlogistics.in
                                            </a>
                                        </li>

                                        <li>
                                            <img src={PhoneIco} alt='' />
                                            <a href="tel:+914842544002">+91 484 254 4002</a>
                                        </li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
