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
                        >
                            <div class="">
                                <h1>
                                    LOGISTICALLY
                                    <br /> <span class="banner_redfont">SPEAKING</span>
                                </h1>

                                <p>
                                    Far far away, behind the word mountains, far from the
                                    countries Vokalia and Consonantia, there live the blind texts.
                                    Separated they live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean
                                </p>
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
