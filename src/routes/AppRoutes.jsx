import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeSection2 from '../components/pages/HomeSection2';
import About from '../components/pages/About';
import Projects from '../components/pages/Projects';
import Contact from '../components/pages/Contact';
import NotFound from '../components/pages/NotFound';
import HeroSection from '../components/pages/HeroSection';
import HomeSection1 from '../components/pages/HomeSection1';
import HomeSection3 from '../components/pages/HomeSection3';


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HeroSection />} />
    <Route path="/" element={<HomeSection1 />} />
    <Route path="/" element={<HomeSection2 />} />
    <Route path="/" element={<HomeSection3 />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
