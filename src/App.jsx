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
