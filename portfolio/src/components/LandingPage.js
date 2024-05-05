import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from './Typewriter';

const LandingPage = () => {
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const navRef = useRef(null);

  const sections = ['home', 'projects', 'about', 'resume', 'contact'];

  const scrollToSection = (id, buttonIndex) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const updateIndicator = (buttonIndex) => {
    const buttons = navRef.current.querySelectorAll('button');
    if (buttons[buttonIndex]) {
      setIndicatorPosition(buttons[buttonIndex].offsetLeft + buttons[buttonIndex].offsetWidth / 2 - 30);
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY - window.screen.availHeight/2;
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
        <div></div>
        <div>
          <h1>Kenneth Liou</h1>
          <Typewriter words={["Machine Learning Engineer", "Software Engineer"]} />
        </div>
        <div>
          <div className="down-indicator-white" onClick={() => scrollToSection('projects', 1)}>
              View Projects
            <div>
              <img src={"images/angle-arrow-down-white.png"}></img>
            </div>
          </div>
        </div>
        
      </div>

      <div id="projects" className="section dark-blue">
        <div></div>
        <h2>Projects</h2>
        <div>
          <Link to="/project1"><img src="images/sportsbook.png" className="portfolio-image" alt="Project 1" /></Link>
          <Link to="/project2"><img src="/dummy2.png" className="portfolio-image" alt="Project 2" /></Link>
          <Link to="/project3"><img src="/dummy3.png" className="portfolio-image" alt="Project 3" /></Link>
          <Link to="/project4"><img src="/dummy4.png" className="portfolio-image" alt="Project 4" /></Link>
        </div>
        <div>
          <div className="down-indicator-white" onClick={() => scrollToSection('about', 2)}>
            About Me
            <div>
              <img src={"images/angle-arrow-down-white.png"}></img>
            </div>
          </div>
        </div>
      </div>

      <div id="about" class="section light-gray">
        <div></div>
        <h2>About Me</h2>
        <p>My bio</p>
        <div>
          <div className="down-indicator-black" onClick={() => scrollToSection('resume', 3)}>
            View Resume
            <div>
              <img src={"images/angle-arrow-down-black.png"}></img>
            </div>
          </div>
        </div>
      </div>

      <div id="resume" class="section yellow">
        <div></div>
        <h2>Resume</h2>
        <p>resume image</p>
        <div>
          <div className="down-indicator-black" onClick={() => scrollToSection('contact', 4)}>
            Contact Me
            <div>
              <img src={"images/angle-arrow-down-black.png"}></img>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" class="section dark-blue">
        <div></div>
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