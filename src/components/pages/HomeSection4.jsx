import React from 'react';

export default function HomeSection4() {
  return (
    <div className="our-facts">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Our Facts Box Start */}
            <div className="our-facts-box">

              {/* Our Facts Content Start */}
              <div className="our-facts-content">

                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">My Highlights</h3>
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-cursor="-opaque"
                  >
                    By the numbers: <span>proven results</span>
                  </h2>
                </div>
                {/* Section Title End */}

                {/* Success Counter Box Start */}
                <div className="facts-counter-box">
                  <div className="facts-counter-item">
                    <h2>
                      15<span className="counter">+</span>
                    </h2>
                    <p>Successful client projects delivered</p>
                  </div>
                  <div className="facts-counter-item">
                    <h2>
                      1<span className="counter">+</span> Years
                    </h2>
                    <p>Hands-on professional experience</p>
                  </div>
                </div>
                {/* Success Counter Box End */}

              </div>
              {/* Our Facts Content End */}

              {/* Our Facts List Start */}
              <div className="our-facts-list">
                <div className="facts-list-item wow fadeInUp">
                  <p>
                    <span>Frontend Excellence:</span> I craft responsive, high-performance interfaces using ReactJS, JavaScript, and modern CSS frameworks — ensuring every project runs smoothly across all devices.
                  </p>
                </div>
                <div className="facts-list-item wow fadeInUp" data-wow-delay="0.25s">
                  <p>
                    <span>Full Stack Delivery:</span> From APIs with Node.js and Express to scalable data with MongoDB or Firebase, I provide end-to-end solutions tailored to real business needs.
                  </p>
                </div>
              </div>
              {/* Our Facts List End */}

            </div>
            {/* Our Facts Box End */}
          </div>
        </div>
      </div>
    </div>
  );
}
