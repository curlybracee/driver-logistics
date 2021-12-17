import { map } from 'jquery';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


const BlogSections = () => {
    const { data } = useSelector(state => state.userLog.blogs)

    useEffect(() => {
        const rowData = {};
        data?.data.forEach(element => {
            if (element.count < 3) {

            }

        });

    }, [data])
    console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ', data)

    return (
        <section class="inner_blog_contantbox">

            <div class="container">

                <div class="col-md-12">
                    <div class='row'>

                        {data?.data?.map(item => <div class="col-md-4 wow fadeInUp" data-wow-delay="1s">

                            <div class="blog_newbox">

                                <img alt='' src="img/blog_box_img_1.png" class="image_new" />
                                <div class="overlay_one">
                                </div>
                                <div class="blog_auther"><img alt='' src="img/auther_img.png" /> <span>Surya Gopal</span></div>
                                <div class="clearfix"></div>
                                <div class="blog_title"><a href="blog-details.html">Triple Bottom Line: The Yardstick
                                To Measure Sustainability
                                        In The Supply Chain</a></div>

                                <p>People, planet and profit are the three
                                driving forces that keep your supply
                                    chain stable and organized. Building</p>

                                <div class="blog_datebox">21 July 2021 | 3 mins<a href="blog-details.html"><img
                                    alt='' src="img/blog_icon_1.png" /></a><a href="#"><img
                                        alt='' src="img/blog_icon_2.png" /></a></div>
                                <div class="clearfix"></div>

                                <div class="blog_readmore"><a href="blog-details.html"
                                    class="theme-btn-three btn-style-three"><span class="btn-title-three">Read
                                            More</span></a></div>

                            </div>

                        </div>
                        )
                        }

                    </div>
                </div>

            </div>

        </section>
    )
}

export default BlogSections
