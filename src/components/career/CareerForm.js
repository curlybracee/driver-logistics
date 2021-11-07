import React from "react";

const CareerForm = () => {
    return (
        <section class="career_form_section wow fadeInUp" data-wow-delay="1s">
            <div class="container">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form_outer">
                                <h2>POST YOUR RESUME</h2>

                                <form action="#">
                                    <div class="form-group">
                                        <label for="email">Name</label>
                                        <input type="name" class="form-control" id="name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Email ID</label>
                                        <input type="email" class="form-control" id="email" />
                                    </div>
                                    <div class="form-group">
                                        <div class="labelpadding">
                                            <label for="pwd">Contact number</label>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-3 col-sm-12 labelpadding labelpaddingleft labelpaddingright">
                                                <input type="name" class="form-control" id="name" />
                                            </div>

                                            <div class="col-md-9 col-sm-12 labelpaddingleft labelpaddingright">
                                                <input type="name" class="form-control" id="name" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">Resume</label>
                                        <input type="file" class="form-control" id="text" />
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
