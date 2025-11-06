import './Page.css'

function Engineering() {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Engineering</h1>
        <div className="page-content">
          <section className="engineering-section">
            <h2>Software Engineering Projects</h2>
            <p>
              I build scalable, maintainable software solutions that solve real-world
              problems. My engineering work spans full-stack development, system design,
              and integrating ML models into production systems.
            </p>
          </section>

          <section className="engineering-section">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>Project Name</h3>
                <p className="project-description">
                  A brief description of your project, its key features, and the
                  technologies used.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">ML</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>

              <div className="project-card">
                <h3>Project Name</h3>
                <p className="project-description">
                  Another impressive project showcasing your engineering skills and
                  problem-solving abilities.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">TensorFlow</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>

              <div className="project-card">
                <h3>Project Name</h3>
                <p className="project-description">
                  A third project demonstrating your versatility and expertise across
                  different domains and technologies.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">Kubernetes</span>
                  <span className="tech-tag">PyTorch</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          </section>

          <section className="engineering-section">
            <h2>Technical Skills</h2>
            <div className="skills-container">
              <div className="skills-category">
                <h3>Languages</h3>
                <div className="skills-list">
                  <span className="skill-item">Python</span>
                  <span className="skill-item">JavaScript</span>
                  <span className="skill-item">TypeScript</span>
                  <span className="skill-item">Java</span>
                  <span className="skill-item">C++</span>
                </div>
              </div>
              <div className="skills-category">
                <h3>Frameworks & Libraries</h3>
                <div className="skills-list">
                  <span className="skill-item">React</span>
                  <span className="skill-item">TensorFlow</span>
                  <span className="skill-item">PyTorch</span>
                  <span className="skill-item">Node.js</span>
                  <span className="skill-item">Django</span>
                </div>
              </div>
              <div className="skills-category">
                <h3>Tools & Technologies</h3>
                <div className="skills-list">
                  <span className="skill-item">Docker</span>
                  <span className="skill-item">Kubernetes</span>
                  <span className="skill-item">AWS</span>
                  <span className="skill-item">Git</span>
                  <span className="skill-item">Linux</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Engineering

