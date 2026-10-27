import { FaGlobeAsia, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'

const references = [
  {
    id: 1,
    text: 'Philippine Institute of Volcanology and Seismology (PHIVOLCS). (2020). Land subsidence in Central Luzon.',
  },
  {
    id: 2,
    text: 'National Water Resources Board. (2019). Groundwater management in Bulacan Province.',
  },
  {
    id: 3,
    text: 'Environmental Management Bureau. (2021). Coastal vulnerability assessment of Hagonoy, Bulacan.',
  },
  {
    id: 4,
    text: 'Municipal Government of Hagonoy. (2022). Comprehensive land use plan 2020-2030.',
  },
]

export default function Footer() {
  return (
    <>
      <section id="references" className="section-padding" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <h2 className="section-title">References</h2>
          <p className="section-subtitle">
            Sources and literature used in developing this awareness platform
          </p>
          <div className="references-list">
            {references.map((ref) => (
              <div key={ref.id} className="reference-item fade-in">
                <span className="ref-number">[{ref.id}]</span>
                {ref.text}
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              marginTop: '24px',
            }}
          >
            All references follow APA 7th Edition format. For full citations, please refer
            to the project documentation.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-logo" style={{ marginBottom: '8px' }}>
                <FaGlobeAsia className="nav-logo-icon" />
                <span className="nav-logo-text">
                  Hagonoy<span>GroundWatch</span>
                </span>
              </div>
              <p>
                A community-based environmental awareness platform dedicated to
                understanding and addressing land subsidence in Hagonoy, Bulacan.
              </p>
            </div>
            <div className="footer-col">
              <h4>Learn</h4>
              <ul>
                <li><a href="#about">About Subsidence</a></li>
                <li><a href="#causes">Causes & Effects</a></li>
                <li><a href="#impact">Community Impact</a></li>
                <li><a href="#references">References</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Act</h4>
              <ul>
                <li><a href="#mitigation">Solutions</a></li>
                <li><a href="#quiz">Take the Quiz</a></li>
                <li><a href="#feedback">Report an Issue</a></li>
                <li><a href="#map">Vulnerability Map</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#" aria-label="Facebook">
                    <FaFacebook style={{ marginRight: '6px' }} /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter">
                    <FaTwitter style={{ marginRight: '6px' }} /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Email">
                    <FaEnvelope style={{ marginRight: '6px' }} /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Hagonoy GroundWatch. Educational project for
              environmental awareness.
            </p>
            <p>
              Made with <span className="heart">♥</span> for Hagonoy, Bulacan
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}