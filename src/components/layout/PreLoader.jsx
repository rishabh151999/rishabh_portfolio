import React from 'react';

export default function PreLoader() {
  return (
    <>
      {/* Preloader Start */}
      {/* <div className="preloader">
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <img src="/images/loader.svg" alt="Loading..." />
          </div>
        </div>
      </div> */}
      {/* Preloader End */}

      {/* Grid Lines Start */}
      <div className="grid-lines">
        <div className="grid-line-1"></div>
        <div className="grid-line-2"></div>
        <div className="grid-line-3"></div>
        <div className="grid-line-4"></div>
        <div className="grid-line-5"></div>
      </div>
    </>
  );
}
