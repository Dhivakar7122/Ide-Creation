import React from 'react';
import '../cssfile/ourworking.css';
import Workplace from '../img/workplace.jpg'
import Work2 from '../img/workplace2.jpg'
import Work3 from '../img/work3.jpg'

const Ourworking = () => {
    return (
        <div className='working'>
            <div className="container-fluid working-process">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center pt-4 pb-4">
                            <h4 className="pb-2"><strong>Our Working Process</strong></h4>
                            <p className='para'>A well-structured workflow with great design execution</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 offset-lg-2 col-md-4 ">
                            <div className="working-process-box mx-auto my-5 ps-3 pb-4">
                                <div className="working-process-box-num">
                                    <h5>1</h5>
                                </div>
                                <img src={Workplace} alt="" width="100px" className="pt-4 pb-3 hidden-b" />
                                <h5 className="text-start hidden-b">Discussion</h5>
                                <p className="text-start hidden-b"><small>Under the client's business, goals and challenges for building relationship.</small></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="working-process-box mx-auto my-5 ps-3">
                                <div className="working-process-box-num">
                                    <h5>2</h5>
                                </div>
                                <img src={Work2} alt="Logo" width="100px" className="pt-4 pb-3 hidden-b" />
                                <h5 className="text-start hidden-b">Ideate</h5>
                                <p className="text-start hidden-b"><small>Gather ideas and create the first concept for the future product.</small></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="working-process-box mx-auto my-5 ps-3">
                                <div className="working-process-box-num">
                                    <h5>3</h5>
                                </div>
                                <img src={Work3} alt="" width="100px" className="hidden-b" />
                                <h5 className="text-start hidden-b">Execution</h5>
                                <p className="text-start hidden-b"><small>Provide the first draft of a project, accept minor and major revisions.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourworking;
