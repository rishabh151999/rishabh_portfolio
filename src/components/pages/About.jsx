import React from 'react';

export default function About() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Logo"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">about me</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  This Is <span>Rishabh Chandra</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  <span>
                    &quot;Creating seamless, engaging web experiences through clean and modern
                    code.&quot;
                  </span>
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.6s">
                  Hi, I&apos;m Rishabh Chandra, a passionate{' '}
                  <a href="#contact">Front-End Developer</a> specializing in ReactJS. I love
                  transforming ideas into responsive, user-friendly interfaces that help
                  businesses thrive online.
                </p>
              </div>

              <div className="about-content-body">
                <div className="about-contact-box wow fadeInUp" data-wow-delay="0.8s">
                  <div className="about-contact-item">
                    <div className="icon-box">
                      <img src="/images/icon-mail.svg" alt="Email Icon" />
                    </div>
                    <div className="about-contact-item-content">
                      <p>Email Me At</p>
                      <h3>
                        <a href="mailto:rishabhchandralal15@gmail.com">
                          rishabhchandralal15@gmail.com
                        </a>
                      </h3>
                    </div>
                  </div>

                  <div className="about-contact-item">
                    <div className="icon-box">
                      <img src="/images/icon-phone.svg" alt="Phone Icon" />
                    </div>
                    <div className="about-contact-item-content">
                      <p>Phone Number</p>
                      <h3>
                        <a href="tel:9795661093">+91 9795661093</a>
                      </h3>
                    </div>
                  </div>
                </div>

                <div>
                  <p>
                    <a href="/pdf/Rishabh_Resume.pdf" className="btn-default" download>
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
