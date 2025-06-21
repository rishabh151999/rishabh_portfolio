import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <Link className="navbar-brand" to="/">
              <img src="/images/logo.svg" alt="Logo" />
            </Link>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item submenu">
                    <Link className="nav-link" to="/">Home</Link>
                    <ul>
                      <li className="nav-item"><Link className="nav-link" to="/index">Home - Main</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/index-image">Home - Image</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/index-video">Home - Video</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/index-slider">Home - Slider</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                  <li className="nav-item submenu">
                    <Link className="nav-link" to="#">Pages</Link>
                    <ul>
                      <li className="nav-item"><Link className="nav-link" to="/service-single">Service Details</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/blog-single">Blog Details</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/portfolio-single">Portfolio details</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/team">Our Team</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/team-single">Team Details</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing Plan</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/testimonials">Testimonials</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/image-gallery">Image Gallery</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/video-gallery">Video Gallery</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/faqs">FAQs</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/404">404</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              {/* Header Btn Start */}
              <div className="header-btn d-inline-flex">
                <Link to="/contact" className="btn-default">Download CV</Link>
              </div>
              {/* Header Btn End */}
            </div>
            {/* Main Menu End */}
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Header;
