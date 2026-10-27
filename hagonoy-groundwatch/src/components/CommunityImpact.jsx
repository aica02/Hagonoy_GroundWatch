import React from 'react';
import { Users, HeartHandshake, AlertCircle, ShieldX, Home } from 'lucide-react';

export default function CommunityImpact() {
  return (
    <div className="section-container community-section">
      <div className="section-header">
        <span className="section-tag">Human Centric Perspective</span>
        <h2 className="section-title">Community Impact in Hagonoy</h2>
        <p className="section-description">
          Land subsidence is not just a geological phenomenon—it severely degrades daily quality of life, economy, public health, and social stability.
        </p>
      </div>

      <div className="impact-grid">
        <div className="impact-card">
          <div className="impact-number">01</div>
          <h3>Disrupted Education & Public Services</h3>
          <p>
            Schools in coastal barangays like San Jose, Mercado, and Tibaguin frequently suspend classes due to submerged classrooms during morning high tides. Students cross makeshift wooden bridges to attend school.
          </p>
        </div>

        <div className="impact-card">
          <div className="impact-number">02</div>
          <h3>Livelihood Losses in Aquaculture</h3>
          <p>
            Flooding causes fishpond dikes to overflow, resulting in lost milkfish (bangus), tilapia, and prawn stocks. Fisherfolk suffer recurring heavy economic losses during storm surges and high spring tides.
          </p>
        </div>

        <div className="impact-card">
          <div className="impact-number">03</div>
          <h3>Public Health Risks</h3>
          <p>
            Stagnant brackish water creates breeding grounds for mosquitoes and bacterial pathogens, leading to heightened incidence of leptospirosis, skin infections, and waterborne diseases during flood seasons.
          </p>
        </div>

        <div className="impact-card">
          <div className="impact-number">04</div>
          <h3>Displacement & Psychological Toll</h3>
          <p>
            Families experience constant anxiety over high tide schedules and tidal tables. Poor households unable to afford repeated floor elevations are forced into permanent climate displacement.
          </p>
        </div>
      </div>
    </div>
  );
}
