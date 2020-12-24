import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import TheGuardian from './Projects/TheGuardian';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, footerData } from '../mock/theGuardian';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);

  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, footer }}>
      <Hero />
      <About />
      <TheGuardian />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
