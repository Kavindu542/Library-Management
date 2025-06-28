"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/navbar.css"

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header className="header">
      <div className="container header-container">
        {/* Branding */}
        <div className="brand-container">
          <Link to="/" className="brand-link">
            {/* Logo placeholder */}
            <span className="brand-logo" style={{marginRight: '0.5rem'}}>📚</span>
            <span className="brand-text">LMS Portal</span>
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <button className="hamburger" onClick={toggleMobileMenu} aria-label="Open menu">
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
        {/* Navigation */}
        <nav className={`nav ${isMobileMenuOpen ? 'nav-mobile-open' : ''}`}> 
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/instructors" className="nav-link">Instructors</Link>
          <Link to="/about" className="nav-link">About</Link>
          <div className="dropdown">
            <button type="button" onClick={toggleDropdown} className="dropdown-button">
              <span>More</span>
              <svg className="dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-menu-inner">
                  <Link to="/library" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Library</Link>
                  <Link to="/pricing" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Pricing</Link>
                  <Link to="/faq" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>FAQ</Link>
                  <Link to="/contact" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Contact</Link>
                </div>
              </div>
            )}
          </div>
        </nav>
        {/* CTA Button */}
        <div className="button-container">
          <button type="button" className="button">Get Started</button>
        </div>
      </div>
    </header>
  )
}