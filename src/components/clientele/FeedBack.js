import React, { useEffect } from "react";
import * as TestImages from '../../assets/images/testimonials'
import Fade from 'react-reveal/Fade'
import { useSelector } from 'react-redux'


const FeedBack = () => {
    const { data = [] } = useSelector(state => state.userLog.clients)
    let result = [];

    function chunkArray(myArray, chunk_size) {
        var index = 0;
        var arrayLength = myArray.length;
        var tempArray = [];

        for (index = 0; index < arrayLength; index += chunk_size) {
            let myChunk = myArray.slice(index, index + chunk_size);
            // Do something if you want with the group
            tempArray.push(myChunk);
        }

        return tempArray;
    }
    useEffect(() => {

    }, [data])

    return (
        <section class="inner_testimonials_outer">
            <div class="container">
                <div class="col-md-12">
                    <h1>WHAT OUR CUSTOMERS SAYS ABOUT US</h1>

                    {chunkArray(data, 2).map(e => (
                        < div class="row">

                            { e.map(element => (
                                <div class="col-md-6 wow fadeInUp" data-wow-delay="1s">
                                    <div class="testimonial_contantbox">

                                        <div class="testimonial_icon"><img alt='img' src={TestImages.Testimonial_icon}></img></div>

                                    </div>

                                    <div class="testi_new_box">

                                        <span class="testi_left_imagebox">
                                            <img alt='img' src={element.photo}></img>
                                            <h2>
                                                <strong>{element.name}</strong>
                                                <br />
                                                {element.type}
                                            </h2>

                                        </span>

                                        <div class="testi_right_contant">"They have ensured seamless
                                        operations. Process oriented and
                                        flexible and agile. In this pandemic
                                        time they have right sized the
                                        operations and shown the cost
                                        optimization. Being enthusiastic
                                        and agile their operational
                                        flexibility is their USP. Good at
                                        handling any seasonal spikes. They
                                        are constantly striving to serve
                                        better with the technology like
                                    data analytics, and ML, AI."</div>

                                    </div>

                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default FeedBack;
