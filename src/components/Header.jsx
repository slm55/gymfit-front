import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-between'>
      <h1>Invictus Gyms</h1>
      <nav>
        <ul className='flex space-x-2'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav> 
      
      <Link>Войти</Link>
    </header>
  )
}

export default Header