import { Link } from 'react-router-dom'

function HeaderComponent({ user, onLogout }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Student Info App</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/students" className="nav-link">Students</Link>
          {user ? (
            <button onClick={onLogout} className="logout-button">Logout ({user})</button>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default HeaderComponent
