import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedProjects from './sections/FeaturedProjects';
import Research from './sections/Research';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Preloader from './components/Preloader';
import SEO from './components/SEO';

const Home = () => (
  <>
    <SEO
      title="Anirbaan Sarkar | Software Engineer, Researcher & Data Engineer"
      description="Portfolio of Anirbaan Sarkar showcasing software engineering, data engineering, research projects, machine learning experiments, publications, and development work."
      keywords="Anirbaan Sarkar, Anirbaan Sarkar Portfolio, Software Engineer, Data Engineer, Machine Learning Researcher, Full Stack Developer, React Developer"
      canonicalPath="/"
    />
    <Hero />
    <FeaturedProjects />
    <Skills />
    <About />
    <Research />
    <Contact />
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>
      {!isLoading && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
}

export default App;
