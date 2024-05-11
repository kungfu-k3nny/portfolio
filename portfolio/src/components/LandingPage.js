import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from './Typewriter';

const LandingPage = () => {
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const navRef = useRef(null);

  const sections = useMemo(() => ['home', 'projects', 'about', 'resume', 'contact'], []);

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

  //updates nav bar indicator
  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll()
    }, 50); // 50 milliseconds = 0.05 seconds

    return () => {
      clearInterval(interval);
    };
  }, [handleScroll]);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after the component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Delay can be adjusted or set to 0 for immediate effect

    return () => clearTimeout(timer);
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
        <div className="indicator" style={{ left: `${indicatorPosition}px` }}></div>
      </nav>

      <div id="home" className="section black">
        <div className='top-spacer'></div>
        <div className={`horizontal-stack-intro ${animate ? 'faded-slide' : ''}`}>
          <div></div>
          <div className='intro-block'>
            <h1 className='h1-intro'>Kenneth Liou</h1>
            <Typewriter words={["Machine Learning Engineer", "Software Engineer"]} />
            <div className='medium-spacer'></div>
            <p>I develop software that makes people's lives easier.</p>
            <p className='lighter'>Brown University class of 2024: <br></br>ScM Computer Science<br></br>BA Computer Science<br></br>BA Engineering</p>
            <div className='medium-spacer'></div>
            <button onClick={() => scrollToSection('projects', 2)}>View my Work</button>
            <div></div>
            <button className="solid-button" onClick={() => scrollToSection('contact', 5)}>Get in Touch</button>
          </div>
          <div class="image-container">
            <img src="images/head_shot.jpg" alt="Head shot"></img>
          </div>
          <div></div>
        </div>
        <div className='bottom-spacer'></div>
      </div>

      <div id="projects" className="section dark-blue">
        <div className='top-spacer'></div>
        <h2>Projects</h2>
        <div className='horizontal-stack-projects'>
          <div className='portfolio-piece'>
            <Link to="/project1" className='portfolio-image-container'>
              <img src="images/sportsbook.png" className="portfolio-image" alt="Chug's Sportsbook" />
            </Link>
            <p>Chug's Sportsbook Competitive Analysis</p>
          </div>
          <div className='portfolio-piece'>
            <Link to="/project2" className='portfolio-image-container'>
              <img src="images/partiful.png" className="portfolio-image" alt="Partiful Homepage" />
            </Link>
            <p>Partiful Homepage Redesign</p>
          </div>
          <div className='portfolio-piece'>
            <Link to="/project3" className='portfolio-image-container'>
              <img src="images/responsiveredesign.png" className="portfolio-image" alt="Redesigned Bagel Gourmet Contact Page" />
            </Link>
            <p>Bagel Gourmet Responsive Redesign</p>
          </div>
        </div>
        <div className='bottom-spacer'></div>
        <div>
          <div className="down-indicator-white" onClick={() => scrollToSection('about', 2)}>
            <p>Learn More About Me</p>
            <div>
              <img src={"images/angle-arrow-down-white.png"} alt="Leawrn More About Me button"></img>
            </div>
          </div>
        </div>
      </div>

      <div id="about" class="section light-gray">
        <div className='top-scpacer'></div>
        <h2>About Me</h2>
        <div className='horizontal-stack-about-me'>
          <div></div>
          <div>
            <img src='images/foraging.jpg' alt='Me and my friend Brendan foraging for mussels at Pillar Point, Half Moon Bay'></img>
            <p className='subtext'>My friend Brendan and I foraging for mussels at Pillar Point, Half Moon Bay</p>
            <img src='images/mtg.jpg' alt='My friend Kevin and I playing Magic the Gathering'></img>
            <p className='subtext'>My friend Kevin and I playing Magic the Gathering</p>
          </div>
          <p className='text-stack'>
            Hey there! My name is Kenneth Liou, and I'm from silicon valley.
            I'm currently studying for my master's degree in Computer Science at Brown University, which is also where I obtained my two undergraduate degrees in Computer Science and Engineering.
            <br></br><br></br>I'm interested in developing software that makes people's lives easier.
            Currently I'm working at Althia, a student founded startup, conducting research to develop their machine learning model.  
            <br></br><br></br>Outside of academics, I'm a family head in the Chinese Student Association, and I play as a sub on the Brown Esports team for League of Legends.
            I love all things outdoors from foraging to snowboarding, and I also enjoy playing basketball.
            Currently in my free time, I'm learning Creep by Radiohead on acoustic guitar, and I'm training to dunk.
          </p>
          <div></div>
        </div>
        <div>
          <div className="down-indicator-black" onClick={() => scrollToSection('resume', 3)}>
            <p>See my Resume</p>
            <div>
              <img src={"images/angle-arrow-down-black.png"} alt="See my Resume Button"></img>
            </div>
          </div>
        </div>
      </div>

      <div id="resume" class="section yellow">
        <div className='top-spacer'></div>
        <div className='resume-block'>
          <iframe id="pdf-viewer" src="Kenneth_Liou_general.pdf" frameborder="0" title='resume'></iframe>
        </div>
        <div>
          <div className="down-indicator-black" onClick={() => scrollToSection('contact', 4)}>
            <p>Contact Me</p>
            <div>
              <img src={"images/angle-arrow-down-black.png"} alt="Contact Me Button"></img>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" class="contact-section dark-blue">
        <div className='contact-block'>
          <h2 className='h2-contact'>Get in Touch</h2>
          <div className='horizontal-stack-contact'>
            <div>
              <p className='footer-light'><b className='poppins-regular'>Phone Number:</b> +1 (650) 996-9315<br></br>
              <b className='poppins-regular'>Email:</b> kenneth_liou@brown.edu</p>
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