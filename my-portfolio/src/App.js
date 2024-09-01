import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your Name Here</h1>
        <p>Your Role or Brief Introduction</p>
      </header>

      <section id="about-me">
        <h2>About Me</h2>
        <p>
          Write a few sentences about yourself here, including your background, interests, and any notable achievements.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div>
          <h3>Project Title 1</h3>
          <p>Description of your first project.</p>
          <a href="your-github-repo-link">View on GitHub</a>
        </div>
        <div>
          <h3>Project Title 2</h3>
          <p>Description of your second project.</p>
          <a href="your-github-repo-link">View on GitHub</a>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email or connect with me on LinkedIn.</p>
        <a href="mailto:your-email@example.com">your-email@example.com</a>
        <br />
        <a href="your-linkedin-url">LinkedIn</a>
      </section>
    </div>
  );
}

export default App;
