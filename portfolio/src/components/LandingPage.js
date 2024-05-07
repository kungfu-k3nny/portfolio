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
    const interval = setInterval(() => {
      handleScroll()
    }, 100); // 500 milliseconds = 0.5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [indicatorPosition]);

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
        <div className='top-spacer'></div>
        <div className='horizontal-stack'>
          <div className='intro-block'>
            <h1>Kenneth Liou</h1>
            <Typewriter words={["Machine Learning Engineer", "Software Engineer"]} />
          </div>
          <div class="image-container">
            <img src="images/head_shot.jpg" alt="Head shot"></img>
          </div>
        </div>
        <div>
          <div className="down-indicator-white" onClick={() => scrollToSection('projects', 1)}>
              <p>View my Projects</p>
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
            <p>Learn More About Me</p>
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
            <p>See my Resume</p>
            <div>
              <img src={"images/angle-arrow-down-black.png"}></img>
            </div>
          </div>
        </div>
      </div>

      <div id="resume" class="section yellow">
        <div className='top-spacer'></div>
        <div className='resume-block'>
          <iframe id="pdf-viewer" src="Kenneth_Liou_general.pdf" frameborder="0"></iframe>
        </div>
        <div>
          <div className="down-indicator-black" onClick={() => scrollToSection('contact', 4)}>
            <p>Contact Me</p>
            <div>
              <img src={"images/angle-arrow-down-black.png"}></img>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" class="contact-section dark-blue">
        <div className='contact-block'>
          <h2 className='h2-contact'>Get in Touch</h2>
          <div className='horizontal-stack-contact'>
            <div>
              <p className='footer-light'>Phone Number: +1 (650) 996-9315<br></br>
              Email: kenneth_liou@brown.edu</p>
              <div className='contact-image-block'>
                <a href="mailto:kenneth_liou@brown.edu" class="contact-button-container" alt="Email Me Button">
                  <img src="images/mail.png" alt="Email Icon"></img>
                </a>
                <a href="https://www.linkedin.com/in/kenneth-liou/" class="contact-button-container" alt="Linkedin Button" target="_blank" rel="noopener noreferrer">
                  <img src="images/linkedin.png" alt="Linkedin Icon"></img>
                </a>
              </div>
            </div>
            <p className='footer-message'>Eager to Learn. Inspired to create.<br></br>
              Let's change the world with artificial intelligence together.</p>
          </div>  
        </div>
      </div> 
    </div>
  );
};

export default LandingPage;