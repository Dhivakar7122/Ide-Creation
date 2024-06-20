// ProjectsSection.jsx

import React from 'react';
import '../cssfile/project.css'; 
import Pro1 from '../img/pro1.jpg'
import Pro2 from '../img/pro2.jpg'
import Pro3 from '../img/pro3.jpeg'

const Project = () => {
    return (
        <div className='project'>
            <div className="container mt-3">
                <div className="row pb-4">
                    <div className="col-lg-12 text-center pt-5">
                        <h3><strong>Our Projects</strong></h3>
                        <p>Have a sneak peak at the Arts we Crafted</p>
                    </div>

                    <div className="row pt-4">

                        <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center p-lg-0 ps-5 pb-5">
                            <div className="col-lg-6 row project-box">
                                <div className="col-lg-12 text-center">
                                    <img src={Pro1} width="100px" height="160px" alt="Project 1" />
                                </div>
                                <div className="col-lg-12 text-center">
                                    <h6 className="pt-3 hidden-1"><strong>Precision Strike</strong></h6>
                                    <p className="hidden-1"><small>Mobile shooting game</small></p>
                                    <a href="#">
                                        <p className="project-learn-more hidden-1"><small>Learn more</small></p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex justify-content-center p-lg-0 ps-5 pb-5">
                            <div className="col-lg-6 row project-box">
                                <div className="col-lg-12 text-center">
                                    <img src={Pro2} width="260px" height="135px" alt="Project 2" />
                                </div>
                                <div className="col-lg-12 text-center">
                                    <h6 className="pt-3 hidden-1"><strong>Turbo Thurst</strong></h6>
                                    <p className="hidden-1"><small>Mobile legends AAA title racing mobile game</small></p>
                                    <a href="#">
                                        <p className="project-learn-more hidden-1"><small>Learn more</small></p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex justify-content-lg-start justify-content-center p-lg-0 ps-5 pb-5">
                            <div className="col-lg-6 row project-box">
                                <div className="col-lg-12 text-center">
                                    <img src={Pro3} width="260px" height="162px" alt="Project 3" />
                                </div>
                                <div className="col-lg-12 text-center">
                                    <h6 className="pt-3 hidden-1"><strong>Startup Fest Expo</strong></h6>
                                    <p className="hidden-1"><small>Oneyes startup fest expo</small></p>
                                    <a href="#">
                                        <p className="project-learn-more hidden-1"><small>Learn more</small></p>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
