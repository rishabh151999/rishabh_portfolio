import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="main-footer py-4">
      <div className="container">
        <div className="row justify-content-between align-items-center text-center text-md-start">
          
          {/* Footer Logo & Tagline */}
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="footer-logo mb-2">
              <img src="/images/Rishabh (2).png" alt="Footer Logo" style={{ maxWidth: '180px' }} />
            </div>
            {/* <p className="mb-0 text-dark">
              Built with ❤️ by Rishabh Chandra Lal — React JS Developer.
            </p> */}
          </div>

          {/* Social Links */}
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <ul className="footer-social-links list-inline mb-0">
              <li className="list-inline-item mx-2">
                <a href="https://www.linkedin.com/in/rishabhchandralal/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="https://github.com/rishabh151999" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="mailto:rishabhchandralal15@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="https://www.instagram.com/rishabh_chandra_15" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="row mt-3">
          <div className="col text-center text-dark">
            <p className="mb-0">
              © {new Date().getFullYear()} Rishabh Chandra Lal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
