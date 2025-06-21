import React from 'react';

export default function HomeSection1() {
  return (
    <>
      {/* Scrolling Ticker Section Start */}
      <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
          {/* Duplicate the WHOLE list ONCE for smooth looping */}
          {[1, 2].map((i) => (
            <div className="scrolling-content" key={i}>
              {[
                "React JS Development",
                "Responsive Web Design",
                "UI/UX Implementation",
                "Single Page Applications",
                "Front-End Optimization",
                "Cross-Browser Compatibility",
                "API Integration"
              ].map((label, index) => (
                <span key={index}>
                  <img src="/images/star-icon.svg" alt="Star" /> {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Scrolling Ticker Section End */}
    </>
  );
}
