import { Pagination } from '@material-ui/lab';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate } from '../../assets/constants';
import auther_img from '../../assets/images/auther_img.png'
import blogBox from '../../assets/images/blog_box_img_1.png'
import blogIcon1 from '../../assets/images/blog_icon_1.png'
import blogIcon2 from '../../assets/images/blog_icon_2.png'
import { fetchBlogs } from '../../redux/action';
// import {
//     EmailShareButton,
//     FacebookShareButton,
//     TelegramShareButton,
//     TumblrShareButton,
//     TwitterShareButton,
//     WhatsappShareButton,
// } from "react-share";
// import {
//     EmailIcon, TwitterIcon,
//     FacebookIcon
// } from 'react-share';
import { createTheme, Dialog, ThemeProvider } from '@material-ui/core';
const theme = createTheme({
    overrides: {
        MuiButtonBase: {
            root: {
                fontSize: '16px !important'
            }
        }
    }
});
const BlogSections = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [open, setOpen] = useState(false)
    const [shareUrl, setShareUrl] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchBlogs({ page }))
    }, [page])
    const { data: { last_page, data } = {} } = useSelector(state => state.userLog.blogs)
    return (
        <section class="inner_blog_contantbox">

            <div class="container" >

                <div class="col-md-12">
                    <div class='row'>

                        {data?.map((item, index) =>
                            <div class={`col-md-4 wow fadeInUp blogAlign-${index}`} data-wow-delay="1s" style={{ marginBottom: 10 }}>
                                <div class="blog_newbox">
                                    <div style={{ height: '230px' }}>
                                        <img alt='' src={item?.image} class="image_new" />
                                    </div>
                                    {/* {item?.image && <div class="overlay_one"></div>} */}
                                    {/* <div class="clearfix"></div> */}
                                    <div style={{ flex: 1, marginBottom: 'auto' }}>
                                        <div class="blog_auther"><img alt='' src={auther_img} /> <span>{item.posted_by}</span></div>
                                        <div class="blog_title" style={{ maxHeight: 50 }}><Link to={`/blog/details/${item.id}`} style={{ textOverflow: 'ellipsis', maxHeight: 50 }}>{item.title}</Link></div>
                                        <div dangerouslySetInnerHTML={{ __html: item.shortdescription }}
                                            style={{
                                                fontSize: '14px',
                                                display: 'block',
                                                overflow: 'hidden',
                                                wordWrap: 'break-word',
                                                textOverflow: 'ellipsis',
                                                marginBottom: '15px',
                                                overflowY: 'scroll',
                                                height: 'clamp(100px,3rem,150px)',
                                                // maxHeight:'150px'

                                            }}>

                                        </div>

                                    </div>
                                    <div className="blogFooter" style={{ marginTop: 'auto' }}>
                                        <div class="blog_datebox" >
                                            {formatDate(item.updated_at)} | {item.readingtime}
                                            {/* <div onClick={() => {
                                            setOpen(true)
                                            setShareUrl(`/blog/details/${item.id}`)
                                        }}>
                                            <img alt='' src={blogIcon1} />
                                        </div> */}
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

                            </div>
                        )
                        }

                    </div>
                </div>
                <div class="col-md-12" style={{ margin: '20px', textAlign: 'center' }}>
                    {last_page &&
                        <ThemeProvider theme={theme}>
                            <Pagination
                                style={{ margin: '0px auto', width: 'fit-content', fontSize: '18px' }}
                                count={last_page}
                                color="primary"
                                page={page}
                                size="large"
                                shape='rounded'
                                onChange={(e, v) => setPage(v)} />
                        </ThemeProvider>
                    }
                </div>
                {/* <Dialog open={open} onClose={() => setOpen(false)}>
                    <div style={{ width: 500 }}>
                        <FacebookShareButton style={{ width: 50 }} url={shareUrl} >
                        <FacebookIcon size={32} round={true} />
                            </FacebookShareButton>
                        <EmailShareButton body={shareUrl} >
                            <EmailIcon size={32} round={true}/>
                        </EmailShareButton>
                    </div>
                </Dialog> */}
            </div>

        </section>
    )
}

export default BlogSections
