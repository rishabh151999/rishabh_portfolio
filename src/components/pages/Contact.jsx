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
                <h3 className="wow fadeInUp">Let's Connect</h3>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Let’s build your next <span>project together</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  Have an idea or need a dedicated Front-End Developer? 
                  Reach out and let’s discuss how I can help you bring your vision to life.
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
                      <h3>Location</h3>
                      <p>Lucknow, Uttar Pradesh, India</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.8s">
                    <div className="icon-box">
                      <img src="/images/icon-phone-black.svg" alt="Phone Icon" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Phone</h3>
                      <p><a href="tel:+919795661093">+91 9795661093</a></p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="1s">
                    <div className="icon-box">
                      <img src="/images/icon-mail-black.svg" alt="Email Icon" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:rishabhchandralal15@gmail.com">rishabhchandralal15@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="view-resume-circle">
                  <a
                    href="/pdf/Rishabh_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src="/images/view-resume-circle.png" alt="View Resume" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-lg-6">
            <div className="contact-form">
              <p className="wow fadeInUp">
                Fill out this form and I’ll get back to you promptly. I’m excited to discuss your ideas and how I can help!
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
                    <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input type="text" name="phone" className="form-control" placeholder="Your Phone Number" required />
                  </div>

                  <div className="form-group col-md-12 mb-4">
                    <textarea name="message" className="form-control" rows="4" placeholder="Your Message"></textarea>
                  </div>

                  <div className="col-md-12">
                    <button type="submit" className="btn-default">Send Message</button>
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
