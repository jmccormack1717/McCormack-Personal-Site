import './Page.css'

function Scholarship() {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Scholarship</h1>
        <div className="page-content">
          <section className="scholarship-section">
            <h2>Research & Publications</h2>
            <p>
              My research focuses on advancing machine learning methodologies and their
              practical applications. I explore novel approaches to solving complex problems
              in AI and contribute to the academic community through publications and
              presentations.
            </p>
          </section>

          <section className="scholarship-section">
            <h2>Research Areas</h2>
            <div className="research-areas">
              <div className="research-card">
                <h3>Machine Learning</h3>
                <p>
                  Deep learning architectures, optimization techniques, and neural network
                  design for various applications.
                </p>
              </div>
              <div className="research-card">
                <h3>AI Applications</h3>
                <p>
                  Practical applications of machine learning in real-world scenarios,
                  focusing on scalability and efficiency.
                </p>
              </div>
              <div className="research-card">
                <h3>Algorithm Development</h3>
                <p>
                  Designing and implementing novel algorithms that push the boundaries
                  of what's possible in AI.
                </p>
              </div>
            </div>
          </section>

          <section className="scholarship-section">
            <h2>Publications</h2>
            <div className="publications-list">
              <div className="publication-item">
                <h3>Sample Publication Title</h3>
                <p className="publication-meta">
                  Conference/Journal Name, Year
                </p>
                <p className="publication-authors">
                  Authors: Your Name, Co-Authors
                </p>
                <a href="#" className="publication-link">View Paper</a>
              </div>
              {/* Add more publications as needed */}
            </div>
          </section>

          <section className="scholarship-section">
            <h2>Presentations & Talks</h2>
            <ul className="presentations-list">
              <li>
                <strong>Conference Name</strong> - "Talk Title" (Year)
              </li>
              <li>
                <strong>Workshop Name</strong> - "Presentation Topic" (Year)
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Scholarship

