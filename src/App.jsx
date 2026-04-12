import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedProjects from './sections/FeaturedProjects';
import Research from './sections/Research';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import ProjectDetail from './pages/ProjectDetail';

const Home = () => (
  <>
    <Hero />
    <About />
    <FeaturedProjects />
    <Research />
    <Skills />
    <Contact />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
