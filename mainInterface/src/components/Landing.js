import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Landing.css'

export default function Landing() {
  return (
    <div className="Landing">
      <div className="Landing-container">
        <h1>MakeYourCloth Technologies</h1>
        <h2>Sewing patterns for non-average people*</h2>
        <h3>*Average people don't exist</h3>
        <Link to="/patterns">Browse Patterns</Link>
      </div>
    </div>
  )
}
