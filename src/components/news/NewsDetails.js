import React, { useEffect, useState } from 'react'
import author_img from '../../assets/images/auther_img.png'
import blogDetail from '../../assets/images/blog_detail_img.png'
import recentImg from '../../assets/images/recent_img_1.png'
import blogImg from '../../assets/images/blog_img.png'
import Fade from 'react-reveal/Fade'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { formatDate } from '../../assets/constants'
import { fetchNews, fetchNewsById } from '../../redux/action'
import Loader from '../Loader'

const BlogDetails = () => {
    const { id } = useParams()
    const { data: currentData={},requestInProgress } = useSelector(state => state.userLog.newsById)
    const { data: { data: newsDetails = [] } } = useSelector(state => state.userLog.news)
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(fetchNewsById({id}))
        dispatch(fetchNews({ page:0 }))
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

                                            <div className="blog_span_outer"><span>{currentData?.posted_by}</span>
                                                <span>{formatDate(currentData?.updated_at)}</span>
                                                <span
                                                    class="right_border"> {currentData?.readingtime}</span>
                                            </div>

                                            <div className="clearfix"></div>
                                            <h1 style={{marginTop:'20px'}}>{currentData?.title}</h1>

                                        </div>
                                        <div class="blog_details_imgbox">
                                            <img src={currentData?.image} alt='' />
                                        </div>

                                        <div dangerouslySetInnerHTML={{ __html: currentData?.description }} style={{ fontSize: '14px' }}>

                                        </div>

                                    </div>

                                </div>

                                <div class="col-md-4">

                                    <div class="blog_rightpart">

                                        <h1>Recent News</h1>

                                        {newsDetails.map((item) => {
                                            if (item.id !== Number(id))
                                                return <Link to={`/news/details/${item.id}`}> <div class="resent_blog_box">

                                                    <div class="resent_image"><img src={recentImg} alt='' /></div>
                                                    <div class="resent_contantbox">
                                                        <p><strong>{item?.title}</strong></p>

                                                        <div class="resent_contantbox_span_outer">
                                                            <span>{item?.posted_by}</span>
                                                            <span>{formatDate(currentData?.updated_at)}</span>

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

            </div>s
        </Fade>

    )
}

export default BlogDetails
