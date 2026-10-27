import React, { useState } from 'react';
import { Send, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    barangay: 'San Jose',
    issueType: 'High-Tide Flooding',
    description: '',
    photoUploaded: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-container form-section">
      <div className="section-header">
        <span className="section-tag">Community Action</span>
        <h2 className="section-title">Report an Environmental Concern</h2>
        <p className="section-description">
          Observed unusual tidal flooding, road cracking, structural settling, or deep well operations in Hagonoy? Submit your report to contribute to community monitoring.
        </p>
      </div>

      <div className="form-card-wrapper">
        {submitted ? (
          <div className="form-success-box">
            <CheckCircle size={56} className="text-green" />
            <h3>Observation Report Submitted!</h3>
            <p>
              Thank you, <strong>{formData.name || 'Concerned Citizen'}</strong>. Your report for <strong>Barangay {formData.barangay}</strong> has been recorded in our mock registry.
            </p>
            <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
              Submit Another Report
            </button>
          </div>
        ) : (
          <form className="report-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name (Optional)</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Maria Santos"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Barangay Location</label>
                <select name="barangay" value={formData.barangay} onChange={handleChange}>
                  <option value="San Jose">San Jose</option>
                  <option value="Mercado">Mercado</option>
                  <option value="Tibaguin">Tibaguin</option>
                  <option value="San Pascual">San Pascual</option>
                  <option value="Poblacion">Poblacion</option>
                  <option value="San Ramon">San Ramon</option>
                  <option value="Other Barangay">Other Barangay in Hagonoy</option>
                </select>
              </div>

              <div className="form-group">
                <label>Category of Issue</label>
                <select name="issueType" value={formData.issueType} onChange={handleChange}>
                  <option value="High-Tide Flooding">High-Tide Flooding</option>
                  <option value="Structural Wall/Road Crack">Structural Wall / Road Crack</option>
                  <option value="Illegal Deep Well Pump">Illegal / Unregistered Deep Well Pump</option>
                  <option value="Water Salinization">Drinking Water Salinization</option>
                  <option value="Dike Breach">Fishpond Dike Breach</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Detailed Observation / Description</label>
              <textarea
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe estimated water height, duration of tide, structural damage, or specific landmark location..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              <Send size={18} /> Submit Incident Report
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
