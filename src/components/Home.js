import React from 'react';
import '../cssfile/home.css'; // Adjust the path based on your file structure

export default function Home() {
    return (
      <div className="hcol">
        <section>
          <div className="container ps-4 pt-3  heabtn" >
            <div className="row pt-4">
              <div className="col-lg-6" >
                <img
                  src="img/1_xKfrcrFty_-xaXcfUjOSKg.webp"
                  alt=""
                  width="400px"
                  className="header-img-1 img-fluid"
                />
                <h1 className="header-text pt-4">
                  <strong>Bringing Ideas To Our Reality</strong>
                </h1>
                <p className="mt-4">
                  <a href="" id="explore">
                    <strong>EXPLORE</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  