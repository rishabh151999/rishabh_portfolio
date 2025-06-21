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
                <h2>Ready to collaborate?</h2>
                <p>Let’s turn your ideas into reality with modern, responsive web solutions.</p>
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
                  Building clean, responsive, and dynamic web applications with a focus on performance and user experience. Let’s turn your ideas into reality with modern, efficient front-end solutions.
                </p>
              </div>
              <div className="footer-social-links">
                <ul>
                  <li><a href="tel:+919795661093"><i className="fa-solid fa-phone"></i></a></li>
                  <li><a href="mailto:rishabhchandralal15@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/rishabhchandralal/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="https://github.com/rishabh151999" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                  <li><a href="https://www.instagram.com/rishabh_chandra_15" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {/* Quick Links */}
          <div className="col-lg-2 col-md-4">
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-4">
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                <li><Link to="/services">Front-End Development</Link></li>
                <li><Link to="/services">React JS Development</Link></li>
                <li><Link to="/services">Responsive Web Design</Link></li>
                <li><Link to="/services">API Integration</Link></li>
              </ul>
            </div>
          </div>

          {/* Profiles */}
          <div className="col-lg-2 col-md-4">
            <div className="footer-links">
              <h3>Profiles</h3>
              <ul>
                <li><a href="https://github.com/rishabh151999" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/rishabhchandralal/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="mailto:rishabhchandralal15@gmail.com">Email</a></li>
                <li><a href="tel:+919795661093">Call Me</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-lg-12">
            <div className="footer-copyright-text d-flex justify-content-between flex-column flex-md-row">
              <p>© {new Date().getFullYear()} All rights reserved.</p>
              <p>
                Designed & Developed by <a href="https://www.linkedin.com/in/rishabhchandralal/" target="_blank" rel="noreferrer" className='text-dark'>Rishabh</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
