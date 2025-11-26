import DocumentCard from './DocumentCard'
import './DocumentGrid.css'

function DocumentGrid({ documents, onViewDocument }) {
  return (
    <section id="documents" className="documents-section">
      <div className="documents-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-icon">📂</span>
            <span>Course Materials</span>
          </div>
          <h2 className="section-title">Documentation</h2>
          <p className="section-description">
            Click on any document to view it directly in the browser
          </p>
        </div>
        
        <div className="documents-grid">
          {documents.map((doc, index) => (
            <DocumentCard 
              key={doc.id}
              document={doc}
              index={index}
              onView={onViewDocument}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DocumentGrid

