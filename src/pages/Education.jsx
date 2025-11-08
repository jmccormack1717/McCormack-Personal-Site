import './Page.css'

function Education() {
  return (
    <div className="page">
      <div className="page-container">
        <div className="page-content">
          <section className="education-section">
            <h2>Academic Training</h2>
            <div className="education-list">
              <div className="education-item">
              <div className="education-header">
                <h3>B.S. in Mathematics & Computer Science</h3>
                  <span className="education-date">Expected May 2027</span>
                </div>
                <div className="education-org">University of Wisconsin–Eau Claire</div>
              </div>
            </div>
          </section>

          <section className="education-section">
            <h2>Selected Coursework</h2>
            
            <div className="coursework-subsection">
              <h3>Computer Science:</h3>
              <ul className="coursework-list">
                <li>Algorithms & Data Structures</li>
                <li>Advanced OOP Programming</li>
                <li>Database Systems</li>
                <li>Computer Architecture</li>
                <li>Operating Systems</li>
              </ul>
            </div>

            <div className="coursework-subsection">
              <h3>Mathematics:</h3>
              <ul className="coursework-list">
                <li>Calculus 1-3</li>
                <li>Linear Algebra</li>
                <li>Discrete Mathematics</li>
                <li>Differential Equations</li>
              </ul>
            </div>
          </section>

          <section className="education-section">
            <h2>Independent Learning</h2>
            <p className="reading-subheading">Representative resources:</p>
            <div className="readings-list">
              <div className="reading-item">
                <p className="reading-title">Udemy Data Science Course</p>
              </div>
              <div className="reading-item">
                <p className="reading-title"><em>All of Statistics</em> — Larry Wasserman</p>
              </div>
            </div>
          </section>

          <section className="education-section">
            <h2>Teaching</h2>
            <div className="teaching-list">
              <div className="teaching-item">
                <div className="teaching-header">
                  <h3>Teaching Assistant, UW–Eau Claire Advanced OOP Programming</h3>
                </div>
                <ul className="teaching-bullets">
                  <li>Assisted in course instruction and led lab sessions.</li>
                  <li>Mentored students on programming and problem-solving techniques.</li>
                  <li>Developed experience in teaching, communication, and academic support.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Education

