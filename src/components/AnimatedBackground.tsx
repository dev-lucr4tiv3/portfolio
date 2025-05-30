import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points for the "code rain" effect
function generateRandomPoints(count: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    points[i3] = (Math.random() - 0.5) * 10;
    points[i3 + 1] = (Math.random() - 0.5) * 10;
    points[i3 + 2] = (Math.random() - 0.5) * 10;
  }
  return points;
}

const CodeParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const points = generateRandomPoints(2000);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#50C878"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <CodeParticles />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;