import React from 'react';
import { TrendingDown, Waves, Building2, Eye, ShieldAlert, ArrowDownRight } from 'lucide-react';

export default function Overview() {
  const visualStats = [
    {
      icon: TrendingDown,
      color: 'red',
      value: '3.5 - 5.0 cm',
      unit: '/ year',
      title: 'Annual Sinking Rate',
      badge: 'Critical Hazard',
      desc: 'Ground elevation drops rapidly across coastal barangays.'
    },
    {
      icon: Waves,
      color: 'blue',
      value: '1.2 + meters',
      unit: 'tide height',
      title: 'Daily High Tide Inundation',
      badge: 'Daily Impact',
      desc: 'Seawater floods streets even on bright, sunny days.'
    },
    {
      icon: Building2,
      color: 'amber',
      value: '130,000+',
      unit: 'residents',
      title: 'Vulnerable Population',
      badge: 'Community Risk',
      desc: 'Homes, schools, and roads face structural settlement.'
    }
  ];

  return (
    <div className="section-container overview-section">
      <div className="section-header">
        <span className="section-tag">Environmental Snapshot</span>
        <h2 className="section-title">Visualizing Hagonoy's Land Subsidence</h2>
        <p className="section-description">
          A quick graphical breakdown of the coastal land subsidence crisis in Hagonoy, Bulacan.
        </p>
      </div>

      {/* Visual Metric Highlights */}
      <div className="grid-cards">
        {visualStats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className={`info-card border-top-${item.color}`}>
              <div className="card-top-row">
                <div className={`card-icon-wrapper color-${item.color}`}>
                  <Icon size={28} />
                </div>
                <span className={`stat-badge badge-${item.color}`}>{item.badge}</span>
              </div>
              <div className="visual-number-group">
                <span className="visual-value">{item.value}</span>
                <span className="visual-unit">{item.unit}</span>
              </div>
              <h3 className="visual-card-title">{item.title}</h3>
              <p className="visual-card-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Visual Comparison: Sinking Elevation Progress */}
      <div className="visual-comparison-box">
        <h3 className="comparison-title"><ShieldAlert size={20} /> Sea Level vs. Ground Elevation Progression</h3>
        <div className="elevation-visual-bars">
          <div className="elevation-bar-item">
            <span className="year-label">2000 Baseline</span>
            <div className="visual-ground ground-safe">
              <span>+1.5m Elevation</span>
            </div>
          </div>
          <div className="elevation-bar-item">
            <span className="year-label">2015 Mid-Point</span>
            <div className="visual-ground ground-warning">
              <span>+0.8m Elevation</span>
            </div>
          </div>
          <div className="elevation-bar-item">
            <span className="year-label">Present Day</span>
            <div className="visual-ground ground-critical">
              <ArrowDownRight size={16} />
              <span>+0.2m (High-Tide Submerged)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}