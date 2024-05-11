import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const ProjectTwo = () => {
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
    <h1>Reinventing the RSVP:<br></br>A UI/UX Journey with Partiful</h1>
  </header>

  <section className="project-section">
    <h4>Our journey began with Partiful, a dynamic platform dedicated to transforming how hosts create, manage, and share event invitations. I was deeply involved in redesigning a tool that I had already used to plan numerous events, bringing unique insights and creative ideas to the project.</h4>
  </section>

  <section className="project-section">
  <h2>What is Partiful?</h2>
  <p>Partiful is a new events platform and party RSVP website. It offers tools to create, customize, and share event invitations, allowing hosts to manage RSVPS, track guest lists, and communicate with attendees without having to keep someone's number. With a user-friendly interface, Partiful aims to make organizing parties and events more straightforward and enjoyable.</p>
  </section>

  <section className="project-section">
    <h2>Problem Definition</h2>
    <img src="/static/images/original_partiful.webp" alt="Original Partiful Homepage"></img>
    <p>The clients at Partiful tasked us with redesigning their homepage for a more intuitive design to attract more users and improve navigation. Some problems that they had expressed included the following:</p>
    <ul>
      <li>Inability to see more than one or two events on the homepage at a time (limited surface area of h-scroll)</li>
      <li>The difficulty of using h-scroll for every element on their homepage</li>
      <li>The lack of content on the homepage other than events to bring users to the app even when they do not have any upcoming events</li>
      <li>Keeping elements playful</li>
    </ul>
  </section>

  <section className="project-section">
    <h2>Sketching and Ideating</h2>
    <p>
      Once we established the main painpoints of Partiful's homepage in the eyes of its designers, we individually created sketches of the low-fidelity wireframe for the homepage. I was responsible for sketching initial ideas for the homepage layout, introducing innovative concepts like displaying events as part of a gumball machine visual, and envisioning events on a map interface to enhance user engagement and accessibility. 
    </p>
    <p>
      Use the arrows at the bottom of the Figma display to scroll through some of our different sketches.
    </p>

    

    <iframe 
    style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '600px', alignSelf: 'center'}}
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8eUi1PlqCTplG6sqii4u6n%2FLoFi2%3Ftype%3Ddesign%26node-id%3D20-191%26t%3DnjCxleqrwjlMKA3A-1%26scaling%3Dscale-down%26page-id%3D20%253A181%26mode%3Ddesign" 
    allowfullscreen
    title='sketches'
    > </iframe>
  </section>

  <section className="project-section">
    <h2>Design Iterations</h2>
    <p>
      From initial sketches to refined wireframes, our design process was highly iterative. After sketching out various concepts, our team collaborated to settle on initial designs which we then refined based on peer feedback and insights from the Partiful team. This iterative cycle was crucial in evolving our designs to better meet the needs of users.
    </p>
    <p>
      Based on the initial sketches, we created a first wireframe iteration:
    </p>
    <iframe
      style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '600px', alignSelf: 'center'}}
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZ8QRNMO1ghxuZLzQT6Ah7s%2FPartiful%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D41-1374%26viewport%3D345%252C928%252C0.05%26t%3D3NB3n3E9nnTqRzCL-1%26scaling%3Dcontain%26starting-point-node-id%3D41%253A1374%26show-proto-sidebar%3D1%26mode%3Ddesign"
      allowFullScreen
      title='first wire frame'
    />
    <p>
      In response to feedback from our clients at Partiful, we moved the navigation bar to the top of the screen and adopted an Apple Wallet style layout to display multiple events on a single page effectively.
    </p>

    <p>I took the lead in creating the second iteration of wireframes in Figma, refining our design and reimagining the layout to improve the user flow and experience. In particular, I focused on establishing a mental model that would allow users to intuitively navigate between different functionalities of the homepage, grounding the design in familiar navigational paradigms while incorporating fresh visual elements.</p>
    <iframe
      style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '600px', alignSelf: 'center'}}
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8eUi1PlqCTplG6sqii4u6n%2FLoFi2%3Ftype%3Ddesign%26node-id%3D5-1911%26t%3DDJct2ND4jxFcMb1a-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign"
      allowFullScreen
      title='second wire frame'
    />

  </section>

  <section className="project-section">
    <h2>High-Fidelity Prototyping</h2>
    <p>Building on our collaborative efforts, I played a critical role in developing high-fidelity prototypes. These prototypes, crafted after refining our wireframes, featured interactive elements and transitions designed to ensure a delightful user experience. We included features like swiping through events and a vertical scroll for upcoming and past events, which I had detailed in the user flow designs.</p>
    <iframe 
      style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '600px', alignSelf: 'center'}}
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZ8QRNMO1ghxuZLzQT6Ah7s%2FPartiful%3Fpage-id%3D23%253A50%26type%3Ddesign%26node-id%3D189-3966%26viewport%3D-2239%252C249%252C0.6%26t%3DHDiGS1K7rwi0hczr-1%26scaling%3Dscale-down%26starting-point-node-id%3D189%253A3966%26show-proto-sidebar%3D1%26mode%3Ddesign"
      allowfullscreen
      title='hifi mockup'
    ></iframe>
  </section>

  <section className="project-section">
    <h2>Impact and Feedback</h2>
    <p>
      The response to our redesigned interface was overwhelmingly positive. Partiful’s team was particularly impressed with the innovative use of visual metaphors and the clarity of navigation, which were direct results of my conceptual and user flow contributions. The final design not only met but exceeded the expectations of our client, leading to a more engaging and intuitive platform.
    </p>
  </section>

  <section className="project-section">
    <h2>Final Thoughts</h2>
    <p>The redesign of Partiful’s homepage was a significant step forward in enhancing the platform's usability and aesthetic appeal. My contributions were instrumental in moving the project from initial concept sketches to a fully realized, user-friendly interface that aligns with the strategic goals of Partiful.</p>
    <p>I am grateful for the opportunity to have significantly shaped the user experience and to see our collective ideas come to life, enhancing how users interact with Partiful.</p>
  </section>


      <footer>
        <p>© 2024 Kenneth Liou</p>
      </footer>
    </div>
  );
};

export default ProjectTwo;