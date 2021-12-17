import React, { useEffect } from 'react'
import ReactOwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux';


const Testimonial = () => {
    const { data = [] } = useSelector(state => state.userLog.testimonials)
    console.log({ data });
    useEffect(() => {

    }, [data])
    return data.length > 0 && (
        <section class="testimmonial_section wow fadeInUp" data-wow-delay="1s">
            <div class="container">
                <div class="col-xs-12">
                    <ReactOwlCarousel
                        items={1}
                        dots={false}
                        rewind={false}
                        autoplay={true}
                        autoplayTimeout={5000}
                        className='owl-theme' loop={true} margin={10}>
                        {data.map(item => <div class="col-md-12" style={{ width: '100%' }}>
                            <div class="home_testi_bg">
                                <div class="home_testimonial_title">TESTIMONIALS</div>
                                <p>
                                    {item.description}
                                </p>
                                <div className="home_testimonial_smalltitle">
                                    {item.title} - {item.designation}
                                </div>
                            </div>
                        </div>
                        )
                        }
                    </ReactOwlCarousel>
                </div>
            </div>
        </section >
    )
}

export default Testimonial
