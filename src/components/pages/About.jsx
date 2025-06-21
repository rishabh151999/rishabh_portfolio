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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Logo"
              />
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="col-lg-6">
            <div className="about-us-content">

              {/* Section Title */}
              <div className="section-title">
                <h3 className="wow fadeInUp">about me</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                This Is <span>Rishabh Chandra</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  <span>“Creating seamless, engaging web experiences through clean and modern code.”</span>
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.6s">
                  Hi, I'm Rishabh Chandra — a passionate <a href="#">Front-End Developer</a> specializing in ReactJS.
                  I love transforming ideas into responsive, user-friendly interfaces that help businesses thrive online.
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
                      <p>Email Me At</p>
                      <h3><a href="mailto:rishabhchandraofficial@gmail.com">rishabhchandralal15@gmail.com</a></h3>
                    </div>
                  </div>

                  <div className="about-contact-item">
                    <div className="icon-box">
                      <img src="/images/icon-phone.svg" alt="Phone Icon" />
                    </div>
                    <div className="about-contact-item-content">
                      <p>Phone Number</p>
                      <h3><a href="tel:9795661093">+91 9795661093</a></h3>
                    </div>
                  </div>
                </div>

                {/* Experience Box */}
                <div className="">
                  {/* <div className="about-experience-counter">
                    <h2><span className="counter">2</span>+</h2>
                    <p>years experience</p>
                  </div> */}

                  <p>
                    <a
                      href="/pdf/Rishabh_Resume.pdf"
                      className="btn-default"
                      download
                    >
                      Download My Resume
                    </a>{' '}
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
