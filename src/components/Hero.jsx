import { Canvas } from '@react-three/fiber'
import { OrbitControls, Points, PointMaterial } from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function Stars() {
  const ref = useRef()
  const positions = useMemo(() => {
    const p = new Float32Array(3000)
    for (let i = 0; i < p.length; i += 3) {
      p[i] = (Math.random() - 0.5) * 8
      p[i+1] = (Math.random() - 0.5) * 8
      p[i+2] = (Math.random() - 0.5) * 8
    }
    return p
  }, [])
  return (
    <group>
      <Points positions={positions} ref={ref} stride={3}>
        <PointMaterial transparent color="#a2d2ff" size={0.01} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  )
}

function WireSphere() {
  return (
    <mesh rotation={[0.4,0.2,0]}>
      <sphereGeometry args={[1.6, 32, 32]} />
      <meshBasicMaterial wireframe color="#3bc7ff" />
    </mesh>
  )
}

export default function Hero() {
  const [hover, setHover] = useState(false)
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <div className="font-display text-4xl md:text-5xl leading-tight">
          Hey, I’m <span className="text-neonBlue">Sayak</span> <span className="text-neonPurple">Roy</span>
        </div>
        <div className="text-lg text-white/80">
          AI Infrastructure & Automation Engineer | Cloud, DevOps, SDN & Telemetry
        </div>
        <p className="text-white/70 max-w-xl">
          I build and automate cloud and network infrastructure with AI DevOps full stack tools SDN and telemetry
        </p>
        <div className="flex gap-3">
          <motion.button whileHover={{ scale: 1.05 }} className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>View Projects</motion.button>
          <motion.a whileHover={{ scale: 1.05 }} href="https://drive.google.com/file/d/1sRO8zcEfGFu98omSCAnXw-cFqJFn3OJs/view?usp=sharing" className="btn-secondary">Download CV</motion.a>
        </div>
      </div>
      <div className="relative h-[420px] rounded-xl glass glow-border">
        <Canvas camera={{ position: [0,0,4], fov: 50 }} onPointerMove={() => setHover(true)} onPointerOut={() => setHover(false)}>
          <color attach="background" args={[0.05,0.08,0.16]} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[3,3,5]} intensity={hover ? 1.2 : 0.8} color={hover ? '#9b5cff' : '#3bc7ff'} />
          <Stars />
          <WireSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
        <div className="absolute inset-0 pointer-events-none rounded-xl shadow-glow"></div>
      </div>
    </div>
  )
}