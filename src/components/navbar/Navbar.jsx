import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Shopur</h1>
        <div className='links'>
            <Link to='/shopur'>Shop</Link>
            <Link to='/cart'>
              Cart
            </Link>
        </div>
    </div>
  )
}

export default Navbar