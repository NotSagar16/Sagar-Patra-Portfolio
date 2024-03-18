"use client";
import React from 'react'
import './navbar.css'

const Navbar = () => {
    
  return (
    <div className='navbar'>
        <div className='logo'>
            <h1 href="/">Sagar Patra</h1>
        </div>
        <div className='navList'>
            <button><a href="/resume/resume.pdf" target="_blank">My Resume</a></button>
        </div>
    </div>
  )
}

export default Navbar