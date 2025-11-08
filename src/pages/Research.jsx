import './Page.css'

function Research() {
  return (
    <div className="page">
      <div className="page-container">
        <div className="page-content">
          <section className="research-section">
            <h2>Overview</h2>
            <p className="research-overview">
              James McCormack applies machine learning and AI to biomedical and healthcare problems, with a focus on probabilistic modeling, data mining, and interpretability. His work combines advanced computational methods with practical applications, aiming to produce explainable, reliable, and actionable results for clinical and scientific decision-making.
            </p>
          </section>

          <section className="research-section">
            <h2>Formal Outcomes</h2>
            
            <div className="outcomes-subsection">
              <h3>Publications</h3>
              <div className="publications-list">
                <div className="publication-item">
                  <p className="publication-citation">
                    <strong>McCormack, J.</strong> and <strong>Seliya, J.</strong> (2025). Integrating Socioeconomic Determinants with Medical Risk Factors for Diabetes. <em>ISSAT RQD</em>.
                  </p>
                  <p className="publication-description">
                    Explored feature importance and interpretability in diabetes prediction models, integrating socioeconomic and clinical factors for actionable insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="outcomes-subsection">
              <h3>Posters / Presentations</h3>
              <div className="posters-list">
                <div className="poster-item">
                  <p className="poster-title">A Deeper Look into Attributes for Diabetes Prediction</p>
                  <p className="poster-meta">Poster • CERCA 2025</p>
                </div>
                <div className="poster-item">
                  <p className="poster-title">A Deeper Look into Attributes for Diabetes Prediction</p>
                  <p className="poster-meta">Poster • NCUR 2025</p>
                </div>
                <div className="poster-item">
                  <p className="poster-title">Integrating Socioeconomic Determinants with Medical Risk Factors for Diabetes</p>
                  <p className="poster-meta">Talk • ISSAT RQD 2025</p>
                </div>
              </div>
            </div>
          </section>

          <section className="research-section">
            <h2>Ongoing Projects</h2>
            <div className="wip-list">
              <div className="wip-item">
                <h3>Clinical Text Summarization (NLP)</h3>
                <p className="wip-description">
                  Implemented Large Language Models (LLMs) for summarizing clinical notes. Manuscript received minor revisions and is expected to be published at an upcoming venue. Emphasizes reliability of LLMs in real-world clinical applications.
                </p>
              </div>
              <div className="wip-item">
                <h3>Probabilistic Graph Neural Networks (GNNs)</h3>
                <p className="wip-description">
                  Investigating probabilistic GNN architectures for modeling complex relationships in biomedical data. Focused on uncertainty estimation, interpretable predictive modeling, and novel graph-based approaches.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Research

