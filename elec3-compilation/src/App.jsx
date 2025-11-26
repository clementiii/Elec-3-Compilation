import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DocumentGrid from './components/DocumentGrid'
import PDFViewer from './components/PDFViewer'
import Footer from './components/Footer'
import './App.css'

const documents = [
  {
    id: 1,
    title: 'REST API',
    subtitle: 'Assignment #1',
    description: 'Understanding RESTful API architecture, endpoints, and HTTP methods.',
    file: '/docs/assignment-1-rest-api.pdf',
    icon: '🔌',
    tags: ['API', 'Backend', 'HTTP']
  },
  {
    id: 2,
    title: 'AWS Tutorial Guide',
    subtitle: 'Assignment #2',
    description: 'How-To document guide based on the AWS Tutorial video for Beginners.',
    file: '/docs/assignment-2-aws-tutorial.pdf',
    icon: '☁️',
    tags: ['AWS', 'Cloud', 'Tutorial']
  },
  {
    id: 3,
    title: 'Docker & Containerization',
    subtitle: 'Assignment #3',
    description: 'Study of Docker containers and containerization technology.',
    file: '/docs/assignment-3-docker-containerization.pdf',
    icon: '🐳',
    tags: ['Docker', 'DevOps', 'Containers']
  },
  {
    id: 4,
    title: 'Narrative Report',
    subtitle: 'Assignment #4',
    description: 'Comprehensive narrative report on course learnings and experiences.',
    file: '/docs/assignment-4-narrative-report.pdf',
    icon: '📝',
    tags: ['Report', 'Documentation']
  },
  {
    id: 5,
    title: 'Kubernetes Home Lab',
    subtitle: 'Assignment #5',
    description: 'Hands-on Kubernetes home lab activity and deployment exercises.',
    file: '/docs/assignment-5-kubernetes-lab.pdf',
    icon: '⚙️',
    tags: ['Kubernetes', 'DevOps', 'Lab']
  },
  {
    id: 6,
    title: 'Docker Image Lab',
    subtitle: 'Lab Activity',
    description: 'Practical laboratory activity on creating and managing Docker images.',
    file: '/docs/lab-docker-image.pdf',
    icon: '🧪',
    tags: ['Docker', 'Lab', 'Images']
  }
]

function App() {
  const [selectedDoc, setSelectedDoc] = useState(null)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const handleViewDocument = (doc) => {
    setSelectedDoc(doc)
    setIsViewerOpen(true)
  }

  const handleCloseViewer = () => {
    setIsViewerOpen(false)
    setTimeout(() => setSelectedDoc(null), 300)
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero documentCount={documents.length} />
        <DocumentGrid 
          documents={documents} 
          onViewDocument={handleViewDocument} 
        />
      </main>
      <Footer />
      
      {selectedDoc && (
        <PDFViewer 
          document={selectedDoc} 
          isOpen={isViewerOpen}
          onClose={handleCloseViewer} 
        />
      )}
    </div>
  )
}

export default App

