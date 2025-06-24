import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">

            {/* Logo */}
            <ScrollLink 
              to="home" 
              smooth={true} 
              duration={500} 
              className="navbar-brand" 
              style={{ cursor: 'pointer' }}
              onClick={closeNavbar}
            >
              <img src="/images/Rishabh (1).png" alt="Logo" className='header-img-all' style={{ maxWidth: '170px' }}/>
            </ScrollLink>

            {/* Bootstrap Toggler Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Main Menu */}
            <div className="collapse navbar-collapse main-menu" id="navbarNav">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <ScrollLink 
                      to="home" 
                      smooth={true} 
                      duration={500} 
                      className="nav-link"
                      onClick={closeNavbar}
                    >
                      Home
                    </ScrollLink>
                  </li>
                  <li className="nav-item">
                    <ScrollLink 
                      to="about" 
                      smooth={true} 
                      duration={500} 
                      className="nav-link"
                      onClick={closeNavbar}
                    >
                      About
                    </ScrollLink>
                  </li>
                  <li className="nav-item">
                    <ScrollLink 
                      to="skills" 
                      smooth={true} 
                      duration={500} 
                      className="nav-link"
                      onClick={closeNavbar}
                    >
                      Skills
                    </ScrollLink>
                  </li>
                  <li className="nav-item">
                    <ScrollLink 
                      to="services" 
                      smooth={true} 
                      duration={500} 
                      className="nav-link"
                      onClick={closeNavbar}
                    >
                      Services
                    </ScrollLink>
                  </li>
                  <li className="nav-item">
                    <ScrollLink 
                      to="projects" 
                      smooth={true} 
                      duration={500} 
                      className="nav-link"
                      onClick={closeNavbar}
                    >
                      Projects
                    </ScrollLink>
                  </li>
                  <li className="nav-item">
                    <ScrollLink 
                      to="experience" 
                      smooth={true} 
                      duration={500} 
                      className="nav-link"
                      onClick={closeNavbar}
                    >
                      Experience
                    </ScrollLink>
                  </li>
                  <li className="nav-item">
                    <ScrollLink 
                      to="contact" 
                      smooth={true} 
                      duration={500} 
                      className="nav-link"
                      onClick={closeNavbar}
                    >
                      Contact
                    </ScrollLink>
                  </li>
                </ul>
              </div>

              {/* Download CV button */}
              <div className="header-btn d-inline-flex ms-lg-3">
                <a 
                  href="/pdf/Rishabh_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-default"
                  onClick={closeNavbar}
                >
                  Download CV
                </a>
              </div>
            </div>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;