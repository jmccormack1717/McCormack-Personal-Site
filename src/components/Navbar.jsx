import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/about') {
      return location.pathname === '/about' || location.pathname === '/'
    }
    return location.pathname === path
  }

  const closeMenu = () => setIsMenuOpen(false)

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          James McCormack
        </Link>
        <button
          className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="/about"
              className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className={`navbar-link ${isActive('/experience') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Engineering
            </Link>
          </li>
          <li>
            <Link
              to="/research"
              className={`navbar-link ${isActive('/research') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Research
            </Link>
          </li>
          <li>
            <Link
              to="/academic"
              className={`navbar-link ${isActive('/academic') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Academic
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

