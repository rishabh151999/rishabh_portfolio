// import React from 'react';
// import PreLoader from './PreLoader';
// import Header from './Header';
// import Footer from './Footer';
// import HeroSection from '../pages/HeroSection';
// import HomeSection1 from '../pages/HomeSection1';
// import HomeSection2 from '../pages/HomeSection2';
// import HomeSection3 from '../pages/HomeSection3';
// import Contact from '../pages/Contact';
// import About from '../pages/About';
// import HomeSection4 from '../pages/HomeSection4';
// import HomeSection5 from '../pages/HomeSection5';
// import HomeSection6 from '../pages/HomeSection6';

// const Layout = () => (
//   <>
//     <PreLoader />
//     <Header />
//     <HeroSection />
//     <HomeSection1 />
//     <About />
//     <HomeSection3 />
//     <HomeSection2 />
//     <HomeSection4 />
//     <HomeSection5 />
//     <HomeSection6 />
//     <Contact />
//     <Footer />
//   </>
// );

// export default Layout;
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


const Layout = () => (
  <>
    <PreLoader />
    <Header />
    <section id="home"><HeroSection /></section>
    <section id="about"><HomeSection1 /></section>
    <section id="about"><About /></section>
    <section id="skills"><HomeSection3 /></section>
    <section id="services"><HomeSection2 /></section>
    <section id="services"><HomeSection4 /></section>
    <section id="projects"><HomeSection5 /></section>
    <section id="experience"><HomeSection6 /></section>
    <section id="contact"><Contact /></section>
    <Footer />
  </>
);

export default Layout;

