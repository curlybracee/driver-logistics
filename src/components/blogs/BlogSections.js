import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import auther_img from '../../assets/images/auther_img.png'
import blogBox from '../../assets/images/blog_box_img_1.png'
import blogIcon1 from '../../assets/images/blog_icon_1.png'
import blogIcon2 from '../../assets/images/blog_icon_2.png'


const BlogSections = () => {
    const { data = {} } = useSelector(state => state.userLog.blogs)
const DATA=[1,11,7,1,1,1,1,1,1,1,8,1,1,1,8,1,1,1,1,9,1,1,1,1]
    return (
        <section class="inner_blog_contantbox">

            <div class="container">

                <div class="col-md-12">
                    <div class='row'>

                        {data?.data?.map((item,index) =>
                            <div class={`col-md-4 wow fadeInUp blogAlign-${index}`} data-wow-delay="1s">

                                <div class="blog_newbox">

                                    <img alt='' src={blogBox} class="image_new" />
                                    <div class="overlay_one">
                                    </div>
                                    <div class="blog_auther"><img alt='' src={auther_img} /> <span>{item.posted_by}</span></div>
                                    <div class="clearfix"></div>
                                    <div class="blog_title"><a href="blog-details.html">{item.title}</a></div>

                                    
                                    <div dangerouslySetInnerHTML={{__html:item.description}} style={{fontSize:'14px'}}></div>

                                    <div class="blog_datebox">{item.updated_at}<a href="blog-details.html"><img
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
