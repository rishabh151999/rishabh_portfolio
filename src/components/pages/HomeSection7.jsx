import React from 'react';

export default function HomeSection7() {
  const pricingPlans = [
    {
      title: 'Hourly package',
      price: '$29',
      period: '/ hours',
      description: 'We begin by understanding your vision, goals, Through collaborative discussion',
      features: [
        'custom website design',
        'responsive design',
        'front-end development',
        'back-end development',
        'e-commerce development',
        'branding & graphic design',
      ],
      highlighted: false,
    },
    {
      title: 'Monthly package',
      price: '$1229',
      period: '/ Month',
      description: 'We begin by understanding your vision, goals, Through collaborative discussion',
      features: [
        'custom website design',
        'responsive design',
        'front-end development',
        'back-end development',
        'e-commerce development',
        'branding & graphic design',
      ],
      highlighted: true,
    },
  ];

  const testimonials = [
    {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      img: 'images/author-1.jpg',
      rating: 4,
      content:
        "I'm a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-projects. I'm a designer, illustrator, We begin by understanding your vision.",
    },
    {
      name: 'Albert Flores',
      role: 'Senior Engineer',
      img: 'images/author-2.jpg',
      rating: 4,
      content:
        "I'm a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-projects. I'm a designer, illustrator, We begin by understanding your vision.",
    },
  ];

  const companies = [
    'company-logo-1.svg',
    'company-logo-2.svg',
    'company-logo-3.svg',
    'company-logo-1.svg',
    'company-logo-2.svg',
    'company-logo-3.svg',
    'company-logo-4.svg',
  ];

  return (
    <>
      <div className="our-pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="our-pricing-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Our pricing</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                    Choose the right <span>plan for project</span>
                  </h2>
                </div>
                <div className="pricing-cta-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="images/icon-pricing-cta.svg" alt="" />
                  </div>
                  <div className="pricing-cta-content">
                    <h3>hey ! custom plans for your unique needs</h3>
                    <p>If none of my standard packages quite fit what you're looking for, don't worry!</p>
                  </div>
                  <div className="pricing-cta-button">
                    <a href="contact.html" className="btn-default btn-highlighted">
                      contact now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="pricing-box">
                {pricingPlans.map((plan, idx) => (
                  <div
                    className={`pricing-item wow fadeInUp ${plan.highlighted ? 'highlighted-box' : ''}`}
                    data-wow-delay={plan.highlighted ? '0.2s' : '0s'}
                    key={idx}
                  >
                    <div className="pricing-header">
                      <h3>{plan.title}</h3>
                      <h2>
                        {plan.price}
                        <sub>{plan.period}</sub>
                      </h2>
                      <p>{plan.description}</p>
                    </div>
                    <div className="pricing-body">
                      <ul>
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a href="#" className="btn-default">
                        Hire now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="our-testimonial-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Client reviews</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                    See what people are saying <span>about my work</span>
                  </h2>
                </div>

                <div className="client-review-box">
                  <div className="customer-experience-images">
                    {testimonials.slice(0, 3).map((t, index) => (
                      <div className="customer-image" key={index}>
                        <figure className="image-anime reveal">
                          <img src={t.img} alt="" />
                        </figure>
                      </div>
                    ))}
                  </div>

                  <div className="client-review-box-content">
                    <h3>
                      <span className="counter">1000</span>+ Happy clients
                    </h3>
                    <p>Work With People And Brands Worldwide.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial-slider">
                <div className="swiper">
                  <div className="swiper-wrapper" data-cursor-text="Drag">
                    {testimonials.map((t, idx) => (
                      <div className="swiper-slide" key={idx}>
                        <div className="testimonial-item">
                          <div className="testimonial-rating">
                            {Array.from({ length: 5 }).map((_, starIdx) => (
                              <i
                                key={starIdx}
                                className={`fa-${starIdx < t.rating ? 'solid' : 'regular'} fa-star`}
                              ></i>
                            ))}
                          </div>
                          <div className="testimonial-content">
                            <p>{t.content}</p>
                          </div>
                          <div className="testimonial-body">
                            <div className="author-image">
                              <figure className="image-anime">
                                <img src={t.img} alt="" />
                              </figure>
                            </div>
                            <div className="author-content">
                              <h3>{t.name}</h3>
                              <p>{t.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="testimonial-btn">
                    <div className="testimonial-button-prev"></div>
                    <div className="testimonial-button-next"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="testimonial-company-slider">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {companies.map((logo, idx) => (
                      <div className="swiper-slide" key={idx}>
                        <div className="company-logo">
                          <img src={`images/${logo}`} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
