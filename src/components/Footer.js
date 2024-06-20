// Footer.jsx

import React from 'react';
import '../cssfile/footer.css'; 
import Email from '../img/email.png'
import Insta from '../img/instagram.png'
import Wb from '../img/whatsapp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container-fluid pt-3 pb-2">
                <div className="container footer pt-1" id="contact-us">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-0 offset-md-3 col-md-9 ps-lg-4 ps-3">
                            <p><strong>Contact Us</strong></p>
                            <p className="lh-1">
                                <small>INDUSTRIAL DESIGN & ANIMATIONS <br />Karunaa Conclave, <br />No.1963, J Block, 3rd Street, 5th Main Road, <br />Anna Nagar West, Anna Nagar, Chennai, <br />Tamil Nadu - 600040, INDIA</small>
                            </p>
                            <p className="lh-1">
                                <small>E mail: <br /><a href="mailto:info@idacreations.com">info@idacreations.com</a></small>
                            </p>
                            <p className="footer-icons pt-5 pb-1">
                                <a href="#"><i className={faFacebook}></i></a>
                                <a href="https://twitter.com/IDA_design2023" ><i className={faTwitter}></i></a>
                                <a href="https://www.linkedin.com/company/industrial-design-animations/mycompany/?viewAsMember=true"><i className={faLinkedin}></i></a>
                            </p>
                        </div>

                        <div className="col-lg-4 offset-lg-0 offset-md-3 col-md-9">
                            <p><strong>Locate us on Map</strong></p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2212.814528104551!2d80.20722491526668!3d13.082677813247336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52641f73827315%3A0xc60a47141c034265!2sSyncfusion%20Software%20Pvt%20Ltd%2C%20Karuna%20Conclave%20Block!5e0!3m2!1sen!2sin!4v1708534373678!5m2!1sen!2sin"
                                width="330" height="220" style={{ border: '0', borderRadius: '10px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className="col-lg-4 pt-3">
                            <div className="row footer-enquiry text-center pt-4">
                                <div className="col-lg-4">
                                    <a href="mailto:info@idacreations.com"><img src={Email} width="50px" alt="" /></a>
                                    <p className="pt-2 text-center"><small>Send Enquiry</small></p>
                                </div>
                                <div className="col-lg-4">
                                    <a href="https://www.instagram.com/ida_tech_24?igsh=MTU5eTVuMHl1ZHZn&utm_source=qr" target="_blank">
                                    <img src={Insta} width="50px" alt="" /></a>
                                    <p className="pt-2 text-center"><small>Insta Profile</small></p>
                                </div>
                                <div className="col-lg-4">
                                    <a href="https://wa.link/oo79oh" target="_blank">
                                    <img src={Wb} width="50px" alt="" /></a>
                                    <p className="pt-2 text-center"><small>Whatsapp</small></p>
                                </div>
                            </div>
                            <div className="row join-now">
                                <div className="col-lg-4 offset-lg-8 col-12 pb-5 text-center">
                                    <a href="#" className="join-now-link">
                                        <p id="join-now"><strong>Join now</strong></p>
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

export default Footer;

