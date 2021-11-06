import React from "react";
import { LocationIco, MailIco, PhoneIco } from "../../assets/images";
import Fade from 'react-reveal/Fade';

const ContactForm = () => {
    return (
        <section className="contact_form_section">
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="1s">
                            <div className="form_outer">
                                <form action="#">
                                    <div className="form-group">
                                        <label for="email">Name</label>
                                        <input type="name" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Email ID</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>

                                    <div className="form-group">
                                        <div className="labelpadding">
                                            <label for="pwd">Contact number</label>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-3 col-sm-12 labelpadding labelpaddingleft labelpaddingright">
                                                <input type="name" className="form-control" id="name" />
                                            </div>

                                            <div className="col-md-9 col-sm-12 labelpaddingleft labelpaddingright">
                                                <input type="name" className="form-control" id="name" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label for="pwd">Company</label>
                                        <input type="password" className="form-control" id="text" />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Your Query</label>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                        ></textarea>
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
