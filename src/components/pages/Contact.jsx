import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="contact-us-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Column - Contact Info */}
          <div className="col-lg-6">
            <div className="contact-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">contact us</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  Get in touch to discuss your <span>next project</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  Are you ready to take your project to the next level? Whether you're looking for a new website,
                  a web application, or simply need advice.
                </p>
              </div>

              <div className="contact-us-body">
                <div className="contact-info-list">
                  {/* Address */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="icon-box">
                      <img src="/images/icon-location-black.svg" alt="Location Icon" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Address</h3>
                      <p>2972 Westheimer Rd. Santa Ana, New York, USA</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.8s">
                    <div className="icon-box">
                      <img src="/images/icon-phone-black.svg" alt="Phone Icon" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Phone Number</h3>
                      <p><a href="tel:123456789">+1 (123) 456-789</a></p>
                    </div>
                  </div>
                </div>

                <div className="view-resume-circle">
                  <Link to="/contact">
                    <img src="/images/view-resume-circle.png" alt="View Resume" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-lg-6">
            <div className="contact-form">
              <p className="wow fadeInUp">
                Fill out the form below to connect with me. I'll get back to you soon to
                discuss your project or answer any questions.
              </p>

              <form id="contactForm" method="POST" className="wow fadeInUp" data-wow-delay="0.2s">
                <div className="row">
                  <div className="form-group col-md-6 mb-4">
                    <input type="text" name="fname" className="form-control" placeholder="First Name" required />
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input type="text" name="lname" className="form-control" placeholder="Last Name" required />
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input type="email" name="email" className="form-control" placeholder="Email" required />
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input type="text" name="phone" className="form-control" placeholder="Phone Number" required />
                  </div>

                  <div className="form-group col-md-12 mb-4">
                    <textarea name="message" className="form-control" rows="6" placeholder="Message"></textarea>
                  </div>

                  <div className="col-md-12">
                    <button type="submit" className="btn-default">submit message</button>
                    <div id="msgSubmit" className="h3 hidden"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
