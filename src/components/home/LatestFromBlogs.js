import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useSelector } from 'react-redux';
import { Col, Container } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';
const LatestFromBlogs = () => {
    const { data: { data: blogData = [] } } = useSelector(state => state.userLog.blogs)
    console.log({ blogData });
    useEffect(() => {

    }, [blogData.length])
    return blogData.length && (
        <section className="blog_section_latest">
            <Container>
                <h2 class="background blog_h3_botoom"><span>LATEST FROM</span></h2>
                <OwlCarousel
                    items={3}
                    dots={true}
                    rewind={false}
                    className='owl-theme' loop margin={10}>
                    {blogData?.map(item =>
                        <div className="" style={{ minHeight: '450px', border: '1px solid black' }}>
                            <div className="">
                                <img alt='' src="img/blog_img_1.jpg" className="" />
                                <div className="">
                                    <div className="text">
                                        <a href="#" className="">
                                            <span className="btn-title-three">Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <h4>
                                        <a href="#">Digitisation & Business
                                            Intelligence</a>
                                    </h4>
                                    <p>As a top 3PL company in india, We have
                                        been lucky to learn a lot while helping
                                        businesses speed. It starts with
                                        understanding what they need.</p>
                                    <div className="blog_name">
                                        <Avatar src="" />Rineesh PM - Cluster Head Supply
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </OwlCarousel>
            </Container>

        </section>
    )
}

export default LatestFromBlogs
