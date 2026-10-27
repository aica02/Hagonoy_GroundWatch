import React, { useState, useEffect } from 'react';
import { Waves, ShieldAlert, MapPin, Lightbulb, HelpCircle, MessageSquareText, BookOpen, Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Waves },
    { id: 'causes-effects', label: 'Causes & Effects', icon: ShieldAlert },
    { id: 'impact', label: 'Community Impact', icon: ShieldAlert },
    { id: 'map', label: 'Vulnerability Map', icon: MapPin },
    { id: 'solutions', label: 'Solutions', icon: Lightbulb },
    { id: 'quiz', label: 'Interactive Quiz', icon: HelpCircle },
    { id: 'reporting', label: 'Report Issue', icon: MessageSquareText },
    { id: 'references', label: 'References', icon: BookOpen },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand" onClick={() => handleNavClick('home')}>
          <div className="brand-icon">
            <Waves size={26} className="waves-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-title">Hagonoy</span>
            <span className="brand-subtitle">GroundWatch</span>
          </div>
        </div>

        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
