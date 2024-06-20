import React from 'react';
import '../cssfile/ourservice.css';
import gameDevImg from '../img/gamecontrol.jpg';
import generativeAIImg from '../img/fingerprint.jpg';
import modelingImg from '../img/modeling.png';
import animationImg from '../img/animation.png';
import motionGraphicsImg from '../img/motion.jpg';
import vfxImg from '../img/vfx.png';
import arvrImg from '../img/virtual.jpg';
import virtualProductionImg from '../img/3d.png';
import cgImg from '../img/CG.png';
import uxImg from '../img/uiux.jpg';
import academicImg from '../img/team_2083290.png';
import videoEditingImg from '../img/film-editing_4035077.png';

export default function Ourservices() {
  return (
    <div className='service'>
      <div className="container pt-3">
        <br id="services" />
        <div className="row mt-5">
          <div className="col-lg-12 text-center">
            <h3 className="header-text text-center pt-4">Our Services</h3>
            <p className='serpara'>Reinvent your industry with our industrial solutions</p>
          </div>
        </div>
      </div>

      <div className="container our-services p-lg-3 ps-lg-5 ps-md-5">
        <div className="row p-lg-3 p-md-3 p-0">
          <div className="col-lg-4 col-md-12 p-md-2 hidden-b">
            <a href="#">
              <img src={gameDevImg} alt="Game Development" width="50px" />
              <p>Game Development</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 p-md-2 hidden-b">
            <a href="#">
              <img src={generativeAIImg} alt="Generative AI" width="50px" />
              <p>Generative AI</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 p-md-2 hidden-b">
            <a href="#">
              <img src={modelingImg} alt="3D Modeling/Rendering" width="50px" />
              <p>3D Modeling/Rendering</p>
            </a>
          </div>
        </div>

        <div className="row p-lg-3 p-md-3 p-0">
          <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
            <a href="#">
              <img src={animationImg} alt="2D/3D Animation" width="50px" />
              <p>2D/3D Animation</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
            <a href="#">
              <img src={motionGraphicsImg} alt="Motion Graphics" width="50px" />
              <p>Motion Graphics</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
            <a href="#">
              <img src={vfxImg} alt="VFX" width="50px" />
              <p>VFX</p>
            </a>
          </div>
        </div>

        <div className="row p-lg-3 p-md-3 p-0">
          <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
            <a href="#">
              <img src={arvrImg} alt="AR/VR/MR/XR" width="50px" />
              <p>AR/VR/MR/XR</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 p-md-r hidden-1">
            <a href="#">
              <img src={virtualProductionImg} alt="Virtual Production" width="50px" />
              <p>Virtual Production</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
            <a href="#">
              <img src={cgImg} alt="CG" width="50px" />
              <p>CG</p>
            </a>
          </div>
        </div>

        <div className="row p-lg-3 p-md-3 p-0">
          <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
            <a href="#">
              <img src={uxImg} alt="UI/UX" width="50px" />
              <p>UI/UX</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
            <a href="#">
              <img src={academicImg} alt="Academic Alliances" width="50px" />
              <p>Academic Alliances</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
            <a href="#">
              <img src={videoEditingImg} alt="Video Editing" width="50px" />
              <p>Video Editing</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
