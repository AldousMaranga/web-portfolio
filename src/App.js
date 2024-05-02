import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div>
        <BrowserRouter>

          <nav className='cont'>
            <Link to="/aboutMe" className={activeLink === 'aboutMe' ? 'nav active' : 'nav'} onClick={() => handleLinkClick('aboutMe')}><img src="/assets/images/logo.png" width="80px" height="auto" alt="img" /></Link>
            <div className='nav-cont'>
              <Link to="/aboutMe" className={activeLink === 'aboutMe' ? 'nav active' : 'nav'} onClick={() => handleLinkClick('aboutMe')}>About Me</Link>
              <Link to="/skills" className={activeLink === 'skills' ? 'nav active' : 'nav'} onClick={() => handleLinkClick('skills')}>Skills</Link>
              <Link to="projects" className={activeLink === 'projects' ? 'nav active' : 'nav'} onClick={() => handleLinkClick('projects')}>Projects</Link>
              <Link to="/contact" className={activeLink === 'contact' ? 'nav active' : 'nav'} onClick={() => handleLinkClick('contact')}>Contact</Link>
            </div>
            <div style={{ width: '80px' }}></div>
          </nav>


          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>


        </BrowserRouter>


      </div>
    </header>
  );
};

export default App;
