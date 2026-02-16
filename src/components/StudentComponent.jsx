import { useState } from 'react'

function StudentComponent({ name, course, year }) {
  const [isEnrolled, setIsEnrolled] = useState(true)
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const toggleEnrollment = () => {
    setIsEnrolled(!isEnrolled)
  }

  return (
    <div className="student-card">
      <h3>Name: {name}</h3>
      <p>Course: {course}</p>
      <p>Year: {year}</p>
      <p>Status: {isEnrolled ? 'Enrolled' : 'Not Enrolled'}</p>
      
      <button onClick={toggleDetails} className="btn btn-primary">
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      
      <button onClick={toggleEnrollment} className="btn btn-secondary">
        {isEnrolled ? 'Unenroll' : 'Enroll'}
      </button>

      {showDetails && (
        <div className="student-details">
          <p><strong>Additional Information:</strong></p>
          <p>Student ID: {Math.floor(Math.random() * 10000)}</p>
          <p>Email: {name.toLowerCase().replace(' ', '.')}@university.edu</p>
        </div>
      )}
    </div>
  )
}

export default StudentComponent
