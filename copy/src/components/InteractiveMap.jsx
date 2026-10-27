export default function InteractiveMap() {
  return (
    <div className="fade-in">
      <h2 className="section-title">Vulnerability Map</h2>
      <p className="section-subtitle">
        Areas in Hagonoy, Bulacan most vulnerable to land subsidence
      </p>

      <div className="map-grid">
        <div className="map-embed">
          <iframe
            title="Hagonoy, Bulacan Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123449.3221478566!2d120.6817!3d14.8303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33965c3b3b0b0b0b%3A0x0!2sHagonoy%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="map-legend">
          <h3>📍 Vulnerability Levels</h3>
          <div className="legend-item">
            <div className="legend-dot high"></div>
            <span>Coastal barangays (Poblacion, San Jose, Santo Niño)</span>
            <strong>HIGH</strong>
          </div>
          <div className="legend-item">
            <div className="legend-dot high"></div>
            <span>Areas with intensive groundwater extraction</span>
            <strong>HIGH</strong>
          </div>
          <div className="legend-item">
            <div className="legend-dot medium"></div>
            <span>Central barangays with moderate building density</span>
            <strong>MEDIUM</strong>
          </div>
          <div className="legend-item">
            <div className="legend-dot medium"></div>
            <span>Agricultural areas near river systems</span>
            <strong>MEDIUM</strong>
          </div>
          <div className="legend-item">
            <div className="legend-dot low"></div>
            <span>Inland barangays with higher elevation</span>
            <strong>LOW</strong>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: '40px',
          padding: '24px',
          background: 'rgba(230, 126, 34, 0.08)',
          border: '1px solid rgba(230, 126, 34, 0.2)',
          borderRadius: '16px',
        }}
      >
        <h4
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            marginBottom: '12px',
            color: 'var(--accent-light)',
          }}
        >
          🗺️ About This Map
        </h4>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
          The vulnerability map identifies areas in Hagonoy most susceptible to land
          subsidence based on elevation data, groundwater extraction rates, and historical
          flooding records. Coastal barangays face the highest risk due to their low
          elevation and proximity to Manila Bay. Central areas with concentrated
          groundwater use also show significant subsidence rates.
        </p>
      </div>
    </div>
  )
}