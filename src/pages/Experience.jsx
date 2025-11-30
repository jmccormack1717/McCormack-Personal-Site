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
                  <h3>Software Engineer — Full Stack</h3>
                  <span className="experience-date">Nov 2025 – Present</span>
                </div>
                <div className="experience-org">Scheme</div>
                <p className="experience-description">
                  At Scheme, James works across the full stack to build AI-driven product features, collaborating directly with the CEO and design team to ship high-quality, end-to-end functionality.
                </p>
                <p className="experience-description">
                  Key Responsibilities & Achievements
                </p>
                <ul className="experience-bullets">
                  <li>Developing end-to-end product features that enhance user experience and platform reliability.</li>
                  <li>Designing and implementing clean, responsive, and visually consistent UIs using React and TypeScript.</li>
                  <li>Building backend features in Python, maintaining databases, and writing complex data queries with Neo4j.</li>
                  <li>Implementing and improving user authentication and account management workflows.</li>
                  <li>Maintaining and optimizing existing software to improve performance, stability, and user experience.</li>
                  <li>Translating product requirements into scalable technical solutions in close collaboration with design and leadership.</li>
                </ul>
              </div>
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Frontend Engineer</h3>
                  <span className="experience-date">Sep 2025 – Nov 2025</span>
                </div>
                <div className="experience-org">Scheme</div>
                <p className="experience-description">
                  James began at Scheme owning core frontend responsibilities, delivering high-quality UI work and contributing significantly to a major product rebrand before expanding into a full-stack role.
                </p>
                <p className="experience-description">
                  Key Responsibilities & Achievements
                </p>
                <ul className="experience-bullets">
                  <li>Implemented a fully responsive, visually consistent UI in partnership with the design team.</li>
                  <li>Led major pieces of the company's rebrand, updating layouts, components, and visual elements across the platform.</li>
                  <li>Built reusable, maintainable React components to improve frontend scalability.</li>
                  <li>Integrated frontend workflows with backend APIs to deliver seamless, user-facing functionality.</li>
                  <li>Established the frontend foundations he continues to maintain and expand as part of his full-stack role.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="projects-section">
            <h2>Projects</h2>
            <div className="project-list">
              <div className="project-item">
                <div className="project-header">
                  <h3>SpeakINsights – Natural-Language CSV Analytics</h3>
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
                  <li>Built full-stack data analytics platform enabling natural language queries on CSV datasets using OpenAI GPT-4</li>
                  <li>Designed playbook-based analysis system with 8+ analysis types, avoiding SQL injection by using deterministic Python code</li>
                  <li>Developed React + TypeScript frontend with dynamic visualization rendering and real-time query processing</li>
                  <li>Implemented FastAPI backend with JWT authentication, async operations, and comprehensive error handling</li>
                  <li>Deployed production application with CI/CD pipeline, automated testing, and multi-tenant data isolation</li>
                </ul>
              </div>
              <div className="project-item">
                <div className="project-header">
                  <h3>SecuraFlow</h3>
                </div>
                <p className="project-description">
                  Full-stack production system with ML-powered anomaly detection for real-time monitoring and security analytics.
                </p>
                <p className="project-description">
                  Key features and technologies include:
                </p>
                <ul className="project-bullets">
                  <li>Built full-stack production system (FastAPI + React + TypeScript) with ML-powered anomaly detection using Isolation Forest</li>
                  <li>Implemented real-time monitoring dashboard with live visualizations, model performance tracking, and system health metrics</li>
                  <li>Deployed with CI/CD pipeline (GitHub Actions), Docker containerization, and automated test-gated deployments to Render</li>
                  <li>Integrated production features: JWT authentication, rate limiting, structured logging, PostgreSQL database, and comprehensive error handling</li>
                  <li>Designed end-to-end ML pipeline from feature engineering to real-time inference with performance evaluation metrics</li>
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

