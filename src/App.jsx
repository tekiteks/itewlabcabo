import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import Home from './pages/Home'
import Students from './pages/Students'
import Login from './pages/Login'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = (username) => {
    setUser(username)
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="app">
      <HeaderComponent user={user} onLogout={handleLogout} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
