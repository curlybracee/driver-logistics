import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useSelector } from 'react-redux';
import { Col, Container } from 'react-bootstrap';
const LatestFromBlogs = () => {
    const { data = {} } = useSelector(state => state.userLog.blogs)

    return (
        <section className="blog_section">
            <Container>
                <h2 className="background  blog_h3_botoom" >
                    <span>LATEST FROM OUR BLOG</span>
                </h2>
                <OwlCarousel
                    items={3}
                    dots={false}
                    rewind={false}
                    className='owl-theme' loop margin={10}>
                    {data?.data?.map(item =>
                        <div className="" style={{ minHeight: '450px', border: '1px solid black' }}>
                            <div className="blog_img">
                                <img alt='' src="img/blog_img_1.jpg" className="image" />
                                <div className="overlay">
                                    <div className="text">
                                        <a href="#" className="theme-btn-three btn-style-three">
                                            <span className="btn-title-three">Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog_box_contant_outer">
                                <div className="seervice-info">
                                    <h4>
                                        <a href="#">Digitisation & Business
                                            Intelligence</a>
                                    </h4>
                                    <p>As a top 3PL company in india, We have
                                        been lucky to learn a lot while helping
                                        businesses speed. It starts with
                                        understanding what they need.</p>
                                    <div className="blog_name"><img alt='' src="img/name_img.png" />Rineesh PM - Cluster Head Supply</div>
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
