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
                  <h3 className="wow fadeInUp">My Number Facts</h3>
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-cursor="-opaque"
                  >
                    Number trivia: what you <span>didn't know</span>
                  </h2>
                </div>
                {/* Section Title End */}

                {/* Success Counter Box Start */}
                <div className="facts-counter-box">
                  <div className="facts-counter-item">
                    <h2>
                      +<span className="counter">60</span>%
                    </h2>
                    <p>We incorporate eco-friendly solutions in more than half.</p>
                  </div>
                  <div className="facts-counter-item">
                    <h2>
                      +<span className="counter">80</span>%
                    </h2>
                    <p>We specialize in energy-saving installations.</p>
                  </div>
                </div>
                {/* Success Counter Box End */}
              </div>
              {/* Our Facts Content End */}

              {/* Our Facts List Start */}
              <div className="our-facts-list">
                <div className="facts-list-item wow fadeInUp">
                  <p>
                    <span>Creative Solutions:</span> Contrary to popular belief,
                    Lorem Ipsum is not simply random text. It has roots in a piece
                    of classical Latin literature from 45 BC, making it over 2000
                    years old. Richard McClintock, a Latin professor.
                  </p>
                </div>
                <div className="facts-list-item wow fadeInUp" data-wow-delay="0.25s">
                  <p>
                    <span>E-commerce Solutions:</span> Contrary to popular belief,
                    Lorem Ipsum is not simply random text. It has roots in a piece
                    of classical Latin literature from 45 BC, making it over 2000
                    years old. Richard McClintock, a Latin.
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
