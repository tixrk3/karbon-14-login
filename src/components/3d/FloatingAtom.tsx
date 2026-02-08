import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

const Nucleus = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.6, 64, 64]}>
      <MeshDistortMaterial
        color="#a78bfa"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const ElectronOrbit = ({ 
  radius, 
  speed, 
  rotationX, 
  rotationY,
  color 
}: { 
  radius: number; 
  speed: number; 
  rotationX: number; 
  rotationY: number;
  color: string;
}) => {
  const electronRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (electronRef.current && orbitRef.current) {
      const angle = state.clock.elapsedTime * speed;
      electronRef.current.position.x = Math.cos(angle) * radius;
      electronRef.current.position.z = Math.sin(angle) * radius;
    }
  });

  return (
    <group ref={orbitRef} rotation={[rotationX, rotationY, 0]}>
      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.01, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      
      {/* Electron */}
      <mesh ref={electronRef}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

const FloatingParticles = () => {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 30; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
        ] as [number, number, number],
        scale: Math.random() * 0.03 + 0.01,
      });
    }
    return temp;
  }, []);

  return (
    <group>
      {particles.map((particle, i) => (
        <Float key={i} speed={2} rotationIntensity={0} floatIntensity={2}>
          <mesh position={particle.position}>
            <sphereGeometry args={[particle.scale, 8, 8]} />
            <meshBasicMaterial color="#a78bfa" transparent opacity={0.4} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const AtomScene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#a78bfa" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2dd4bf" />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group scale={1.2}>
          <Nucleus />
          <ElectronOrbit radius={1.2} speed={2} rotationX={0} rotationY={0} color="#a78bfa" />
          <ElectronOrbit radius={1.5} speed={1.5} rotationX={Math.PI / 3} rotationY={0} color="#2dd4bf" />
          <ElectronOrbit radius={1.8} speed={1} rotationX={Math.PI / 6} rotationY={Math.PI / 4} color="#f472b6" />
        </group>
      </Float>
      
      <FloatingParticles />
    </>
  );
};

export const FloatingAtom = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure WebGL context is ready
    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <AtomScene />
      </Canvas>
    </div>
  );
};

export default FloatingAtom;
