import React, { useEffect, useState } from 'react'
import author_img from '../../assets/images/auther_img.png'
import blogDetail from '../../assets/images/blog_detail_img.png'
import recentImg from '../../assets/images/recent_img_1.png'
import blogImg from '../../assets/images/blog_img.png'
import Fade from 'react-reveal/Fade'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { formatDate } from '../../assets/constants'


const BlogDetails = () => {
    const {id}=useParams()
    const { data : {data:blogDetails=[]} } = useSelector(state => state.userLog.blogs)

    const [currentData,setCurrentData]=useState(blogDetails.filter(item=>id===item.id))
useEffect(() => {
    let tempData=blogDetails.filter(item=>Number(id)===item.id)
  setCurrentData(tempData[0])
}, [blogDetails])
console.log({blogDetails,currentData});
    return (
        <Fade bottom>

            <div>
                <section class="inner_blog_section">

                    <div class="container">

                        <div class="col-md-12">

                            <div class="row">

                                <div class="col-md-6 inner_blog_box wow fadeInUp" data-wow-delay="1s">

                                    <div class="">
                                        <h1>LOGISTICALLY<br /> <span class="banner_redfont">SPEAKING</span>
                                        </h1>

                                        <p>Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.
                                        Separated they live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean</p>

                                    </div>

                                </div>

                                <div class="col-md-6 inner_blog_box">

                                    <div class=" wow fadeInUp" data-wow-delay="1s">

                                        <img src={blogImg} alt='' />

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>

                </section>

                <section class="blog_details_outer">

                    <div class="container">

                        <div class="col-md-12">

                            <div class="row">

                                <div class="col-md-8">

                                    <div class="blog_contant_left_outer">

                                        <div class="blog_details_auther"><img src={author_img} alt='' />

                                            <div class="blog_span_outer"><span>{currentData?.posted_by}</span>
                                            <span>{formatDate(currentData?.updated_at)}</span>
                                            <span
                                                class="right_border">3 mins read</span></div>

                                            <h1>{currentData?.title}</h1>

                                        </div>

                                        <div class="blog_details_imgbox">
                                            <img src={currentData?.image} alt='' />
                                          </div>
<div dangerouslySetInnerHTML={{__html:currentData?.description}} style={{fontSize:'14px'}}>

</div>
                                        
                                    </div>

                                </div>

                                <div class="col-md-4">

                                    <div class="blog_rightpart">

                                        <h1>Recent Blogs</h1>

                                        <div class="resent_blog_box">

                                            <div class="resent_image"><img src={recentImg} alt='' /></div>
                                            <div class="resent_contantbox">
                                                <p><strong>Even the all-powerful Pointing
                                                has no control about the blind
                                                texts</strong></p>

                                                <div class="resent_contantbox_span_outer">
                                                    <span>Surya Gopal</span>
                                                    <span>21 July 2021</span>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="resent_blog_box">

                                            <div class="resent_image"><img src={recentImg} alt='' /></div>
                                            <div class="resent_contantbox">
                                                <p><strong>Even the all-powerful Pointing
                                                has no control about the blind
                                                texts</strong></p>

                                                <div class="resent_contantbox_span_outer">
                                                    <span>Surya Gopal</span>
                                                    <span>21 July 2021</span>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="resent_blog_box">

                                            <div class="resent_image"><img src={recentImg} alt='' /></div>
                                            <div class="resent_contantbox">
                                                <p><strong>Even the all-powerful Pointing
                                                has no control about the blind
                                                texts</strong></p>

                                                <div class="resent_contantbox_span_outer">
                                                    <span>Surya Gopal</span>
                                                    <span>21 July 2021</span>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="resent_blog_box">

                                            <div class="resent_image"><img src={recentImg} alt='' /></div>
                                            <div class="resent_contantbox">
                                                <p><strong>Even the all-powerful Pointing
                                                has no control about the blind
                                                texts</strong></p>

                                                <div class="resent_contantbox_span_outer">
                                                    <span>Surya Gopal</span>
                                                    <span>21 July 2021</span>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="resent_blog_box">

                                            <div class="resent_image"><img src={recentImg} alt='' /></div>
                                            <div class="resent_contantbox">
                                                <p><strong>Even the all-powerful Pointing
                                                has no control about the blind
                                                texts</strong></p>

                                                <div class="resent_contantbox_span_outer">
                                                    <span>Surya Gopal</span>
                                                    <span>21 July 2021</span>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="resent_blog_box">

                                            <div class="resent_image"><img src={recentImg} alt='' /></div>
                                            <div class="resent_contantbox">
                                                <p><strong>Even the all-powerful Pointing
                                                has no control about the blind
                                                texts</strong></p>

                                                <div class="resent_contantbox_span_outer">
                                                    <span>Surya Gopal</span>
                                                    <span>21 July 2021</span>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>



                        </div>
                    </div>

                </section>

            </div>
        </Fade>

    )
}

export default BlogDetails
