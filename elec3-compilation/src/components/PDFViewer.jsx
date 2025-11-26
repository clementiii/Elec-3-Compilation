import { useState, useEffect } from 'react'
import './PDFViewer.css'

function PDFViewer({ document: doc, isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = 'hidden'
      setIsLoading(true)
      // Give time for the PDF to load
      const timer = setTimeout(() => setIsLoading(false), 1500)
      return () => clearTimeout(timer)
    }
    return () => {
      window.document.body.style.overflow = ''
    }
  }, [isOpen, doc])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className={`pdf-viewer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="pdf-viewer-container" onClick={(e) => e.stopPropagation()}>
        <header className="pdf-viewer-header">
          <div className="pdf-viewer-info">
            <span className="pdf-viewer-icon">{doc.icon}</span>
            <div className="pdf-viewer-text">
              <h3 className="pdf-viewer-title">{doc.title}</h3>
              <span className="pdf-viewer-subtitle">{doc.subtitle}</span>
            </div>
          </div>
          
          <div className="pdf-viewer-actions">
            <a 
              href={doc.file} 
              download 
              className="pdf-action-btn download"
              title="Download PDF"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
            <a 
              href={doc.file} 
              target="_blank" 
              rel="noopener noreferrer"
              className="pdf-action-btn external"
              title="Open in new tab"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
            <button 
              className="pdf-action-btn close"
              onClick={onClose}
              title="Close (Esc)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </header>
        
        <div className="pdf-viewer-content">
          {isLoading && (
            <div className="pdf-loading">
              <div className="pdf-loading-spinner"></div>
              <span>Loading document...</span>
            </div>
          )}
          <object
            data={doc.file}
            type="application/pdf"
            className="pdf-object"
          >
            <div className="pdf-fallback">
              <p>Unable to display PDF in browser.</p>
              <a href={doc.file} target="_blank" rel="noopener noreferrer" className="pdf-fallback-link">
                Click here to open the PDF
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  )
}

export default PDFViewer
