import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Info } from 'lucide-react';
import L from 'leaflet';

// Fix Leaflet marker icon paths for React Vite projects
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

export default function InteractiveMap() {
  const [selectedBarangay, setSelectedBarangay] = useState(null);

  // Center coordinates for Hagonoy, Bulacan
  const hagonoyCenter = [14.8347, 120.7303];

  const barangays = [
    {
      id: 'san-jose',
      name: 'Barangay San Jose',
      riskLevel: 'Extreme High',
      subsidenceRate: '4.8 cm/year',
      elevation: '0.2m above sea level',
      description:
        'One of the most severely impacted coastal barangays. Inundated during daily high tides exceeding 1.2 meters.',
      latLng: [14.8210, 120.7250],
    },
    {
      id: 'mercado',
      name: 'Barangay Mercado',
      riskLevel: 'High',
      subsidenceRate: '3.9 cm/year',
      elevation: '0.5m above sea level',
      description:
        'Commercial and residential zone suffering frequent road submersions and structural settling.',
      latLng: [14.8360, 120.7330],
    },
    {
      id: 'tibaguin',
      name: 'Barangay Tibaguin',
      riskLevel: 'Extreme High',
      subsidenceRate: '5.1 cm/year',
      elevation: '0.1m above sea level',
      description:
        'Island coastal community highly exposed to Manila Bay tidal waves, storm surges, and aquifer depletion.',
      latLng: [14.7820, 120.7180],
    },
    {
      id: 'san-pascual',
      name: 'Barangay San Pascual',
      riskLevel: 'High',
      subsidenceRate: '3.6 cm/year',
      elevation: '0.6m above sea level',
      description:
        'Vast fishpond areas with severe dike failures due to rapid land settlement.',
      latLng: [14.8150, 120.7450],
    },
    {
      id: 'poblacion',
      name: 'Barangay Poblacion',
      riskLevel: 'Moderate-High',
      subsidenceRate: '2.8 cm/year',
      elevation: '1.1m above sea level',
      description:
        'Town center experiencing recurring rainwater ponding and river overflow during rainy season.',
      latLng: [14.8347, 120.7303],
    },
  ];

  return (
    <div className="section-container map-section">
      <div className="section-header">
        <span className="section-tag">Geospatial Awareness</span>
        <h2 className="section-title">Vulnerability & Risk Hotspots Map</h2>
        <p className="section-description">
          Interactive spatial map showing vulnerable barangays in Hagonoy, Bulacan prone to severe land subsidence and daily high-tide flooding. Click on any marker to inspect local data.
        </p>
      </div>

      <div className="map-layout">
        <div className="interactive-map-box">
          <MapContainer
            center={hagonoyCenter}
            zoom={12}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%', borderRadius: '12px' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {barangays.map((b) => (
              <Marker
                key={b.id}
                position={b.latLng}
                eventHandlers={{
                  click: () => setSelectedBarangay(b),
                }}
              >
                <Popup>
                  <strong>{b.name}</strong>
                  <br />
                  Risk Level: {b.riskLevel}
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          <div className="map-legend">
            <h4>Risk Legend</h4>
            <div className="legend-item">
              <span className="badge-dot extreme"></span> Extreme Risk (&gt;4.0 cm/yr)
            </div>
            <div className="legend-item">
              <span className="badge-dot high"></span> High Risk (2.5 - 4.0 cm/yr)
            </div>
            <div className="legend-item">
              <span className="badge-dot moderate"></span> Moderate Risk (&lt;2.5 cm/yr)
            </div>
          </div>
        </div>

        <div className="map-details-card">
          {selectedBarangay ? (
            <div>
              <span className="details-tag">{selectedBarangay.riskLevel} Risk Zone</span>
              <h3 className="details-title">{selectedBarangay.name}</h3>
              <div className="details-stats">
                <div className="d-stat">
                  <span className="label">Subsidence Rate:</span>
                  <span className="value text-red">{selectedBarangay.subsidenceRate}</span>
                </div>
                <div className="d-stat">
                  <span className="label">Ground Elevation:</span>
                  <span className="value">{selectedBarangay.elevation}</span>
                </div>
              </div>
              <p className="details-desc">{selectedBarangay.description}</p>
            </div>
          ) : (
            <div className="placeholder-details">
              <Info size={40} className="text-muted" />
              <h3>Select a Barangay Marker</h3>
              <p>Click on any marker on the map to view detailed risk statistics and subsidence estimates.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}