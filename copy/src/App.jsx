import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import AboutSection from './components/AboutSection'
import CausesEffects from './components/CausesEffects'
import SubsidenceVisualizer from './components/SubsidenceVisualizer'
import InteractiveMap from './components/InteractiveMap'
import Mitigation from './components/Mitigation'
import CommunityImpact from './components/CommunityImpact'
import Quiz from './components/Quiz'
import FeedbackForm from './components/FeedbackForm'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Intersection Observer for fade-in animations
  useEffect(() => {
    if (loading) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [loading])

  if (loading) return <LoadingScreen />

  return (
    <div className="app">
      <Navbar />
      <section id="home">
        <Hero3D />
      </section>
      
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card fade-in">
              <div className="stat-number">~5cm</div>
              <div className="stat-label">Annual Subsidence Rate</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-number">54%</div>
              <div className="stat-label">Barangays Affected</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-number">12K+</div>
              <div className="stat-label">Residents at Risk</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-number">1980s</div>
              <div className="stat-label">First Reported Cases</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding">
        <div className="container">
          <AboutSection />
        </div>
      </section>

      <section id="causes" className="section-padding" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <CausesEffects />
        </div>
      </section>

      <section id="visualizer" className="section-padding visualizer-section">
        <div className="container">
          <SubsidenceVisualizer />
        </div>
      </section>

      <section id="map" className="section-padding">
        <div className="container">
          <InteractiveMap />
        </div>
      </section>

      <section id="mitigation" className="section-padding" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <Mitigation />
        </div>
      </section>

      <section id="impact" className="section-padding">
        <div className="container">
          <CommunityImpact />
        </div>
      </section>

      <section id="quiz" className="section-padding quiz-section">
        <div className="container">
          <Quiz />
        </div>
      </section>

      <section id="feedback" className="section-padding">
        <div className="container">
          <FeedbackForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App