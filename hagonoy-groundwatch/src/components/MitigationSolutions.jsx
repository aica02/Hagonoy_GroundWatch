import React from 'react';
import { Sprout, Building, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function MitigationSolutions() {
  const solutions = [
    {
      category: 'Community Actions',
      icon: Sprout,
      color: 'green',
      items: [
        { title: 'Rainwater Harvesting', tag: 'Reduces Well Demand' },
        { title: 'Mangrove Reforestation', tag: 'Natural Wave Barrier' },
        { title: 'Citizen Monitoring', tag: 'Tide & Crack Logging' }
      ]
    },
    {
      category: 'Engineering & LGU',
      icon: Building,
      color: 'blue',
      items: [
        { title: 'Bulk Water Supply', tag: 'Replaces Groundwater' },
        { title: 'Aquifer Recharge (MAR)', tag: 'Restores Pore Pressure' },
        { title: 'Ring Dikes & Tidal Gates', tag: 'Prevents High-Tide Surge' }
      ]
    },
    {
      category: 'Policy & Protection',
      icon: ShieldCheck,
      color: 'teal',
      items: [
        { title: 'Deep Well Moratorium', tag: 'NWRB Strict Enforcement' },
        { title: 'Adaptive Zoning Codes', tag: 'Elevated & Floating Design' },
        { title: 'Awareness Campaigns', tag: 'School & LGU Education' }
      ]
    }
  ];

  return (
    <div className="section-container solutions-section">
      <div className="section-header">
        <span className="section-tag">Action Plan</span>
        <h2 className="section-title">Mitigation & Action Framework</h2>
        <p className="section-description">
          Visual solutions guide for sustainable resilience in Hagonoy.
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((col, idx) => {
          const Icon = col.icon;
          return (
            <div key={idx} className="solution-column">
              <div className="column-header">
                <Icon size={28} className={`text-${col.color}`} />
                <h3>{col.category}</h3>
              </div>
              <div className="solution-cards-list">
                {col.items.map((item, iIdx) => (
                  <div key={iIdx} className="solution-visual-item">
                    <div className="sol-icon-bullet">
                      <CheckCircle2 size={18} className={`text-${col.color}`} />
                    </div>
                    <div className="sol-content">
                      <h4>{item.title}</h4>
                      <span className="sol-tag">{item.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}