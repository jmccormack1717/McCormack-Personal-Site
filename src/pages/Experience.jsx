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
                  <li>Designed and implemented user-facing components using React and TypeScript, ensuring responsiveness and visual appeal.</li>
                  <li>Developed backend features, maintained databases, and performed complex queries using Python and Neo4j.</li>
                  <li>Supported user authentication flows and integrated APIs for secure and seamless functionality.</li>
                  <li>Participated in the company rebranding process, contributing to the UI/UX overhaul and maintaining consistency across products.</li>
                  <li>Maintained and improved existing software by identifying and fixing bugs, optimizing performance, and enhancing reliability.</li>
                  <li>Collaborated across design and engineering teams to translate product vision into practical, high-quality solutions.</li>
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

