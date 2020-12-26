import React, { useState, useEffect } from 'react';
import About from './About/About';
import Hero from './Hero/Hero';
import Reviews from './Projects/Reviews';
import Footer from './Footer/Footer';
import { PortfolioProvider } from '../context/context';
import { heroData, aboutData, projectsData, footerData } from '../mock/telegraph';

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
      <Reviews />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
