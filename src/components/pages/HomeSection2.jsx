import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HomeSection2() {
  return (
    <div className="our-specialization">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">My Specialization</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                Front-End <span>Development Expertise</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-content-btn">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.4s">
                <p>
                  As a dedicated Front-End Developer, I craft modern, responsive, and user-friendly web applications using ReactJS and the latest web technologies.
                </p>
              </div>
              <div className="section-btn wow fadeInUp" data-wow-delay="0.6s">
                <Link to="/services" className="btn-default">View All Services</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="specialization-slider">
              <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 }
                }}
              >
                {[
                  {
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                    title: 'React JS Development'
                  },
                  {
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                    title: 'Responsive Web Design'
                  },
                  {
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
                    title: 'UI/UX Implementation'
                  },
                  {
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                    title: 'Single Page Applications'
                  },
                  {
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                    title: 'API Integration'
                  },
                  {
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
                    title: 'Performance Optimization'
                  }
                ].map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="service-item">
                      <div className="service-item-header">
                        <div className="icon-box">
                          <img src={`${service.icon}`} alt="" width={40}/>
                        </div>
                        <div className="service-item-btn">
                          <Link to="/service-single">
                            <img src="images/arrow-dark.svg" alt="arrow" />
                          </Link>
                        </div>
                      </div>
                      <div className="service-item-body">
                        <h3><Link to="/service-single">{service.title}</Link></h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
              <p>
                Let’s build fast, modern, and engaging web experiences together.{' '}
                <Link to="/contact">Contact me to get started!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
