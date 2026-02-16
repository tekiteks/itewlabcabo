import { Link } from 'react-router-dom'
import StudentComponent from '../components/StudentComponent'

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h2>Welcome to Student Info App</h2>
        <p className="hero-subtitle">Manage your student information with ease</p>
      </div>
      
      <div className="features-section">
        <h3>Features</h3>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">📦</span>
            <h4>Component Usage</h4>
            <p>Reusable React components</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚙️</span>
            <h4>Props & State</h4>
            <p>Data management made easy</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🧭</span>
            <h4>Client Routing</h4>
            <p>Fast page navigation</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔄</span>
            <h4>API Integration</h4>
            <p>Fetch and display data</p>
          </div>
        </div>
      </div>
      
      <div className="featured-section">
        <h3>Featured Student</h3>
        <StudentComponent 
          name="John Doe" 
          course="Computer Science" 
          year={3} 
        />
      </div>
      
      <div className="navigation-links">
        <Link to="/students" className="btn btn-primary btn-large">
          View All Students →
        </Link>
      </div>
    </div>
  )
}

export default Home
