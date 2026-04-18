import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedProjects from './sections/FeaturedProjects';
import Research from './sections/Research';
import Skills from './sections/Skills';
import ProjectDetail from './pages/ProjectDetail';

import Contact from './sections/Contact';

const Home = () => (
  <>
    <Hero />
    <FeaturedProjects />
    <Skills />
    <About />
    <Research />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
