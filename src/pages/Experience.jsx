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
                  <h3>Full Stack Engineer</h3>
                  <span className="experience-date">Nov 2025 – Present</span>
                </div>
                <div className="experience-org">Scheme</div>
                <p className="experience-description">
                  At Scheme, James contributes across the stack to build AI-driven product features, working directly with the CEO and design team to deliver high-impact, end-to-end functionality.
                </p>
                <p className="experience-description">
                  Key Responsibilities & Achievements
                </p>
                <ul className="experience-bullets">
                  <li>Developing full-stack features that improve platform reliability and user experience.</li>
                  <li>Building responsive, visually consistent UIs with React and TypeScript.</li>
                  <li>Implementing backend logic in Python, managing databases, and writing complex Neo4j queries.</li>
                  <li>Improving user authentication and account management workflows.</li>
                  <li>Optimizing existing systems for performance, stability, and scalability.</li>
                  <li>Converting product requirements into practical, high-quality engineering solutions.</li>
                </ul>
              </div>
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Frontend Engineer</h3>
                  <span className="experience-date">Sep 2025 – Nov 2025</span>
                </div>
                <div className="experience-org">Scheme</div>
                <p className="experience-description">
                  James started at Scheme owning core frontend responsibilities and contributed significantly to a company-wide product rebrand before expanding into a full-stack role.
                </p>
                <p className="experience-description">
                  Key Responsibilities & Achievements
                </p>
                <ul className="experience-bullets">
                  <li>Delivered a fully responsive, consistent UI in collaboration with design.</li>
                  <li>Led major portions of the company rebrand, updating layouts and visual components.</li>
                  <li>Built reusable React components to improve frontend structure and maintainability.</li>
                  <li>Integrated frontend features with backend APIs for seamless user experiences.</li>
                  <li>Established frontend foundations he continues to maintain and expand as a full-stack engineer.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="projects-section">
            <h2>Projects</h2>
            <div className="project-list">
              <div className="project-item">
                <div className="project-header">
                  <h3>SpeakInsights — Natural-Language CSV Analytics</h3>
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
                  A full-stack analytics platform that lets users upload CSVs and ask questions in plain English, generating charts and narrative insights powered by an LLM.
                </p>
                <p className="project-description">
                  Key Features
                </p>
                <ul className="project-bullets">
                  <li>Built natural-language analytics using OpenAI GPT-4 with deterministic Python pipelines (no SQL injection risk).</li>
                  <li>Designed a playbook-based analysis system with 8+ analysis types (stats, correlations, trends, comparisons, etc.).</li>
                  <li>Developed interactive React and TypeScript frontend with dynamic chart rendering.</li>
                  <li>Built FastAPI backend with JWT auth, async processing, and structured error handling.</li>
                  <li>Deployed a production-ready app with CI/CD, automated tests, and multi-tenant data isolation.</li>
                </ul>
              </div>
              <div className="project-item">
                <div className="project-header">
                  <h3>SecuraFlow — ML-Powered Anomaly Detection System</h3>
                  <a
                    href="https://securaflow-frontend.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                </div>
                <p className="project-description">
                  A full-stack production system providing real-time monitoring, security analytics, and ML-based anomaly detection.
                </p>
                <p className="project-description">
                  Key Features
                </p>
                <ul className="project-bullets">
                  <li>Built full-stack platform (FastAPI, React and TypeScript) with anomaly detection using Isolation Forest.</li>
                  <li>Implemented real-time dashboards with live charts, system metrics, and model performance tracking.</li>
                  <li>Deployed using Docker and GitHub Actions with test-gated, automated CI/CD to Render.</li>
                  <li>Added production features: JWT auth, rate limiting, structured logging, PostgreSQL, and robust error handling.</li>
                  <li>Designed complete ML pipeline from feature engineering to real-time inference and evaluation metrics.</li>
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

