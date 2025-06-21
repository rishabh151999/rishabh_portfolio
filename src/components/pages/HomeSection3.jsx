import React from 'react';

export default function HomeSection3() {
  const tools = [
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      name: 'HTML5',
      percent: 99,
      desc: 'Structure clean, semantic pages'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      name: 'CSS3',
      percent: 99,
      desc: 'Style responsive layouts beautifully'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      name: 'JavaScript',
      percent: 97,
      desc: 'Add interactivity and logic'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      name: 'ReactJS',
      percent: 98,
      desc: 'Build dynamic user interfaces'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      name: 'Bootstrap',
      percent: 95,
      desc: 'Design fast with ready components'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      name: 'Node.js',
      percent: 90,
      desc: 'Run server-side JavaScript'
    },

    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      name: 'MongoDB',
      percent: 85,
      desc: 'Store data flexibly as documents'
    },

    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      name: 'Git',
      percent: 96,
      desc: 'Version control & team collaboration'
    },
  ];

  return (
    <div className="our-tools">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">Technologies I Use</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Design. Develop. Deploy : <span>My Tech Stack</span>
              </h2>
            </div>

          </div>
        </div>

        <div className="row">
          {tools.map((tool, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="tool-item">
                <div className="tool-item-box">
                  <div className="icon-box">
                    <img src={tool.icon} alt={tool.name} />
                  </div>
                  <div className="tool-item-content">
                    <h3>{tool.name}</h3>
                    <p>{tool.desc}</p>
                  </div>
                </div>
                <div className="tool-item-counter">
                  <h2>
                    <span className="counter">{tool.percent}</span>%
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
