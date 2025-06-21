import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Column - About Image */}
          <div className="col-lg-6">
            <div className="about-us-img">
              <figure>
                <img src="/images/about-us-img.png" alt="About Us" />
              </figure>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="col-lg-6">
            <div className="about-us-content">

              {/* Section Title */}
              <div className="section-title">
                <h3 className="wow fadeInUp">about us</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  Who is <span>james scott?</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  <span>“Helping businesses grow with creative web design and development solutions.</span>
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.6s">
                  Hi, I'm James, a passionate <a href="#">UI/UX designer</a> who thrives on turning ideas into visually stunning realities.
                  With a love for creativity and a meticulous eye for detail.
                </p>
              </div>

              {/* About Body */}
              <div className="about-content-body">

                {/* Contact Info */}
                <div className="about-contact-box wow fadeInUp" data-wow-delay="0.8s">
                  <div className="about-contact-item">
                    <div className="icon-box">
                      <img src="/images/icon-mail.svg" alt="Email Icon" />
                    </div>
                    <div className="about-contact-item-content">
                      <p>Email Us At</p>
                      <h3><a href="mailto:Info@domain.com">Info@domain.com</a></h3>
                    </div>
                  </div>

                  <div className="about-contact-item">
                    <div className="icon-box">
                      <img src="/images/icon-phone.svg" alt="Phone Icon" />
                    </div>
                    <div className="about-contact-item-content">
                      <p>Phone Number</p>
                      <h3><a href="tel:123456789">+0 123 456 789</a></h3>
                    </div>
                  </div>
                </div>

                {/* Experience Box */}
                <div className="about-experience-box">
                  <div className="about-experience-counter">
                    <h2><span className="counter">12</span>+</h2>
                    <p>years experience</p>
                  </div>
                  <p>
                    <Link to="/contact">My Resume</Link>{' '}
                    <img src="/images/star-icon-gradient.svg" alt="Star" />
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
