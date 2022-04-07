import React, { useEffect, useState } from 'react'
import author_img from '../../assets/images/auther_img.png'
import blogDetail from '../../assets/images/blog_detail_img.png'
import recentImg from '../../assets/images/recent_img_1.png'
import blogImg from '../../assets/images/blog_img.png'
import Fade from 'react-reveal/Fade'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { formatDate } from '../../assets/constants'
import { fetchBlogById, fetchBlogs } from '../../redux/action'
import Loader from '../Loader'


const BlogDetails = () => {
    const { id } = useParams()
    const { data:  blogDetails = {},requestInProgress} = useSelector(state => state.userLog.blogById)
    const { data: {data:blogs=[]}} = useSelector(state => state.userLog.blogs)
    const dispatch = useDispatch()
    useEffect(() => {
        // let tempData = blogDetails.filter(item => Number(id) === item.id)
        // setblogDetails(tempData[0])
        dispatch(fetchBlogById({id}))
        dispatch(fetchBlogs({ page:0 }))
    }, [id])
    return requestInProgress?<Loader/>:(
        <Fade bottom>

            <div>
                <section class="blog_details_outer">

                    <div class="container">

                        <div class="col-md-12">

                            <div class="row">

                                <div class="col-md-8">

                                    <div class="blog_contant_left_outer">

                                        <div class="blog_details_auther"><img src={author_img} alt='' />

                                            <div className="blog_span_outer"><span>{blogDetails?.posted_by}</span>
                                                <span>{formatDate(blogDetails?.updated_at)}</span>
                                                <span
                                                    class="right_border"> {blogDetails?.readingtime}</span>
                                            </div>

                                            <div className="clearfix"></div>
                                            <h1 style={{marginTop:'20px'}}>{blogDetails?.title}</h1>

                                        </div>
                                        <div class="blog_details_imgbox">
                                            <img src={blogDetails?.image} alt='' />
                                        </div>

                                        <div dangerouslySetInnerHTML={{ __html: blogDetails?.description }} style={{ fontSize: '14px' }}>

                                        </div>

                                    </div>

                                </div>

                                <div class="col-md-4">

                                    <div class="blog_rightpart">

                                        <h1>Recent Blogs</h1>

                                        {blogs.map((item) => {
                                            if (item.id !== Number(id))
                                                return <Link to={`/blog/details/${item.id}`}> <div class="resent_blog_box">

                                                    <div class="resent_image"><img src={recentImg} alt='' /></div>
                                                    <div class="resent_contantbox">
                                                        <p><strong>{item?.title}</strong></p>

                                                        <div class="resent_contantbox_span_outer">
                                                            <span>{item?.posted_by}</span>
                                                            <span>{formatDate(blogs?.updated_at)}</span>

                                                        </div>

                                                    </div>

                                                </div></Link>
                                        })
                                        }
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
