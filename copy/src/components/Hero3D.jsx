import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { FaArrowDown, FaExclamationTriangle, FaBookOpen } from 'react-icons/fa'

function GroundPlane() {
  const meshRef = useRef()
  const gridRef = useRef()

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.material.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  const gridMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#2980b9') },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        varying vec2 vUv;
        void main() {
          vec2 grid = abs(fract(vUv * 30.0 - 0.5) - 0.5) / fwidth(vUv * 30.0);
          float line = min(grid.x, grid.y);
          float alpha = 1.0 - min(line, 1.0);
          float pulse = sin(vUv.x * 10.0 + vUv.y * 10.0 + uTime * 2.0) * 0.5 + 0.5;
          vec3 color = mix(vec3(0.06, 0.11, 0.18), uColor, alpha * 0.6);
          gl_FragColor = vec4(color, 0.3 + alpha * 0.5 * pulse);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    })
  }, [])

  return (
    <group>
      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[20, 20, 64, 64]} />
        <meshStandardMaterial color="#0a1628" wireframe />
      </mesh>
      <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.49, 0]}>
        <planeGeometry args={[20, 20]} />
        <primitive object={gridMaterial} attach="material" />
      </mesh>
    </group>
  )
}

function SubsidencePillar({ position, delay = 0 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      const sink = Math.sin(time * 0.5 + delay) * 0.15
      meshRef.current.position.y = position[1] + sink
      meshRef.current.rotation.z = Math.sin(time * 0.3 + delay) * 0.02
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.8, 0.3]} />
      <meshStandardMaterial color="#e67e22" emissive="#e67e22" emissiveIntensity={0.3} />
    </mesh>
  )
}

function WaterLevel() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = -0.2 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05
      meshRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]}>
      <planeGeometry args={[8, 8]} />
      <meshStandardMaterial
        color="#3498db"
        transparent
        opacity={0.4}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  )
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} color="#e8f0f8" />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#e67e22" />
      
      <GroundPlane />
      <WaterLevel />
      
      <SubsidencePillar position={[-2, 0, 0]} delay={0} />
      <SubsidencePillar position={[-0.5, 0, 0.5]} delay={0.5} />
      <SubsidencePillar position={[1.5, 0, -0.5]} delay={1} />
      <SubsidencePillar position={[3, 0, 0.3]} delay={1.5} />
      <SubsidencePillar position={[-3.5, 0, -0.3]} delay={2} />
      
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2.5} />
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="hero-3d">
      <div className="hero-canvas-container">
        <Canvas camera={{ position: [0, 4, 8], fov: 50 }}>
          <HeroScene />
        </Canvas>
      </div>
      <div className="hero-overlay">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FaExclamationTriangle /> Environmental Awareness Platform
        </motion.div>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Understanding{' '}
          <span className="highlight">Land Subsidence</span>
          <br />in Hagonoy, Bulacan
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          A community-based environmental awareness website. Discover the causes,
          effects, and solutions to land subsidence threatening our beloved municipality.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#about" className="btn-primary">
            <FaBookOpen /> Learn More
          </a>
          <a href="#feedback" className="btn-secondary">
            <FaExclamationTriangle /> Report an Issue
          </a>
        </motion.div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <FaArrowDown />
      </div>
    </div>
  )
}