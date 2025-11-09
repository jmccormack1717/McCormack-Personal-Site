import './Page.css'

function About() {
  return (
    <div className="page">
      <div className="page-container">
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src="/profile.jpg" 
              alt="James McCormack" 
              className="about-image"
            />
          </div>
          <div className="about-text">
            <p>
              James McCormack is a Software Engineer and AI/ML Researcher pursuing a double major in Mathematics and Computer Science at the University of Wisconsin–Eau Claire. Grounded in applied mathematics through both formal coursework and self-directed study, he tackles challenging problems across software engineering, data science, and AI/ML.
            </p>
            <p>
              His research focuses on developing interpretable machine learning methods for biomedical informatics, transforming complex data into actionable insights for scientific and clinical decision-making.
            </p>
            <p>
            James combines his experience in professional software development, AI/ML research, and self-directed projects to design, plan, and deliver end-to-end solutions, or contribute effectively at any stage of technical execution.
            </p>
            <p>
            He values versatility and enjoys contributing across disciplines. James welcomes collaborations on industry or applied projects and is open to graduate research opportunities in AI/ML and biomedical informatics.
            </p>
          </div>
          
          <div className="contact-section">
            <h2>Connect</h2>
            <div className="contact-links">
              <a 
                href="https://www.linkedin.com/in/james-mccormack-95634035a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="https://github.com/jmccormack1717" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a 
                href="mailto:jamesm1792@gmail.com" 
                className="contact-link"
              >
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

