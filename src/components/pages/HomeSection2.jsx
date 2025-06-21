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
                Innovative best design and <span>development services</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-content-btn">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.4s">
                <p>
                  As a skilled Product Designer, I offer a range of services tailored to help you create exceptional
                  digital products and experiences.
                </p>
              </div>
              <div className="section-btn wow fadeInUp" data-wow-delay="0.6s">
                <Link to="/services" className="btn-default">view all services</Link>
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
                    icon: 'icon-services-1.svg',
                    title: 'Mobile App Design & Development'
                  },
                  {
                    icon: 'icon-services-2.svg',
                    title: 'UI/UX Design System Creation'
                  },
                  {
                    icon: 'icon-services-3.svg',
                    title: 'Branding and Visual Identity'
                  },
                  {
                    icon: 'icon-services-4.svg',
                    title: 'Consultation and Strategy'
                  },
                  {
                    icon: 'icon-services-5.svg',
                    title: 'Video Production Services'
                  }
                ].map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="service-item">
                      <div className="service-item-header">
                        <div className="icon-box">
                          <img src={`images/${service.icon}`} alt="" />
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
                Elevate your brand with creative design solutions.{' '}
                <Link to="/contact">Let's bring your vision to life today!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
