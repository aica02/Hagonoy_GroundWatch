import React from 'react';
import { Waves, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand-icon">
            <Waves size={24} />
          </div>
          <span className="brand-title">Hagonoy GroundWatch</span>
        </div>
        <p className="footer-text">
          A Community-Based Web Environmental Awareness Platform dedicated to educating and empowering the citizens of Hagonoy, Bulacan regarding land subsidence and tidal adaptation.
        </p>
        <p className="copyright">
          &copy; 2026 Hagonoy GroundWatch Project • EnvirSci Final Course Output
        </p>
      </div>
    </footer>
  );
}
