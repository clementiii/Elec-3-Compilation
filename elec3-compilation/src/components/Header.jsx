import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">E3</span>
          <div className="logo-text">
            <span className="logo-title">Elective 3</span>
            <span className="logo-subtitle">Finals Compilation</span>
          </div>
        </div>
        <nav className="nav">
          <a href="#documents" className="nav-link">Documents</a>
          <span className="nav-badge">Finals 2025</span>
        </nav>
      </div>
    </header>
  )
}

export default Header

