import React from "react";
import { BlogIntroImg } from "../../assets/images";

const BlogIntro = () => {
    return (
        <section class="inner_blog_section">
            <div class="container">
                <div class="col-md-12">
                    <div class="row">
                        <div
                            class="col-md-6 inner_blog_box wow fadeInUp"
                            data-wow-delay="1s"
                            style={{padding:'0px'}}
                        >
                            <div class="">
                                <h1>
                                    LOGISTICALLY
                                    <br /> <span class="banner_redfont">SPEAKING</span>
                                </h1>
                            </div>
                        </div>

                        <div class="col-md-6 inner_blog_box">
                            <div class=" wow fadeInUp" data-wow-delay="1s">
                                <img src={BlogIntroImg} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogIntro;
