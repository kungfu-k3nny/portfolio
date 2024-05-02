import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [activeButton, setActiveButton] = useState(1);
  const navRef = useRef(null);

  const scrollToSection = (id, buttonIndex) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    updateIndicator(buttonIndex);
    setActiveButton(buttonIndex);
  };

  const updateIndicator = (buttonIndex) => {
    const buttons = navRef.current.querySelectorAll('button');
    if (buttons[buttonIndex]) {
      setIndicatorPosition(buttons[buttonIndex].offsetLeft + buttons[buttonIndex].offsetWidth / 2 - 30);
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY - window.screen.availHeight/2;
    const sections = ['home', 'projects', 'about', 'resume', 'contact'];
    const sectionHeights = sections.map((id) => document.getElementById(id).offsetTop);

    const sectionIndex = sectionHeights.findIndex((h) => scrollY < h);
    updateIndicator(sectionIndex);
    setActiveButton(sectionIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="nav" ref={navRef}>
        <button onClick={() => scrollToSection('home', 1)}
        className={`nav-button ${0 === activeButton ? 'active' : ''}`}>Home</button>
        <button onClick={() => scrollToSection('projects', 2)}
        className={`nav-button ${1 === activeButton ? 'active' : ''}`}>Projects</button>
        <button onClick={() => scrollToSection('about', 3)}
        className={`nav-button ${2 === activeButton ? 'active' : ''}`}>About Me</button>
        <button onClick={() => scrollToSection('resume', 4)}
        className={`nav-button ${3 === activeButton ? 'active' : ''}`}>Resume</button>
        <button onClick={() => scrollToSection('contact', 5)}
        className={`nav-button ${4 === activeButton ? 'active' : ''}`}>Contact Me</button>
        <div className="indicator" style={{ left: `${indicatorPosition}px` }}></div>
      </nav>

      <div id="home" className="section black">
        <h1>Kenneth Liou</h1>
      </div>

      <div id="projects" className="section dark-blue">
        <h2>Projects</h2>
        <Link to="/project1"><img src="images/sportsbook.png" className="portfolio-image" alt="Project 1" /></Link>
        <Link to="/project2"><img src="/dummy2.png" className="portfolio-image" alt="Project 2" /></Link>
        <Link to="/project3"><img src="/dummy3.png" className="portfolio-image" alt="Project 3" /></Link>
        <Link to="/project4"><img src="/dummy4.png" className="portfolio-image" alt="Project 4" /></Link>
      </div>

      <div id="about" class="section light-gray">
        <h2>About Me</h2>
        <p>My bio</p>
      </div>

      <div id="resume" class="section yellow">
        <h2>Resume</h2>
        <p>resume image</p>
      </div>

      <div id="contact" class="section dark-blue">
        <h2>Contact Me</h2>
        <p>You can reach me at:</p>
        <ul>
          <li>Email: kenneth_liou@brown.edu</li>
          <li>Phone: (650) 996-9315</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/kenneth-liou/">https://www.linkedin.com/in/kenneth-liou/</a></li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;