import React, { useState } from 'react';
import { Droplets, Factory, Layers, Waves, AlertTriangle, Home, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CausesEffects() {
  const [activeTab, setActiveTab] = useState('causes');

  const causesVisual = [
    {
      icon: Droplets,
      title: '1. Over-Pumping',
      subtitle: 'Deep Well Extraction',
      badge: 'Human Driver',
      color: 'cyan',
      steps: ['Unregulated fishpond pumps', 'Aquifer water depletion', 'Pore pressure drop']
    },
    {
      icon: Layers,
      title: '2. Clay Compaction',
      subtitle: 'Deltaic Sediment Settling',
      badge: 'Geological Factor',
      color: 'amber',
      steps: ['Soft deltaic silt layer', 'Underground pore collapse', 'Permanent ground sinking']
    },
    {
      icon: Factory,
      title: '3. Land Conversion',
      subtitle: 'Aquaculture Expansion',
      badge: 'Environmental Factor',
      color: 'orange',
      steps: ['Mangrove forest removal', 'Loss of natural sea buffers', 'Increased coastal vulnerability']
    }
  ];

  const effectsVisual = [
    {
      icon: Waves,
      title: 'Sunshine Flooding',
      tag: 'Daily Occurrence',
      impact: 'High',
      desc: 'High tides enter streets and homes without any rainfall.'
    },
    {
      icon: AlertTriangle,
      title: 'Saltwater Intrusion',
      tag: 'Water Security',
      impact: 'Critical',
      desc: 'Seawater contaminates freshwater wells and agricultural soils.'
    },
    {
      icon: Home,
      title: 'Sunken Houses',
      tag: 'Infrastructure Damage',
      impact: 'High',
      desc: 'Road height elevations force home ground floors below street level.'
    }
  ];

  return (
    <div className="section-container causes-effects-section">
      <div className="section-header">
        <span className="section-tag">Visual Breakdown</span>
        <h2 className="section-title">Causes & Environmental Effects</h2>
        <p className="section-description">
          Explore the interactive visual chains driving land subsidence in Hagonoy.
        </p>
      </div>

      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === 'causes' ? 'active' : ''}`}
          onClick={() => setActiveTab('causes')}
        >
          Root Causes Process
        </button>
        <button
          className={`tab-btn ${activeTab === 'effects' ? 'active' : ''}`}
          onClick={() => setActiveTab('effects')}
        >
          Environmental Effects
        </button>
      </div>

      {activeTab === 'causes' ? (
        <div className="causes-visual-grid">
          {causesVisual.map((cause, idx) => {
            const Icon = cause.icon;
            return (
              <div key={idx} className="cause-visual-card">
                <div className="card-badge-row">
                  <span className={`cause-tag tag-${cause.color}`}>{cause.badge}</span>
                </div>
                <div className="cause-icon-head">
                  <Icon size={36} className={`text-${cause.color}`} />
                  <div>
                    <h3>{cause.title}</h3>
                    <span className="cause-sub">{cause.subtitle}</span>
                  </div>
                </div>
                <div className="process-chain">
                  {cause.steps.map((step, sIdx) => (
                    <div key={sIdx} className="process-step">
                      <CheckCircle2 size={16} className={`text-${cause.color}`} />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="effects-visual-grid">
          {effectsVisual.map((eff, idx) => {
            const Icon = eff.icon;
            return (
              <div key={idx} className="effect-visual-card">
                <div className="effect-top">
                  <Icon size={32} className="text-cyan" />
                  <span className="impact-pill">{eff.impact} Impact</span>
                </div>
                <h3>{eff.title}</h3>
                <span className="effect-tag-label">{eff.tag}</span>
                <p>{eff.desc}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}