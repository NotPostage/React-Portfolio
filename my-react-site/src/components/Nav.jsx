import { useEffect, useState, useRef } from 'react'
import {Link, NavLink} from 'react-router-dom'

import React from 'react'
import './Nav.css' 

function ThemeMenu({ setTheme }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div className="theme-menu" ref={menuRef}>
      <button
        className="nav-button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        Theme
      </button>

      {open && (
        <ul className="theme-dropdown" role="menu">
          <li role="menuitem" onClick={() => setTheme('light')}>
            Light
          </li>
          <li role="menuitem" onClick={() => setTheme('dark')}>
            Dark
          </li>
          <li role="menuitem" onClick={() => setTheme('sepia')}>
            Sepia
          </li>
          <li role="menuitem" onClick={() => setTheme('q')}>
            Graphic Design Is My Passion
          </li>
        </ul>
      )}
    </div>
  )
}

function NavBar({ setTheme }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav nav-left">
        <li>
          <NavLink 
          to='/' 
          className="nav-button"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects' className="nav-button">Projects</NavLink>
        </li>
      </ul>

      <ul className="navbar-nav nav-right">
        <li>
          <ThemeMenu setTheme={setTheme} />
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
