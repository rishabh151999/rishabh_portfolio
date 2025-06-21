import React from 'react';
import PreLoader from './PreLoader';
import Header from './Header';
import Footer from './Footer';
import HeroSection from '../pages/HeroSection';
import HomeSection1 from '../pages/HomeSection1';
import HomeSection2 from '../pages/HomeSection2';
import HomeSection3 from '../pages/HomeSection3';
import Contact from '../pages/Contact';
import About from '../pages/About';
import HomeSection4 from '../pages/HomeSection4';
import HomeSection5 from '../pages/HomeSection5';
import HomeSection6 from '../pages/HomeSection6';
import HomeSection7 from '../pages/HomeSection7';
import HomeSection8 from '../pages/HomeSection8';

const Layout = () => (
  <>
    <PreLoader />
    <Header />
    <HeroSection />
    <About />
    <HomeSection1 />
    <HomeSection2 />
    <HomeSection3 />
    <HomeSection4 />
    <HomeSection5 />
    <HomeSection6 />
    <HomeSection7 />
    <HomeSection8 />
    <Contact />
    <Footer />
  </>
);

export default Layout;
