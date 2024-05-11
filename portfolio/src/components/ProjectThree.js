import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const ProjectThree = () => {
  const navigate = useNavigate();

  const goBackToMainPage = () => {
    navigate('/'); // Navigate back to the main page first

    setTimeout(() => {
      const target = document.getElementById("projects");
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Add a delay to allow navigation transition to complete
  };

  return (
    <div className='case-study'>
      <ScrollToTop />
      <button className="back-button" onClick={goBackToMainPage}>
        Back to Projects
      </button>

      <header className="project-header">
        <h1>Revitalizing a Local Favorite: Responsive Redesign of a Providence Bagel Shop Website</h1>
      </header>

      <section className="project-section">
        <h4>The website of a beloved local bagel shop in Providence, frequented by myself and many others, served as the perfect canvas for a redesign project. Recognizing its potential for a better user experience, I embarked on a journey to revamp the site with a keen focus on functionality, accessibility, and design coherence.</h4>
      </section>

      <section className="project-section">
        <h2>Discovering Design Flaws</h2>
        <p>My connection to the restaurant, coupled with my frequent visits, allowed me to view the website not just as a designer but also as a regular customer. This dual perspective was crucial in identifying key usability issues that detracted from the user experience:
        </p>
        
        <div className='image-block'>
          <img src="/static/images/bagelgourmet/originalbagelgourmet.png" alt="Original Bagel Gourmet Wesbite"></img>
          <ol>
            <li><b>Spacing and Symmetry: </b>The close proximity of the logo to the page title and overall lack of symmetry made the site feel cramped and unbalanced.</li>
            <li><b>Visibility and Contrast: </b>Poor contrast between text and background, along with very small text sizes, hindered readability.</li>
            <li><b>Navigation and Flow: </b>Disjointed content and ineffective use of space led to a confusing navigation experience.</li>
          </ol>
        </div>
        
        <p>
        A detailed report from WebAIM's WAVE tool confirmed these observations, highlighting numerous instances of low contrast and small text, alongside a complete absence of aria labels, making the site virtually inaccessible to users with visual impairments.
        </p>
      </section>

      <section className="project-section">
        <h2>Speed Sketching to Wireframing</h2>
        <p>
        The redesign process began with speed sketching, where I produced nine quick sketches to explore various visual and structural layouts. Elements from the most promising sketches were then combined to create a clear, functional design that respected the identity of the bagel shop while enhancing user engagement.
        </p>

        <img src="/static/images/bagelgourmet/speedsketches.jpg" alt="Speed Sketches"></img>
        
        <p>
          Moving to wireframing, I developed layouts for tablet, mobile, and desktop views. Each design addressed the initial shortcomings:
        </p>
        <ol>
          <li><b>Spacing and Use of Space: </b>I introduced adequate spacing between elements and made efficient use of the available space.</li>
          <li><b>Contrast and Visibility: </b>I ensured strong contrast between the text and its background to enhance readability.</li>
          <li><b>Symmetrical and Logical Layout: </b>Features were symmetrically aligned, and interactive elements like buttons and text boxes were arranged to support a natural flow of information.</li>
        </ol>

        <div className='image-block'>
          <h4>
            Desktop wireframe
          </h4>
          <img src="/static/images/bagelgourmet/lofidesktop.jpg" alt="Lofi Desktop"></img>
        </div>

        <div className='image-block-vertical'>
          <h4>
            Tablet wireframe
          </h4>
          <img src="/static/images/bagelgourmet/lofitablet.jpg" alt="Lofi Tablet"></img>
        </div>

        <div className='image-block-vertical'>
          <h4>
            Mobile wireframe
          </h4>
          <img src="/static/images/bagelgourmet/lofimobile.jpg" alt="Lofi Mobile"></img>
        </div>
      </section>

      <section className="project-section">
        <h2>High-Fidelity Prototypes and Final Design</h2>
        <p>The high-fidelity mockups for each device type were meticulously crafted to reflect the new design principles. These mockups showcased the responsive and accessible nature of the website, ensuring a seamless experience across all devices.
        </p>
        <div className='image-block'>
          <h4>
            Visual Design Style Guide
          </h4>
          <iframe 
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '600px', alignSelf: 'center'}}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0yclPvMe0RfqeXn1sNfOZo%2FBagel-Gourmet-Cafe-Visual-Design-Style-Guide%3Fpage-id%3D0%253A1%26node-id%3D1-6%26viewport%3D856%252C473%252C0.8%26t%3D2JzAaQYfq8DZK2rS-1%26scaling%3Dscale-down"
            allowfullscreen
            title='hifi mockup'
          ></iframe>
          <p>In creating the style guide, I chose the 'Mate SC' font for its legibility, especially benefiting users with dyslexia, and incorporated icons to aid comprehension for non-English speakers or visually impaired visitors.</p>
        </div>
        
        <div className='image-block'>
          <h4>
              Desktop Mockup  
          </h4>
          <iframe 
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '600px', alignSelf: 'center'}}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FctKNgdHMZS6uaZ2Kl91o2p%2FDesktop-HiFi%3Fpage-id%3D0%253A1%26node-id%3D1-2%26viewport%3D453%252C473%252C0.5%26t%3D16ipi2EMu9FVlUaa-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A17"
            allowfullscreen
            title='hifi mockup'
          ></iframe>
        </div>
        <div className='image-block'>
          <h4>
              Tablet Mockup  
          </h4>
          <iframe 
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '600px', alignSelf: 'center'}}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FVJ5FGy0pZPeZ1Mii6wx17k%2FTablet-HiFi%3Fpage-id%3D0%253A1%26node-id%3D1-2%26viewport%3D601%252C391%252C0.66%26t%3D9D5F7Kw9b7hwNROb-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A17"
            allowfullscreen
            title='hifi mockup'
          ></iframe>
        </div>
        <div className='image-block'>
          <h4>
              Mobile Mockup  
          </h4>
          <iframe 
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '600px', alignSelf: 'center'}}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcXC55xHJasQiRfqrqYizUg%2FMobile-HiFi%3Fpage-id%3D0%253A1%26node-id%3D1-2%26viewport%3D600%252C534%252C0.67%26t%3DVcqt5YGMA9dQHkUt-1%26scaling%3Dscale-down"
            allowfullscreen
            title='hifi mockup'
          ></iframe>
        </div>

        <p>
          The app is run using Github Pages and can be found here: <a href="https://kungfu-k3nny.github.io/cs1300-responsive-redesign/" target="_blank" rel="noopener noreferrer">Redesigned Bagel Gourmet website</a>
        </p>  
      </section>

      <section className="project-section">
        <h2>Final Thoughts</h2>
        <p>This project taught me the profound impact of detail-oriented enhancements on accessibility and overall user experience. Although the process required meticulous attention to detail, the outcome was a cleaner, more inviting, and inclusive website.
        </p>
        <p>The responsive redesign of the Providence bagel shop website stands as a testament to the importance of user-centered design. It demonstrates how thoughtful improvements can transform an outdated site into a modern, accessible, and highly functional online presence, much to the delight of all its visitors.
        </p>
      </section>

      <footer>
        <p>© 2024 Kenneth Liou</p>
      </footer>
    </div>
  );
};

export default ProjectThree;