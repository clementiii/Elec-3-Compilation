import './Hero.css'

function Hero({ documentCount }) {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          <span>Clement Harold Miguel Cabus | IV-ACSAD</span>
        </div>
        
        <h1 className="hero-title">
          <span className="hero-title-line">Elective 3</span>
          <span className="hero-title-accent">Finals Portfolio</span>
        </h1>
        
        <p className="hero-description">
          A curated collection of assignments and laboratory activities 
          covering modern software development concepts including REST APIs, 
          Cloud Computing, Docker, and Kubernetes.
        </p>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">{documentCount}</span>
            <span className="stat-label">Documents</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-value">5</span>
            <span className="stat-label">Assignments</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-value">1</span>
            <span className="stat-label">Lab Activity</span>
          </div>
        </div>

        <a href="#documents" className="hero-cta">
          <span>View Documents</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
      
      <div className="hero-decoration">
        <div className="decoration-circle decoration-circle-1"></div>
        <div className="decoration-circle decoration-circle-2"></div>
        <div className="decoration-line"></div>
      </div>
    </section>
  )
}

export default Hero

