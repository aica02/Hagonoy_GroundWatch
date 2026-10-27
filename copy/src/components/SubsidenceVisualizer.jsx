import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Text } from '@react-three/drei'
import * as THREE from 'three'

function GroundBlock({ sink, color = '#4a3728' }) {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        -sink * 0.5,
        0.05
      )
    }
  })

  return (
    <mesh ref={meshRef} position={[0, -sink * 0.5, 0]} castShadow receiveShadow>
      <boxGeometry args={[4, 0.6, 4]} />
      <meshStandardMaterial color={color} roughness={0.9} metalness={0.1} />
    </mesh>
  )
}

function Building({ position, sink, color = '#e67e22' }) {
  const meshRef = useRef()
  const initialY = position[1]

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        initialY - sink * 0.5,
        0.05
      )
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        sink * 0.03,
        0.05
      )
    }
  })

  return (
    <mesh ref={meshRef} position={position} castShadow>
      <boxGeometry args={[0.4, 1.2, 0.4]} />
      <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} />
    </mesh>
  )
}

function WaterTable({ sink }) {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        -2 + sink * 0.3,
        0.05
      )
    }
  })

  return (
    <mesh ref={meshRef} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial
        color="#3498db"
        transparent
        opacity={0.35}
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  )
}

function CrackLines({ sink }) {
  const linesRef = useRef()

  useFrame(() => {
    if (linesRef.current) {
      linesRef.current.scale.setScalar(1 + sink * 0.02)
    }
  })

  const points = []
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2
    const x = Math.cos(angle) * 1.5
    const z = Math.sin(angle) * 1.5
    points.push(
      <mesh key={i} position={[x * 0.5, 0.32 - sink * 0.5, z * 0.5]}>
        <boxGeometry args={[0.02, 0.01, 0.8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    )
  }
  return <group ref={linesRef}>{points}</group>
}

function Scene({ sinkLevel }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 3, -4]} intensity={0.4} color="#e67e22" />
      
      <GroundBlock sink={sinkLevel} />
      <WaterTable sink={sinkLevel} />
      <CrackLines sink={sinkLevel} />
      
      {/* Buildings */}
      <Building position={[-1.2, 0.9, -1]} sink={sinkLevel} color="#e67e22" />
      <Building position={[0.8, 0.9, -1.3]} sink={sinkLevel} color="#2980b9" />
      <Building position={[-0.5, 0.9, 1.2]} sink={sinkLevel} color="#27ae60" />
      <Building position={[1.3, 0.9, 0.8]} sink={sinkLevel} color="#e74c3c" />
      <Building position={[0, 0.7, -2]} sink={sinkLevel} color="#f39c12" />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 6}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export default function SubsidenceVisualizer() {
  const [sinkLevel, setSinkLevel] = useState(1)

  const levels = [
    { label: 'Normal', value: 0, color: 'var(--success)' },
    { label: 'Low', value: 1, color: 'var(--accent-light)' },
    { label: 'Moderate', value: 2.5, color: 'var(--accent)' },
    { label: 'Severe', value: 4, color: 'var(--danger)' },
  ]

  return (
    <div className="fade-in">
      <h2 className="section-title">Interactive 3D Visualizer</h2>
      <p className="section-subtitle">
        See how land subsidence affects buildings and infrastructure. Click the buttons
        below to simulate different subsidence levels.
      </p>

      <div className="visualizer-container">
        <Canvas shadows camera={{ position: [5, 4, 6], fov: 45 }}>
          <Scene sinkLevel={sinkLevel} />
        </Canvas>
      </div>

      <div className="visualizer-controls">
        {levels.map((level) => (
          <button
            key={level.label}
            className={`viz-btn ${sinkLevel === level.value ? 'active' : ''}`}
            onClick={() => setSinkLevel(level.value)}
            style={{
              borderColor: sinkLevel === level.value ? 'transparent' : undefined,
            }}
          >
            {level.label}
          </button>
        ))}
      </div>
      <p
        style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          marginTop: '16px',
        }}
      >
        Drag to rotate the 3D scene • Scroll to zoom
      </p>
    </div>
  )
}