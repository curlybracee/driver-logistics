import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate } from '../../assets/constants';
import auther_img from '../../assets/images/auther_img.png'
import blogBox from '../../assets/images/blog_box_img_1.png'
import blogIcon1 from '../../assets/images/blog_icon_1.png'
import blogIcon2 from '../../assets/images/blog_icon_2.png'
import { fetchBlogs } from '../../redux/action';


const BlogSections = () => {
    useEffect(()=>{
        dispatch(fetchBlogs({pageNo:2}))
    },[])
    const { data = {} } = useSelector(state => state.userLog.blogs)
    return (
        <section class="inner_blog_contantbox">

            <div class="container">

                <div class="col-md-12">
                    <div class='row'>

                        {data?.data?.map((item,index) =>
                            <div class={`col-md-4 wow fadeInUp blogAlign-${index}`} data-wow-delay="1s">

                                <div class="blog_newbox">
                                    <img alt='' src={item?.image} class="image_new" />
                                    {item?.image&&<div class="overlay_one"></div>}
                                    <div class="blog_auther"><img alt='' src={auther_img} /> <span>{item.posted_by}</span></div>
                                    <div class="clearfix"></div>
                                    <div class="blog_title"><Link to={`/blog/details/${item.id}`}>{item.title}</Link></div>
                                    <div dangerouslySetInnerHTML={{__html:item.shortdescription}}
                                     style={{
                                         fontSize:'14px',
                                         display:'block',
                                         maxHeight:'100px',
                                         overflow:'hidden',
                                          wordWrap: 'break-word',
                                         textOverflow:'ellipsis',
                                         marginBottom:'15px',
                                         overflowY: 'scroll'
                                         
                                         }}>

                                    </div>
                                    <div class="blog_datebox">
                                        {formatDate(item.updated_at)} | {item.readingtime}
                                    <Link to={`/blog/details/${item.id}`}>
                                        <img alt='' src={blogIcon1} />
                                    </Link>
                                <Link to={`/blog/details/${item.id}`}>
                                    <img alt='' src={blogIcon2} />
                                            </Link>
                                    </div>
                                    <div class="clearfix"></div>

                                    <div class="blog_readmore"><Link to={`/blog/details/${item.id}`}
                                        class="theme-btn-three btn-style-three"><span class="btn-title-three">Read
                                        More</span></Link></div>

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
