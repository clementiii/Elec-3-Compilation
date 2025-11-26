import './DocumentCard.css'

function DocumentCard({ document, index, onView }) {
  return (
    <article 
      className="document-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-header">
        <span className="card-icon">{document.icon}</span>
        <span className="card-subtitle">{document.subtitle}</span>
      </div>
      
      <h3 className="card-title">{document.title}</h3>
      <p className="card-description">{document.description}</p>
      
      <div className="card-tags">
        {document.tags.map((tag, i) => (
          <span key={i} className="card-tag">{tag}</span>
        ))}
      </div>
      
      <button 
        className="card-button"
        onClick={() => onView(document)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        <span>View Document</span>
      </button>
    </article>
  )
}

export default DocumentCard

