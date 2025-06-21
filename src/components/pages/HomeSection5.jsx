import React from 'react';

export default function HomeSection5() {
  const portfolioItems = [
    {
      image: 'images/portfolio-1.jpg',
      title: 'Volunteer Website Template',
      category: 'Web Design',
      delay: '0s',
    },
    {
      image: 'images/portfolio-2.jpg',
      title: 'Digital Marketing Website Template',
      category: 'UI / UX Design',
      delay: '0.2s',
    },
    {
      image: 'images/portfolio-3.jpg',
      title: 'Travel Website Template',
      category: 'Web Development',
      delay: '0.4s',
    },
  ];

  return (
    <div className="our-portfolio">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">My portfolio</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Showcase of my latest projects and <span>creative work</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Section Content Button Start */}
            <div className="section-content-btn">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.4s">
                <p>
                  From concept to completion, these works reflect my commitment to delivering
                  high-quality, impactful solutions.
                </p>
              </div>
              <div className="section-btn wow fadeInUp" data-wow-delay="0.6s">
                <a href="portfolio.html" className="btn-default">
                  view all portfolio
                </a>
              </div>
            </div>
            {/* Section Content Button End */}
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
                    <a href="portfolio-single.html">
                      <img src="images/arrow-dark.svg" alt="arrow" />
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3>
                    <a href="portfolio-single.html">{item.title}</a>
                  </h3>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.6s">
              <p>
                <span>Free</span> Let's make something great work together.
                <a href="contact.html">Get free quote</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
