import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <button className="back-button" onClick={goBackToMainPage}>
        Back to Projects
      </button>

      <header className="project-header">
        <h1>Chug's Sportsbook</h1>
      </header>

      <section className="project-section">
        <p>I ran a competitive analysis between favoriting functions of 3 sites and produced my own version in a React app built from scratch.</p>
      </section>

      <section className="project-section">
        <h2>Part 1: Competitive Analysis</h2>
        <p>I will be conducting a competitive analysis for the websites of Netflix, Instagram, and Gmail:</p>
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
          Netflix's strongest factor was that as soon as you open it, a film is already playing based on your preferences.
          Since it is difficult for the user to know if they will like a film or not, it is good that Netflix sorts films by relevance to the user.
          The drawback of this suggested film feature is poor navigation scent.
          With the whole window being the suggested film, there is no obvious conceptual model for how to navigate the website.
          Netflix's weakest factor is probably that you cannot sort films by studio.
          Some people are fans of certain film studios, so having the option to see films by a particular studio would be beneficial.
        </p>
        <p>
          Instagram's strongest factor was that the content is by default sorted from top to bottom based on interest to the user, and also based on recency.
          This instills a strong navigational scent, since users know that the next content that comes up is likely to pique their interest.
          Instagram's biggest weakness is its inability to search content by title.
          By nature of the content, which typically is too casual and numerous to warrant unique titles, this does make sense,
          but it means that most information is either searched through the producer or fed by the company.
        </p>
        <p>
          Gmail's strongest factor was its strict sorting of content by recency. This makes it easy for users to find emails just by knowing when they were sent.
          Like Instagram, the fact that emails continue downwards until they move off-screen makes for a good navigation scent, showing more older emails below.
          Gmail's biggest weakness is that the user cannot sort emails by relevance. This is not terrible, since Gmail is used more for record purposes than entertainment.
        </p>

        <p>The features I want to implement are:</p>
        <ol>
          <li>Filtering content with a search bar</li>
          <p>This can be done by adding a text box where items in the aggregator are temporarily removed if the text in the text box doesn't match with any text in the content.</p>
          <li>Filtering content by producer</li>
          <p>This can be done in conjunction with the search bar. Simply add the producer as another text to match the search bar text with.</p>
        </ol>
      </section>

      <section className="project-section">
        <h2>Part 2: Creating the React App</h2>
        <p>I chose to create a fantasy sports website since I use them often and a lot of their functionality relies on favoriting.
          Filtering is incorporated through the buttons on top of the screen that select either NBA or LoL player props,
          and the two buttons underneath filter for what category of player props are shown.
          Sorting is incorporated through the sort-by dropdown menu, which sorts the props by game time or popularity.
          Lastly, the props are aggregated on the right side of the screen, where users can remove props they changed their minds about.
        </p>
        <p>
          The app is run using Vercel and can be found here:
        </p>
        <p><a href="https://cs1300-development-9nxl.vercel.app/">Chug's Sports Book</a></p>
      </section>

      <section className="project-section">
        <h2>Takeaways</h2>
        <p>I was able to add features to the fantasy sports site inspired by the competitive analysis, like sorting by recency and filtering by category (like Netflix does for movies and TV shows).
          With more time, I would like to add search functionality, as that was one of the best features I discovered from the competitive analysis.
        </p>
      </section>

      <footer>
        <p>© 2024 Kenneth Liou</p>
      </footer>
    </div>
  );
};

export default ProjectOne;