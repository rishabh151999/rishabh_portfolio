import React from 'react';

export default function HomeSection3() {
  const tools = [
    { icon: 'images/icon-tool-1.svg', name: 'figma', percent: 98 },
    { icon: 'images/icon-tool-2.svg', name: 'Sketch', percent: 92 },
    { icon: 'images/icon-tool-3.svg', name: 'Photoshop', percent: 90 },
    { icon: 'images/icon-tool-4.svg', name: 'After Effects', percent: 91 },
    { icon: 'images/icon-tool-5.svg', name: 'Storybook', percent: 96 },
    { icon: 'images/icon-tool-6.svg', name: 'Invision', percent: 99 },
  ];

  return (
    <div className="our-tools">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">my tools</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Design, develop, deliver: my <span>essential gear</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {tools.map((tool, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="tool-item">
                <div className="tool-item-box">
                  <div className="icon-box">
                    <img src={tool.icon} alt={tool.name} />
                  </div>
                  <div className="tool-item-content">
                    <h3>{tool.name}</h3>
                    <p>Sit consectetur elit</p>
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
