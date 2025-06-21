import React from 'react';

export default function HomeSection5() {
  const portfolioItems = [
    {
      image: 'images/portfolio-1.jpg',
      title: 'Discount Door & Window',
      category: 'E-Commerce Website',
      url: 'https://discountdoorandwindow.com/',
      delay: '0s',
    },
    {
      image: 'images/portfolio-2.jpg',
      title: 'South Walton Carts',
      category: 'Full Stack Web App',
      url: 'http://18.209.91.97:8133/',
      delay: '0.2s',
    },
    {
      image: 'images/portfolio-3.jpg',
      title: 'Adilience Marketing Agency',
      category: 'Corporate Website',
      url: 'https://adilience.com/',
      delay: '0.4s',
    },
  ];

  return (
    <div className="our-portfolio">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title */}
            <div className="section-title">
              <h3 className="wow fadeInUp">My Projects</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Selected Works and <span>Live Projects</span>
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Section Content Button */}
            <div className="section-content-btn">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.4s">
                <p>
                  Explore some of my recent real-world projects — from
                  responsive business websites to custom web applications.
                </p>
              </div>
              {/* <div className="section-btn wow fadeInUp" data-wow-delay="0.6s">
                <a href="portfolio.html" className="btn-default">
                  View all projects
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="row">
          {portfolioItems.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="portfolio-item wow fadeInUp" data-wow-delay={item.delay}>
                <div className="portfolio-image">
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                  <div className="portfolio-btn">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <img src="images/arrow-dark.svg" alt="arrow" />
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h3>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.6s">
              <p>
                Interested in building something amazing together?{' '}
                <a href="contact.html">Let’s connect today.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
