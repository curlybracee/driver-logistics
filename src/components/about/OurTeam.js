import React from 'react';
import team_img_3 from '../../assets/images/team_img_3.png';
import team_img_2 from '../../assets/images/team_img_2.png';
import team_img_1 from '../../assets/images/team_img_1.png';

function OurTeam() {
    return (
        <section className="inner_team_section">

            <div className="container">

                <div className="col-md-12">

                    <h2 className='background_double'><span className='h2_Span'>OUR TEAM</span></h2>


                    <div className="row">


                        <div className="col-md-4 wow fadeInUp" data-wow-delay="1s">

                            <div className="team_box">

                                <img src={team_img_1}></img>

                                <div className="team_title">TEAM MEMBER NAME</div>
                                <div className="team_post">POSITION</div>

                            </div>

                        </div>

                        <div className="col-md-4 wow fadeInUp" data-wow-delay="2s">

                            <div className="team_box">

                                <img src={team_img_2}></img>
                                <div className="team_title">TEAM MEMBER NAME</div>
                                <div className="team_post">POSITION</div>

                            </div>

                        </div>

                        <div className="col-md-4 wow fadeInUp" data-wow-delay="3s">

                            <div className="team_box">

                                <img src={team_img_3}></img>
                                <div className="team_title">TEAM MEMBER NAME</div>
                                <div className="team_post">POSITION</div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default OurTeam
