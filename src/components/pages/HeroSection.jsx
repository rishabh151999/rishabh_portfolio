import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Column - Hero Content */}
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="section-title dark-section">
                <h3 className="wow fadeInUp">Turning Ideas Into Interactive Experiences</h3>
                <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  <span>I'm Rishabh, </span> <br />Front-End Developer based in India
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  Hi, I'm Rishabh Chandra, a dedicated Front-End Developer specializing in React JS.
                  I build modern, responsive, and user-friendly web applications that help businesses grow and stand out in the digital space.
                </p>
              </div>

              <div className="hero-body wow fadeInUp" data-wow-delay="0.6s">
                <div className="hero-btn">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="btn-default"
                  >
                    Let's Connect
                  </ScrollLink>
                </div>

                {/* <div className="video-play-button">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <p>watch my work</p>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="col-lg-6">
            <div className="hero-image">
              <div className="hero-img">
                <img src="/images/rishabh.png" alt="Rishabh Chandra" />
              </div>

              {/* Customer Experience Box */}
              <div className="customer-image-box">
                <div className="customer-image-content">
                  <h3>Delivered Projects for 10+ Clients</h3>
                </div>

                <div className="customer-experience-images">
                  {[
                    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=crop&h=200&w=200',
                    'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=crop&h=200&w=200',
                    'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=crop&h=200&w=200',
                    'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=crop&h=200&w=200',
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=crop&h=200&w=200',
                    'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=crop&h=200&w=200'
                  ].map((url, index) => (
                    <div className="customer-image" key={index}>
                      <figure className="image-anime">
                        <img src={url} alt={`Client ${index + 1}`} />
                      </figure>
                    </div>
                  ))}


                  <div className="customer-image add-more">
                    <a href="#"><i className="fa-solid fa-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Experience Counter Box */}
              <div className="experience-counter-box">
                <h2><span className="counter">1</span>+</h2>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
