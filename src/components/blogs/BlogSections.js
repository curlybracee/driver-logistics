import React from 'react';
import { useSelector } from 'react-redux';
import auther_img from '../../assets/images/auther_img.png'
import blogBox from '../../assets/images/blog_box_img_1.png'
import blogIcon1 from '../../assets/images/blog_icon_1.png'
import blogIcon2 from '../../assets/images/blog_icon_2.png'


const BlogSections = () => {
    const { data = {} } = useSelector(state => state.userLog.blogs)

    return (
        <section class="inner_blog_contantbox">

            <div class="container">

                <div class="col-md-12">
                    <div class='row'>

                        {data?.data?.map(item =>
                            <div class="col-md-4 wow fadeInUp" data-wow-delay="1s">

                                <div class="blog_newbox">

                                    <img alt='' src={blogBox} class="image_new" />
                                    <div class="overlay_one">
                                    </div>
                                    <div class="blog_auther"><img alt='' src={auther_img} /> <span>Surya Gopal</span></div>
                                    <div class="clearfix"></div>
                                    <div class="blog_title"><a href="blog-details.html">Triple Bottom Line: The Yardstick
                                    To Measure Sustainability
                                    In The Supply Chain</a></div>

                                    <p>People, planet and profit are the three
                                    driving forces that keep your supply
                                    chain stable and organized. Building</p>

                                    <div class="blog_datebox">21 July 2021 | 3 mins<a href="blog-details.html"><img
                                        alt='' src={blogIcon1} /></a><a href="#"><img
                                            alt='' src={blogIcon2} /></a></div>
                                    <div class="clearfix"></div>

                                    <div class="blog_readmore"><a href="/blog/details"
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
