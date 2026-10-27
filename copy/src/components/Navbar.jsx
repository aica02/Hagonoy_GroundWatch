import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGlobeAsia } from 'react-icons/fa'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Causes & Effects', href: '#causes' },
  { label: 'Map', href: '#map' },
  { label: 'Solutions', href: '#mitigation' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Report', href: '#feedback', cta: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="nav-logo">
          <FaGlobeAsia className="nav-logo-icon" />
          <span className="nav-logo-text">Hagonoy<span>GroundWatch</span></span>
        </a>
        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={item.cta ? 'nav-cta' : ''}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}