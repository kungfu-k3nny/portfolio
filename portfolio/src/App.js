import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProjectPage from './components/ProjectPage';
import ProjectOne from './components/ProjectOne';
import ProjectTwo from './components/ProjectTwo';
import ProjectThree from './components/ProjectThree';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project1" element={<ProjectOne />} />
        <Route path="/project2" element={<ProjectTwo />} />
        <Route path="/project3" element={<ProjectThree />} />
        <Route path="/project4" element={<ProjectPage projectId={4} />} />
      </Routes>
    </Router>
  );
}

export default App;