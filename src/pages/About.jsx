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
              James McCormack is a Mathematics and Computer Science double major at the University of Wisconsin–Eau Claire, with training in both rigorous theory and programming fundamentals. He is interested in working across cutting-edge data, artificial intelligence, and software engineering opportunities, applying his diverse skill set to tackle complex problems.
            </p>
            <p>
              His research focuses on AI and machine learning, particularly for healthcare and biomedical applications. James is committed to applying state-of-the-art methods to real-world problems, utilizing approaches that are interpretable, reliable, and actionable for clinical and scientific decision-making.
            </p>
            <p>
              In addition to his research, James has strong skills in full-stack development, machine learning pipelines, and data analysis. While his professional software engineering experience is just beginning, he has contributed to several research, industry, and personal projects that demonstrate practical application of these skills.
            </p>
            <p>
              Passionate about innovation at the forefront of computation, James thrives in environments where he can wear multiple hats, combining research, engineering, and data-driven problem solving. He is exploring opportunities to advance knowledge through graduate study while continuing to apply his skills in real-world settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

