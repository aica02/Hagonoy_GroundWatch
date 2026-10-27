import { useState } from 'react'
import { FaCheckCircle, FaShieldAlt, FaClock, FaUsers } from 'react-icons/fa'

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    barangay: '',
    type: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, connect to Google Forms or a backend API
    setSubmitted(true)
  }

  return (
    <div className="fade-in">
      <h2 className="section-title">Community Reporting</h2>
      <p className="section-subtitle">
        Report observations, concerns, or environmental issues related to land subsidence
      </p>

      <div className="feedback-grid">
        <div className="feedback-info">
          <h3>Your Voice Matters</h3>
          <p>
            Help us build a comprehensive picture of land subsidence in Hagonoy. Your
            reports provide valuable data for researchers, local government, and
            community organizations working to address this issue.
          </p>
          <ul className="feedback-features">
            <li>
              <FaShieldAlt />
              <span>
                <strong>Anonymous option available</strong> — Share your observations
                without revealing personal information.
              </span>
            </li>
            <li>
              <FaClock />
              <span>
                <strong>Quick and easy</strong> — The form takes less than 2 minutes to
                complete.
              </span>
            </li>
            <li>
              <FaUsers />
              <span>
                <strong>Community-driven</strong> — Your reports help create a collective
                database of subsidence evidence.
              </span>
            </li>
          </ul>
          <div
            style={{
              marginTop: '24px',
              padding: '16px',
              background: 'rgba(39, 174, 96, 0.08)',
              border: '1px solid rgba(39, 174, 96, 0.2)',
              borderRadius: '12px',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: 'var(--success)' }}>Note:</strong> This is a
            functional prototype form. In a production environment, submissions would be
            integrated with a Google Form or secure database for data collection and
            analysis.
          </div>
        </div>

        <div className="feedback-form">
          {submitted ? (
            <div className="form-success">
              <FaCheckCircle style={{ fontSize: '3rem', color: 'var(--success)', marginBottom: '16px' }} />
              <h3>Report Submitted Successfully!</h3>
              <p>
                Thank you for contributing to our community database. Your observations
                will help raise awareness and support mitigation efforts in Hagonoy.
              </p>
              <button
                className="btn-primary"
                style={{ marginTop: '24px' }}
                onClick={() => {
                  setSubmitted(false)
                  setFormData({ name: '', email: '', barangay: '', type: '', message: '' })
                }}
              >
                Submit Another Report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name (Optional)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="barangay">Barangay *</label>
                <select
                  id="barangay"
                  name="barangay"
                  value={formData.barangay}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your barangay</option>
                  {[
                    'Poblacion',
                    'San Jose',
                    'Santo Niño',
                    'San Pedro',
                    'Santa Elena',
                    'San Isidro',
                    'San Juan',
                    'San Miguel',
                    'Santa Monica',
                    'Santiago',
                    'Santo Rosario',
                    'Other',
                  ].map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="type">Type of Report *</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select report type</option>
                  <option value="flooding">Flooding Observation</option>
                  <option value="crack">Ground Cracks / Sinking</option>
                  <option value="infrastructure">Infrastructure Damage</option>
                  <option value="water">Water Quality / Supply Issue</option>
                  <option value="other">Other Concern</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Description *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe what you observed or experienced. Include location details if possible..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Submit Report →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}