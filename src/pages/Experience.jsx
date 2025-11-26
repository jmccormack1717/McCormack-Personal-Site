import './Page.css'

function Experience() {
  return (
    <div className="page">
      <div className="page-container">
        <div className="page-content">
          <section className="experience-section">
            <h2>Work Experience</h2>
            <div className="experience-list">
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Software Engineer</h3>
                  <span className="experience-date">September 2025–Present</span>
                </div>
                <div className="experience-org">Scheme</div>
                <p className="experience-description">
                  At Scheme James contributes to the full-stack development of AI-driven products, working directly under the CEO, building features to support the product vision. He collaborates with design and engineering teams to deliver end-to-end features, develop responsive and aesthetic UIs, and implement complex functionality ahead of deadlines.
                </p>
                <p className="experience-description">
                  Key responsibilities and accomplishments include:
                </p>
                <ul className="experience-bullets">
                  <li>Designing and implementing user-facing components using React and TypeScript, ensuring responsiveness and visual appeal.</li>
                  <li>Developing backend features, maintaining databases, and performing complex queries using Python and Neo4j.</li>
                  <li>Supporting user authentication flows for secure and seamless functionality.</li>
                  <li>Participated in the company rebranding process, contributing to the UI/UX overhaul and maintaining consistency across products.</li>
                  <li>Maintaining and improving existing software by identifying and fixing bugs, optimizing performance, and enhancing reliability.</li>
                  <li>Collaborating across design and engineering teams to translate product vision into practical, high-quality solutions.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="projects-section">
            <h2>Projects</h2>
            <div className="project-list">
              <div className="project-item">
                <div className="project-header">
                  <h3>SpeakInsights – Natural-Language CSV Analytics</h3>
                  <a
                    href="https://speakinsights-prototype.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                </div>
                <p className="project-description">
                  Full-stack web app that lets users upload CSVs and ask questions in plain English, returning
                  tailored charts and narrative insights powered by an LLM.
                </p>
                <p className="project-description">
                  Key features and technologies include:
                </p>
                <ul className="project-bullets">
                  <li>Built with FastAPI, Python, SQLAlchemy, and Pandas on the backend, with per-dataset SQLite storage.</li>
                  <li>React, TypeScript, Tailwind CSS, and Recharts on the frontend for interactive visualizations.</li>
                  <li>Playbook-based analysis engine where the LLM selects analysis strategies while deterministic Python executes the data logic.</li>
                  <li>Designed to robustly handle arbitrary CSVs, tested on datasets with over 100k rows while keeping the analysis responsive.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Experience

