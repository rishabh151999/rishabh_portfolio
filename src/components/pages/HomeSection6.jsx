import React from 'react';

export default function HomeSection6() {
  const education = [
    { school: 'Harmony Institute', degree: 'Master in Visual Arts', year: '2012 - 2014' },
    { school: 'Aurora Academy', degree: 'Bachelor in Visual Arts', year: '2008 - 2012' },
    { school: 'Crystalbrook', degree: 'High School', year: '1996 - 2008' },
  ];

  const workExperience = [
    { company: 'Insightlancer', role: 'Senior Designer', year: '2018 - 2024' },
    { company: 'Self-employed', role: 'Visual Artist', year: '2016 - 2018' },
    { company: 'KG Graphics Studio', role: 'Web Designer', year: '2014 - 2016' },
  ];

  const steps = [
    {
      title: '1. Discovery and Planning',
      desc: 'We begin by understanding your vision, goal & requirement. Through collaborative discussions and research.',
      id: 'workcollapse1',
      target: '#workcollapse1',
      expanded: true,
      delay: '0s',
    },
    {
      title: '2. Design and Development',
      desc: 'We begin by understanding your vision, goal & requirement. Through collaborative discussions and research.',
      id: 'workcollapse2',
      target: '#workcollapse2',
      expanded: false,
      delay: '0.2s',
    },
    {
      title: '3. Delivery and Support',
      desc: 'We begin by understanding your vision, goal & requirement. Through collaborative discussions and research.',
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
                <h3 className="wow fadeInUp">Education & work</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  Foundation and growth: my <span>education & work</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              { title: 'Education', icon: 'icon-foundation-header-1.svg', data: education },
              { title: 'Work experience', icon: 'icon-foundation-header-2.svg', data: workExperience },
            ].map((section, i) => (
              <div className="col-lg-6" key={i}>
                <div className="our-foundation-box wow fadeInUp" data-wow-delay={i ? '0.2s' : '0s'}>
                  <div className="foundation-header">
                    <div className="icon-box">
                      <img src={`images/${section.icon}`} alt="" />
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
                  <img src="images/how-it-work-image.jpg" alt="" />
                </figure>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="how-it-work-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">How it work</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                    the structured workflow behind <span>our success</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    Hi, I'm James, a passionate <a href="service-single.html">UI/UX designer</a> who thrives on turning ideas into
                    visually stunning realities. With a love for creativity and a meticulous eye for detail.
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