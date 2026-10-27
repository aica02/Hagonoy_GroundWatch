import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, MeshWobbleMaterial, Sparkles } from '@react-three/drei';
import { ArrowDown, Info, ShieldAlert } from 'lucide-react';

function LandSubsidencesModel() {
  const meshRef = useRef();
  const waterRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Simulate gradual sinking/subsidence motion animation in 3D
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * 0.8) * 0.15 - 0.2;
    }
    if (waterRef.current) {
      waterRef.current.position.y = Math.sin(t * 1.2) * 0.08 + 0.3;
    }
  });

  return (
    <group position={[0, -0.5, 0]}>
      {/* Sinking Ground Layer (Topsoil & Coastal Land) */}
      <mesh ref={meshRef} position={[0, -0.2, 0]}>
        <boxGeometry args={[4.2, 0.8, 4.2]} />
        <meshStandardMaterial color="#3d6e42" roughness={0.6} />
      </mesh>

      {/* Groundwater Aquifer Depleted Layer (Subsurface) */}
      <mesh position={[0, -1.1, 0]}>
        <boxGeometry args={[4.0, 1.0, 4.0]} />
        <meshStandardMaterial color="#7c5c43" roughness={0.9} />
      </mesh>

      {/* Encroaching Water Table / Sea Level Rise */}
      <mesh ref={waterRef} position={[0, 0.2, 0]}>
        <boxGeometry args={[4.6, 0.4, 4.6]} />
        <MeshWobbleMaterial color="#0080ff" transparent opacity={0.65} factor={0.4} speed={1.5} />
      </mesh>

      {/* 3D Stylized Houses / Buildings Sinking */}
      <group position={[-1, 0.3, -1]} ref={meshRef}>
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[0.7, 0.6, 0.7]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        <mesh position={[0, 0.75, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[0.6, 0.4, 4]} />
          <meshStandardMaterial color="#c0392b" />
        </mesh>
      </group>

      <group position={[0.8, 0.2, 0.5]}>
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[0.8, 0.7, 0.8]} />
          <meshStandardMaterial color="#f1c40f" />
        </mesh>
        <mesh position={[0, 0.8, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[0.7, 0.4, 4]} />
          <meshStandardMaterial color="#2c3e50" />
        </mesh>
      </group>

      <Sparkles count={40} scale={6} size={3} speed={0.4} color="#00bfff" />
    </group>
  );
}

export default function Hero3D() {
  const [viewMode, setViewMode] = useState('3d');

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-badge">
          <ShieldAlert size={16} />
          <span>Hagonoy Environmental Crisis Awareness</span>
        </div>
        <h1 className="hero-title">
          Hagonoy <span className="highlight-text">GroundWatch</span>
        </h1>
        <p className="hero-subtitle">
          Understanding Land Subsidence & Coastal Flooding in Hagonoy, Bulacan. Exploring roots, community impacts, and sustainable engineering solutions for a resilient future.
        </p>
        
        <div className="hero-actions">
          <a href="#causes-effects" className="btn btn-primary">
            Explore Causes & Effects
          </a>
          <a href="#map" className="btn btn-secondary">
            View Vulnerability Map
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-value">2.5 - 5.0 cm/yr</span>
            <span className="stat-label">Subsidence Rate in Hagonoy</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">26 Barangays</span>
            <span className="stat-label">Vulnerable to Tidal Flooding</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">130,000+</span>
            <span className="stat-label">Affected Residents</span>
          </div>
        </div>
      </div>

      <div className="hero-canvas-wrapper">
        <div className="canvas-header">
          <span className="canvas-title">3D Interactive Land Subsidence Simulation Model</span>
          <span className="canvas-hint">Drag to rotate • Scroll to zoom</span>
        </div>
        <Canvas camera={{ position: [5, 4, 5], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <LandSubsidencesModel />
          <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2.1} minDistance={3} maxDistance={9} />
        </Canvas>
      </div>
    </div>
  );
}
