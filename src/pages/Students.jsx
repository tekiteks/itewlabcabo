import { useState, useEffect } from 'react'
import StudentComponent from '../components/StudentComponent'

function Students() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      
      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }
      
      const data = await response.json()
      setUsers(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="students-page">
        <h2>Students List</h2>
        <div className="loading">Loading students...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="students-page">
        <h2>Students List</h2>
        <div className="error">Error: {error}</div>
        <button onClick={fetchUsers} className="btn btn-primary">
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="students-page">
      <h2>Students List</h2>
      <p>Total Students: {users.length}</p>
      
      <div className="students-grid">
        {users.slice(0, 6).map((user) => (
          <StudentComponent 
            key={user.id}
            name={user.name}
            course="Computer Science"
            year={Math.floor(Math.random() * 4) + 1}
          />
        ))}
      </div>
    </div>
  )
}

export default Students
