import { FaWater,  FaBuilding, FaExclamationTriangle, FaTint, FaCity } from 'react-icons/fa'

const causes = [
  {
    icon: <FaWater />,
    iconClass: 'danger',
    title: 'Groundwater Extraction',
    description:
      'Excessive pumping of water from underground aquifers for domestic, agricultural, and industrial use causes soil compaction. As water is removed, the pore spaces collapse and the ground sinks.',
  },
  {
    icon: <FaTint />,
    iconClass: 'warning',
    title: 'Natural Compaction',
    description:
      'The natural settling of unconsolidated sediments in the deltaic environment of Hagonoy contributes to gradual subsidence. This process is accelerated by human activities.',
  },
  {
    icon: <FaCity />,
    iconClass: 'info',
    title: 'Urban Development',
    description:
      'Heavy infrastructure and construction projects add weight to the already unstable ground, contributing to localized sinking. Poor drainage systems also worsen the situation.',
  },
]

const effects = [
  {
    icon: <FaWater />,
    iconClass: 'danger',
    title: 'Increased Flooding',
    description:
      'As the land sinks, floodwaters from Manila Bay and seasonal rains become more frequent and severe. Coastal communities experience extended periods of inundation.',
  },
  {
    icon: <FaBuilding />,
    iconClass: 'warning',
    title: 'Infrastructure Damage',
    description:
      'Roads crack, buildings tilt, and bridges become unstable. Foundations shift, utility lines break, and the cost of repairs continues to rise for the municipality.',
  },
  {
    icon: <FaExclamationTriangle />,
    iconClass: 'info',
    title: 'Displacement & Health Risks',
    description:
      'Subsidence leads to forced relocation of families and increased exposure to waterborne diseases. Agricultural land becomes salinized and no longer productive.',
  },
]

export default function CausesEffects() {
  return (
    <div className="fade-in">
      <h2 className="section-title">Causes & Effects</h2>
      <p className="section-subtitle">
        Understanding what drives land subsidence and how it impacts Hagonoy's communities
      </p>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          marginBottom: '24px',
          color: 'var(--accent-light)',
        }}
      >
        ⚠️ Main Causes
      </h3>
      <div className="causes-grid" style={{ marginBottom: '60px' }}>
        {causes.map((c, i) => (
          <div key={i} className="cause-card">
            <div className={`cause-icon ${c.iconClass}`}>{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
          </div>
        ))}
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          marginBottom: '24px',
          color: 'var(--danger)',
        }}
      >
        🌊 Major Effects
      </h3>
      <div className="causes-grid">
        {effects.map((e, i) => (
          <div key={i} className="cause-card">
            <div className={`cause-icon ${e.iconClass}`}>{e.icon}</div>
            <h3>{e.title}</h3>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}