import React, { useState, useEffect } from 'react';

import About from './About/About';
import Wcag from './Projects/Wcag';

import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { aboutData, projectsData, footerData } from '../mock/wcag';

function App() {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);

  const [footer, setFooter] = useState({});

  useEffect(() => {
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ about, projects, footer }}>
      <About />
      <Wcag />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
