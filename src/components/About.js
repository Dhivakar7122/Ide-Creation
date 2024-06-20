
import React from 'react';
import '../cssfile/about.css'; // Adjust the path based on your file structure
import vector from '../img/about1.png'

export default function About() {
  return (
    <div className='abt'>
      <div className="mb-5"></div>
      <div id="about"></div>
      <div className="container pt-3">
        <div className="row">
          <div className="col-lg-12 text-center pt-3">
            <h3 className="header-text">IDA - AR, VR and MR Company in India</h3>
          </div>
        </div>
      </div>

      <div className="container ps-4">
        <div className="row">
          <div className="col-lg-8 pt-3">
            <p className="content-text hidden-b">
              We IDA - Industrial Design and Animation is a creative and
              Innovative Digital Retransformation organisation with Focus the
              stream on both Web 3.0 and Industry 4.0 solutions. We Transform
              and elevate your Insustry and Business With Immersive Technical
              solution with extensiveand wide range of Imagination that becomes
              Possible.
            </p>

            <p className="content-text hidden-b">
              We @IDA Transform your needs and reinvent the Your business for
              upcoming digital future. We create and design based on your needs
              with technologies like AR ( Augmented Reality ), VR( Virtual
              Reality ), MR( Mixed Reality ) and XR( eXtended Reality ). To
              reshape the entire future.
            </p>

            <p className="content-text hidden-b">
              Join Us into the Immersive Future
            </p>

            <a href="" id="learn-more" className="content-text hidden-b">
              Learn more
            </a>
          </div>

          <div className="col-lg-4">
            <img
              src={vector}
              className="img-fluid"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

