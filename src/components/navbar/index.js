import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export function Navbar() {
  const [isActive, setActive] = useState(false)
  const activeClass = isActive ? 'is-active' : ''
  const closeDropdown = () => {
    setActive(false)
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </Link>

        <a
          role="button"
          className={`navbar-burger burger ${activeClass}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setActive(!isActive)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${activeClass}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item" onClick={closeDropdown}>
            Home
          </Link>
          <Link to="/sample" className="navbar-item" onClick={closeDropdown}>
            Sample
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Dropdown sample</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
