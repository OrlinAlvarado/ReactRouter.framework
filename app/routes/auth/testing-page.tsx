import React from 'react'
import { Link } from 'react-router'

const TestingPage = () => {
  return (
    <>
    <div>TestingPage</div>
    <Link to="/auth/login" className="text-sm text-muted-foreground hover:text-primary">Back to Login</Link>
    </>

  )
}

export default TestingPage