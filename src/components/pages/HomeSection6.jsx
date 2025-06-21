import React from 'react';

export default function HomeSection6() {
  const education = [
    { school: 'Chandigarh University', degree: 'Master of Computer Applications', year: '2022 – 2024' },
    { school: 'University of Lucknow', degree: 'Bachelor of Science', year: '2018 – 2021' },
    { school: 'Riverside Academy College', degree: 'Intermediate', year: '2017 – 2018' },
    { school: 'St. John Bosco College', degree: 'High School', year: '2015 – 2016' },
  ];

  const workExperience = [
    { company: 'Aayan Infotech', role: 'Front-End Developer | React JS', year: 'Feb 2025 – Ongoing' },
    { company: 'Bito Technologies Pvt. Ltd.', role: 'Web Developer', year: 'Jul 2024 – Jan 2025' },
    { company: 'CodSoft Pvt. Ltd.', role: 'Web Developer Intern', year: 'Apr 2024 – May 2024' },
  ];

  const steps = [
    {
      title: '1. Discovery and Planning',
      desc: 'Understand your business requirements, goals, and audience to plan a robust architecture and development strategy.',
      id: 'workcollapse1',
      target: '#workcollapse1',
      expanded: true,
      delay: '0s',
    },
    {
      title: '2. Design and Development',
      desc: 'Transform ideas into responsive, high-performance web interfaces with ReactJS, ensuring maintainable and scalable code.',
      id: 'workcollapse2',
      target: '#workcollapse2',
      expanded: false,
      delay: '0.2s',
    },
    {
      title: '3. Delivery and Support',
      desc: 'Deploy, test, and provide post-launch support, ensuring smooth handover, training, and future enhancements as needed.',
      id: 'workcollapse3',
      target: '#workcollapse3',
      expanded: false,
      delay: '0.4s',
    },
  ];

  return (
    <>
      <div className="our-foundation">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Education & Work</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  My journey of learning and <span>professional growth</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              { title: 'Education', icon: 'icon-foundation-header-1.svg', data: education },
              { title: 'Work Experience', icon: 'icon-foundation-header-2.svg', data: workExperience },
            ].map((section, i) => (
              <div className="col-lg-6" key={i}>
                <div className="our-foundation-box wow fadeInUp" data-wow-delay={i ? '0.2s' : '0s'}>
                  <div className="foundation-header">
                    <div className="icon-box">
                      <img src={`images/${section.icon}`} alt={section.title} />
                    </div>
                    <div className="foundation-header-title">
                      <h3>{section.title}</h3>
                    </div>
                  </div>
                  <div className="foundation-body">
                    {section.data.map((item, idx) => (
                      <div className="foundation-item" key={idx}>
                        <div className="foundation-content">
                          <h3>{item.school || item.company}</h3>
                          <p>{item.degree || item.role}</p>
                        </div>
                        <div className="foundation-content-year">
                          <p>{item.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="how-it-work">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="how-it-work-image">
                <figure className="image-anime reveal">
                  <img
                    src="https://img.freepik.com/free-photo/photographer-using-laptop_23-2148019151.jpg?ga=GA1.1.798502561.1733972320&semt=ais_hybrid&w=740"
                    alt="Agile development workflow"
                  />
                </figure>
              </div>

            </div>

            <div className="col-lg-6">
              <div className="how-it-work-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">How I Work</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                    A clear process for <span>efficient delivery</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    Hi, I'm Rishabh — a dedicated Front-End Developer skilled in ReactJS,
                    committed to transforming ideas into robust, responsive, and user-friendly web applications.
                  </p>
                </div>

                <div className="work-accordion" id="work-accordion">
                  {steps.map((step, index) => (
                    <div className="accordion-item wow fadeInUp" data-wow-delay={step.delay} key={index}>
                      <h2 className="accordion-header" id={`workheading${index + 1}`}>
                        <button
                          className={`accordion-button ${step.expanded ? '' : 'collapsed'}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={step.target}
                          aria-expanded={step.expanded}
                          aria-controls={step.id}
                        >
                          {step.title}
                        </button>
                      </h2>
                      <div
                        id={step.id}
                        className={`accordion-collapse collapse${step.expanded ? ' show' : ''}`}
                        aria-labelledby={`workheading${index + 1}`}
                        data-bs-parent="#work-accordion"
                      >
                        <div className="accordion-body">
                          <p>{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
