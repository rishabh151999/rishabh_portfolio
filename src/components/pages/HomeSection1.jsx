import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeSection1() {
  return (
    <>
      {/* Scrolling Ticker Section Start */}
      <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
          {[1, 2].map((i) => (
            <div className="scrolling-content" key={i}>
              {["Website Design", "Mobile App Design", "Wireframe Design", "Dashboard Design", "Product Design"].map((label, index) => (
                <React.Fragment key={index}>
                  <span><img src="/images/star-icon.svg" alt="Star" />{label}</span>
                  <span><img src="/images/star-icon.svg" alt="Star" />{label}</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Scrolling Ticker Section End */}
    </>
  );
}
