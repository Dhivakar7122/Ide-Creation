// ClientsSection.jsx

import React from 'react';
import '../cssfile/client.css';

const Client = () => {
    return (
        <div className='client'>
            <br id="our-clients" />
            <div className="container mt-3 pt-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3><strong>Our Clients</strong></h3>
                        <p><small>Our clients aren't just clients; they are valued partners in progress. We take pride in understanding their <br />unique needs, tailoring solutions, and fostering long-term relationships.</small></p>
                    </div>
                </div>
            </div>

            <div className="container logos">
                <div className="our-client mt-5 mb-5 logos-slide">
                    <div className="our-client-box" id="srays"></div>
                    <div className="our-client-box" id="vulture-lines"></div>
                    <div className="our-client-box" id="wow-hr"></div>
                    <div className="our-client-box" id="one-yes"></div>
                    <div className="our-client-box" id="exatech"></div>
                    <div className="our-client-box" id="iiec"></div>
                    <div className="our-client-box" id="big-eye"></div>
                    <div className="our-client-box" id="blitzwork"></div>
                    <div className="our-client-box" id="digitallyvibed"></div>
                    <div className="our-client-box" id="lines-soft-tech"></div>
                    <div className="our-client-box" id="thozhil"></div>
                    <div className="our-client-box" id="win-win-web"></div>
                </div>
            </div>
        </div>
    );
};

export default Client;
