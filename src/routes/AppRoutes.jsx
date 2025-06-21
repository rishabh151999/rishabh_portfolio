import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../components/pages/About';
import Projects from '../components/pages/Projects';
import Contact from '../components/pages/Contact';
import NotFound from '../components/pages/NotFound';
import HeroSection from '../components/pages/HeroSection';
import HomeSection2 from '../components/pages/HomeSection2';
import HomeSection1 from '../components/pages/HomeSection1';
import HomeSection3 from '../components/pages/HomeSection3';


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HeroSection />} />
    <Route path="/home1" element={<HomeSection1 />} />
    <Route path="/home2" element={<HomeSection2 />} />
    <Route path="/home3" element={<HomeSection3 />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
