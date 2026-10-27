import { useState } from 'react'
import {
  FaUsers,
  FaLandmark,
  FaLeaf,
  FaWater,
  FaTree,
  FaRecycle,
  FaHandsHelping,
  FaGavel,
  FaChartLine,
  FaSeedling,
  FaTintSlash,
  FaSolarPanel,
} from 'react-icons/fa'

const tabs = {
  community: {
    label: 'Community Actions',
    icon: <FaUsers />,
    items: [
      {
        icon: <FaHandsHelping />,
        title: 'Community Water Conservation',
        description:
          'Practice water-saving habits at home and organize community campaigns promoting responsible water use. Fix leaks and avoid unnecessary groundwater extraction.',
      },
      {
        icon: <FaSeedling />,
        title: 'Tree Planting & Mangrove Restoration',
        description:
          'Plant trees and restore mangroves along the coast. Mangroves help stabilize soil, reduce erosion, and buffer against storm surges and flooding.',
      },
      {
        icon: <FaTintSlash />,
        title: 'Rainwater Harvesting',
        description:
          'Install rainwater harvesting systems to reduce dependence on groundwater. This provides a sustainable water source while reducing aquifer pressure.',
      },
      {
        icon: <FaRecycle />,
        title: 'Waste Reduction & Recycling',
        description:
          'Proper waste management reduces pollution of water systems. Composting and recycling lessen environmental stress and contribute to healthier soil.',
      },
    ],
  },
  government: {
    label: 'Government Initiatives',
    icon: <FaLandmark />,
    items: [
      {
        icon: <FaGavel />,
        title: 'Regulation of Groundwater Extraction',
        description:
          'Strict enforcement of groundwater extraction regulations, including permits and metering systems, to ensure sustainable aquifer management.',
      },
      {
        icon: <FaChartLine />,
        title: 'Subsidence Monitoring Network',
        description:
          'Installation of monitoring wells and GPS stations to track land subsidence rates and groundwater levels in real-time across vulnerable barangays.',
      },
      {
        icon: <FaWater />,
        title: 'Alternative Water Supply Systems',
        description:
          'Development of surface water treatment facilities and piped water systems to reduce reliance on groundwater for domestic and agricultural use.',
      },
      {
        icon: <FaSolarPanel />,
        title: 'Infrastructure Adaptation',
        description:
          'Elevation of critical infrastructure, improved drainage systems, and flood-resilient building codes to adapt to current and future subsidence.',
      },
    ],
  },
  sustainable: {
    label: 'Sustainable Practices',
    icon: <FaLeaf />,
    items: [
      {
        icon: <FaWater />,
        title: 'Managed Aquifer Recharge',
        description:
          'Artificial recharge of aquifers through infiltration basins and injection wells, using treated surface water to replenish depleted groundwater.',
      },
      {
        icon: <FaTree />,
        title: 'Green Infrastructure',
        description:
          'Implement permeable pavements, rain gardens, and urban green spaces to increase water infiltration and reduce runoff, supporting natural groundwater recharge.',
      },
      {
        icon: <FaSeedling />,
        title: 'Agroforestry & Soil Conservation',
        description:
          'Promote sustainable agricultural practices that maintain soil health and reduce erosion, including crop rotation and organic farming methods.',
      },
      {
        icon: <FaRecycle />,
        title: 'Circular Water Economy',
        description:
          'Treat and reuse wastewater for non-potable purposes, reducing pressure on freshwater sources and promoting a more sustainable water cycle.',
      },
    ],
  },
}

export default function Mitigation() {
  const [activeTab, setActiveTab] = useState('community')

  return (
    <div className="fade-in">
      <h2 className="section-title">Mitigation & Solutions</h2>
      <p className="section-subtitle">
        Collective action is needed to slow down and adapt to land subsidence in Hagonoy
      </p>

      <div className="mitigation-tabs">
        {Object.entries(tabs).map(([key, tab]) => (
          <button
            key={key}
            className={`tab-btn ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="mitigation-content">
        {tabs[activeTab].items.map((item, i) => (
          <div key={i} className="mitigation-item">
            <div className="mitigation-icon">{item.icon}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}