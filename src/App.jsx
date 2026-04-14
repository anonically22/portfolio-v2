import React from 'react';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedProjects from './sections/FeaturedProjects';
import Research from './sections/Research';
import Skills from './sections/Skills';
import ProjectDetail from './pages/ProjectDetail';
import LoadingScreen from './components/LoadingScreen';

const Home = () => (
  <>
    <Hero />
    <FeaturedProjects />
    <Skills />
    <About />
    <Research />
  </>
);

function App() {
  return (
    <Router>
      <LoadingScreen />
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
