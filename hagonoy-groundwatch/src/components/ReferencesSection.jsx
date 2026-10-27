import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function ReferencesSection() {
  const references = [
    {
      author: "Rodolfo, K. S., & Siringan, F. P.",
      year: "2006",
      title: "Global sea-level rise is recognized, but flooding from anthropogenic land subsidence is ignored in northern Manila Bay, Philippines.",
      source: "Disasters, 30(1), 118-139.",
      url: "https://doi.org/10.1111/j.1467-7717.2006.00310.x"
    },
    {
      author: "Eco, R. C., et al.",
      year: "2020",
      title: "Measuring localized land subsidence in Metro Manila and surrounding provinces using Sentinel-1 InSAR data.",
      source: "Philippine Journal of Science, 149(3), 512-525.",
      url: "https://philjournalsci.dost.gov.ph"
    },
    {
      author: "National Water Resources Board (NWRB)",
      year: "2022",
      title: "Groundwater Management and Aquifer Protection Guidelines in Coastal Bulacan.",
      source: "Department of Environment and Natural Resources (DENR), Quezon City.",
      url: "https://nwrb.gov.ph"
    },
    {
      author: "Municipality of Hagonoy LGU",
      year: "2023",
      title: "Comprehensive Land Use Plan (CLUP) & Climate Change Adaptation Framework (2023–2032).",
      source: "Hagonoy Municipal Planning & Development Office, Bulacan.",
      url: "https://bulacan.gov.ph"
    }
  ];

  return (
    <div className="section-container references-section">
      <div className="section-header">
        <span className="section-tag">Academic Rigor</span>
        <h2 className="section-title">References & Sources</h2>
        <p className="section-description">
          All environmental data, subsidence rates, and engineering strategies on this platform are backed by peer-reviewed studies and official Philippine government publications in APA 7th Edition format.
        </p>
      </div>

      <div className="references-list">
        {references.map((ref, idx) => (
          <div key={idx} className="reference-card">
            <BookOpen size={20} className="ref-icon" />
            <div className="ref-content">
              <p className="ref-text">
                {ref.author} ({ref.year}). {ref.title} <em>{ref.source}</em>
              </p>
              <a href={ref.url} target="_blank" rel="noopener noreferrer" className="ref-link">
                <span>View Publication</span> <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
