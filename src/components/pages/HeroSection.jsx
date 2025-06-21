import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Column - Hero Content */}
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="section-title dark-section">
                <h3 className="wow fadeInUp">Your Vision, My Design Expertise</h3>
                <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  <span>I'm James, </span>product designer based in USA
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  Hi, I'm James, a passionate Product Designer based in the USA. I specialize in crafting intuitive,
                  user-centered designs that merge functionality with aesthetics, with a focus on creating seamless digital experiences.
                </p>
              </div>

              <div className="hero-body wow fadeInUp" data-wow-delay="0.6s">
                <div className="hero-btn">
                  <Link to="/contact" className="btn-default">Get started</Link>
                </div>

                <div className="video-play-button">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <p>watch intro</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="col-lg-6">
            <div className="hero-image">
              <div className="hero-img">
                <img src="/images/hero-img.png" alt="Hero" />
              </div>

              {/* Customer Experience Box */}
              <div className="customer-image-box">
                <div className="customer-image-content">
                  <h3>Real Customer</h3>
                </div>

                <div className="customer-experience-images">
                  {['1', '2', '3', '4', '5'].map((num) => (
                    <div className="customer-image" key={num}>
                      <figure className="image-anime">
                        <img src={`/images/customer-img-${num}.jpg`} alt={`Customer ${num}`} />
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
                <h2><span className="counter">8</span>+</h2>
                <p>years experience</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
