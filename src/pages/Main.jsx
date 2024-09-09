import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div>
        <h1>Invictus Gyms</h1>
        <p>Explore our gyms in Almaty</p>
        <Link to="/gyms">See full list</Link>
    </div>
  )
}

export default Main