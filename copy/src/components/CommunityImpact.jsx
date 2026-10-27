import { FaWater, FaHome, FaSeedling, FaHeartbeat } from 'react-icons/fa'

const impacts = [
  {
    icon: <FaWater />,
    iconClass: 'flood',
    title: 'Perpetual Flooding',
    description:
      'Barangays near the coast and river systems experience chronic flooding even during ordinary high tides. Families wade through water to reach schools, markets, and workplaces, disrupting daily life and local commerce.',
  },
  {
    icon: <FaHome />,
    iconClass: 'infra',
    title: 'Damaged Homes & Infrastructure',
    description:
      'Cracks in walls and foundations are common sights. Some houses tilt as the ground beneath them sinks unevenly. Roads buckle and bridges weaken, making transportation dangerous and costly.',
  },
  {
    icon: <FaSeedling />,
    iconClass: 'agri',
    title: 'Agricultural Loss',
    description:
      'Saltwater intrusion caused by subsidence contaminates rice fields and fish ponds. Farmers and fisherfolk—the backbone of Hagonoys economy—face declining yields and loss of livelihood.',
  },
  {
    icon: <FaHeartbeat />,
    iconClass: 'health',
    title: 'Health & Displacement',
    description:
      'Standing floodwater breeds mosquitoes and spreads waterborne diseases. As homes become uninhabitable, families are forced to relocate, breaking apart tightly-knit communities.',
  },
]

export default function CommunityImpact() {
  return (
    <div className="fade-in">
      <h2 className="section-title">Community Impact</h2>
      <p className="section-subtitle">
        How land subsidence affects the daily lives of Hagonoeños
      </p>

      <div className="impact-grid">
        {impacts.map((impact, i) => (
          <div key={i} className="impact-card">
            <div className={`icon-wrap ${impact.iconClass}`}>{impact.icon}</div>
            <div>
              <h4>{impact.title}</h4>
              <p>{impact.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '40px',
          padding: '32px',
          background: 'rgba(52, 152, 219, 0.06)',
          border: '1px solid rgba(52, 152, 219, 0.15)',
          borderRadius: '16px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            fontStyle: 'italic',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          "The ground beneath our feet is changing. What was once solid land is now
          becoming part of the sea. We need to act together—for our children, for
          our community, and for the future of Hagonoy."
        </p>
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            marginTop: '12px',
          }}
        >
          — A concerned resident of Hagonoy, Bulacan
        </p>
      </div>
    </div>
  )
}