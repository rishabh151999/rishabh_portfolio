import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          {/* Footer Header */}
          <div className="col-lg-12">
            <div className="footer-header">
              <div className="footer-title">
                <h2>Ready to work with us?</h2>
                <p>Partner with our design agency for your business with amazing results.</p>
              </div>
              <div className="footer-get-started-circle">
                <Link to="/contact">
                  <img src="/images/get-started-circle-dark.png" alt="Get Started" />
                </Link>
              </div>
            </div>
          </div>

          {/* About Footer */}
          <div className="col-lg-5 col-md-12">
            <div className="about-footer">
              <div className="footer-logo">
                <img src="/images/footer-logo.svg" alt="Footer Logo" />
              </div>
              <div className="about-footer-content">
                <p>
                  Crafting intuitive, user-centric designs that bring ideas to life. With a passion
                  for innovation and creativity, I help businesses and individuals.
                </p>
              </div>
              <div className="footer-social-links">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-3">
            <div className="footer-links">
              <h3>quick links</h3>
              <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about us</Link></li>
                <li><Link to="/services">services</Link></li>
                <li><Link to="/portfolio">portfolio</Link></li>
              </ul>
            </div>
          </div>

          {/* Our Services */}
          <div className="col-lg-3 col-md-5">
            <div className="footer-links">
              <h3>Our Services</h3>
              <ul>
                <li><Link to="/service-single">Mobile App Design</Link></li>
                <li><Link to="/service-single">UI/UX Design</Link></li>
                <li><Link to="/service-single">Branding and Visual Identity</Link></li>
                <li><Link to="/service-single">Consultation and Strategy</Link></li>
              </ul>
            </div>
          </div>

          {/* View My Work */}
          <div className="col-lg-2 col-md-4">
            <div className="footer-links">
              <h3>View My Work</h3>
              <ul>
                <li><a href="#">Behance</a></li>
                <li><a href="#">Dribbble</a></li>
                <li><a href="#">Upwork</a></li>
                <li><a href="#">Fiverr</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-lg-12">
            <div className="footer-copyright-text">
              <p>Copyright © 2025 All Rights Reserved.</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
