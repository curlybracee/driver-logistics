import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTestimonials } from '../../redux/action';

const Testimonial = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // fetch(`${BASE_API}/testimonial`).then(res => res).then(res => {
        //     console.log({ res });
        // }).catch(err => {
        //     console.log({ err });
        // })
        dispatch(fetchTestimonials())
    }, [])
    return (
        <section class="testimmonial_section wow fadeInUp" data-wow-delay="1s">
            <div class="container">
                <div class="col-md-12">
                    <div class="home_testi_bg">
                        <div class="home_testimonial_title">TESTIMONIALS</div>

                        <p>
                            ""They have ensured seamless operations. Process oriented and
                            flexible and agile. In this pandemic time they have right sized
                            the operations and shown the cost optimization. Being
                            enthusiastic and agile their operational flexibility is their
                            USP. Good at handling any seasonal spikes. They are constantly
                            striving to serve better with the technology like data
                            analytics, and ML, AI.""
                        </p>

                        <div className="home_testimonial_smalltitle">
                            Rineesh PM - Cluster Head Supply Chain, Nestlé
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
