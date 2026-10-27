import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function GroundCrossSection() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3
    }
  })

  const layers = [
    { y: 0, color: '#4a3728', height: 0.4, label: 'Topsoil' },
    { y: -0.5, color: '#8B6914', height: 0.5, label: 'Clay Layer' },
    { y: -1.1, color: '#5a7a96', height: 0.6, label: 'Sand & Gravel' },
    { y: -1.8, color: '#1a5276', height: 0.7, label: 'Aquifer (Water)' },
    { y: -2.6, color: '#0e2f44', height: 0.8, label: 'Bedrock' },
  ]

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {layers.map((layer, i) => (
        <mesh key={i} position={[0, layer.y, 0]}>
          <boxGeometry args={[3, layer.height, 3]} />
          <meshStandardMaterial
            color={layer.color}
            roughness={0.8}
            metalness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
      {/* Water extraction pipe effect */}
      <mesh position={[0.8, -1.2, 0.8]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.05, 0.05, 2.5, 8]} />
        <meshStandardMaterial color="#e74c3c" emissive="#e74c3c" emissiveIntensity={0.5} />
      </mesh>
      {/* Cracks on surface */}
      <mesh position={[0, 0.21, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial color="#4a3728" wireframe />
      </mesh>
    </group>
  )
}

export default function AboutSection() {
  return (
    <div className="fade-in">
      <h2 className="section-title">What is Land Subsidence?</h2>
      <p className="section-subtitle">
        Understanding the silent environmental threat beneath our feet
      </p>
      <div className="about-grid">
        <div className="about-visual">
          <Canvas camera={{ position: [4, 2, 4], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} />
            <pointLight position={[-3, 2, 3]} intensity={0.5} color="#e67e22" />
            <GroundCrossSection />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
          </Canvas>
        </div>
        <div className="about-text">
          <h3>The Silent Sinking of Hagonoy</h3>
          <p>
            Land subsidence is the gradual sinking or settling of the Earth's surface.
            In Hagonoy, Bulacan, this phenomenon has been observed since the 1980s and
            continues to threaten the municipality's 26 barangays.
          </p>
          <p>
            The sinking is primarily caused by excessive groundwater extraction, as
            communities and industries pump water from underground aquifers faster than
            nature can recharge them. As the water is removed, the soil layers compact
            and the ground above sinks.
          </p>
          <p>
            Hagonoy's location in the coastal lowlands of Bulacan makes it particularly
            vulnerable. With elevations already near or below sea level, even small
            amounts of subsidence can have devastating effects on flooding, agriculture,
            and infrastructure.
          </p>
          <div className="about-highlight">
            <div>
              <p>
                <strong style={{ color: 'var(--accent-light)' }}>Did you know?</strong>{' '}
                Land subsidence in Hagonoy is estimated at 3–5 cm per year in some areas,
                which is significantly faster than sea-level rise. Combined, these two
                factors create a compounding crisis for coastal communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}