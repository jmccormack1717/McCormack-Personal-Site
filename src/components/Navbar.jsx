import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/about'
    }
    return location.pathname === path
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          McCormack
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link
              to="/about"
              className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/scholarship"
              className={`navbar-link ${isActive('/scholarship') ? 'active' : ''}`}
            >
              Scholarship
            </Link>
          </li>
          <li>
            <Link
              to="/engineering"
              className={`navbar-link ${isActive('/engineering') ? 'active' : ''}`}
            >
              Engineering
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

