import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const ProjectOne = () => {
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
        <h1>Chug's Sportsbook: Enhancing User Engagement through Intuitive Design</h1>
      </header>

      <section className="project-section">
        <h4>As a frequent user of fantasy sports websites, I identified an opportunity to enhance the user experience by integrating advanced sorting and filtering functions inspired by popular platforms such as Netflix, Instagram, and Gmail.</h4>
        <h4>My goal was to create a more personalized and accessible interface that allows users to navigate and interact with content effortlessly.</h4>
      </section>

      <section className="project-section">
        <h2>Competitive Analysis: Learning from the Best</h2>
        <p>To kickstart the project, I conducted a thorough competitive analysis focusing on the favoriting functions of three diverse platforms: Netflix, Instagram, and Gmail. Each platform offered unique insights into user preferences and interaction models.
          I chose sites with little similarity to existing fantasy sports website to see if I can gather inspiration from different functionalities.
        </p>
        
        <div className='image-block'>
          <img src="/static/images/netflix.png" alt="Netflix Homescreen"></img>
          <p>
            <b>Netflix</b> excels in curating content based on user preferences but lacks easy navigational cues once a film starts playing. Its inability to sort films by studio was noted as a potential area for improvement.
          </p>
        </div>

        <div className='image-block'>
        <img src="/static/images/instagram.png" alt="Instagram Homescreen"></img>
          <p>
          <b>Instagram</b> provides a strong user engagement by sorting content by relevance and recency, though it falls short in searchable content by title, limiting user control over content discovery.
          </p>
        </div>
        
        <div className='image-block'>
          <img src="/static/images/gmail.png" alt="Gmail Homescreen"></img>
          <p>
          <b>Gmail</b> stands out with its chronological email sorting, making it easy to track communication based on time. However, it lacks sorting by relevance, which could enhance the user's ability to prioritize information.
          </p>
        </div>
        
        <p>
          My findings are summarize in the following table:
        </p>

        <table border="1">
          <tr>
            <th>Factor</th>
            <th><p><a href="https://www.netflix.com/browse">Netflix</a></p></th>
            <th><p><a href="https://www.instagram.com/">Instagram</a></p></th>
            <th><p><a href="https://mail.google.com/">Gmail</a></p></th>
          </tr>
          <tr>
            <td>Default sorting by relevance</td>
            <td>&#10003;</td>
            <td>&#10003;</td>
            <td>&#10007;</td>
          </tr>
          <tr>
            <td>Default sorting by recency</td>
            <td>&#10007;</td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Filtering by menu buttons</td>
            <td>&#10003;</td>
            <td>&#10007;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Content can be sorted by producer</td>
            <td>&#10007;</td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Content searchable by title</td>
            <td>&#10003;</td>
            <td>&#10007;</td>
            <td>&#10003;</td>
          </tr>
        </table>
        <p>
          These insights laid the groundwork for designing features that could address these gaps while tailoring the functionality to the needs of fantasy sports enthusiasts.
        </p>
      </section>

      <section className="project-section">
        <h2>Building Chug's Sportsbook</h2>
        <p>
          With the insights from my analysis, I set out to develop "Chug's Sportsbook," a React-based web application tailored for fantasy sports users. The design included several key features aimed at improving user experience:
        </p>

        <img src="/static/images/sportsbook.png" alt="Chug's Sportsbook"></img>
        <ol>
          <li><b>Content Filtering: </b>Integrating a search bar allowed users to filter content dynamically based on keywords or producer names, making it easier to find specific items.</li>
          <li><b>Sorting Functionality: </b>Users could sort sports props by game time or popularity through a dropdown menu, a feature inspired by the intuitive sorting mechanisms of Netflix and Gmail.</li>
          <li><b>Interactive Prop Lists: </b>A dedicated area on the interface allowed users to favorite or remove player props, enhancing interaction and personalization.</li>
        </ol>
        <p>
          The app is run using Vercel and can be found here: <a href="https://cs1300-development-9nxl.vercel.app/" target="_blank" rel="noopener noreferrer">Chug's Sports Book</a>
        </p>  
      </section>

      <section className="project-section">
        <h2>Final Thoughts</h2>
        <p>The project was a valuable learning experience in adapting best practices from leading tech platforms to niche markets. Future enhancements would include adding more advanced search functionalities and possibly integrating machine learning to predict user preferences.
        </p>
        <p>Chug's Sportsbook stands as a testament to the power of user-centered design and the potential of competitive analysis in creating a compelling user experience. By continuously adapting and iterating on user feedback, the project will evolve to meet and exceed user expectations.</p>
      </section>

      <footer>
        <p>© 2024 Kenneth Liou</p>
      </footer>
    </div>
  );
};

export default ProjectOne;