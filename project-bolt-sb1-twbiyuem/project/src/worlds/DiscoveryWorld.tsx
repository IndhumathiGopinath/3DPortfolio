import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { InteractiveElement } from '../components/InteractiveElement';

export function DiscoveryWorld() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Campus Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#8db580" />
      </mesh>

      {/* Main Building */}
      <InteractiveElement
        position={[0, 2, -5]}
        title="Dual Degree Hall"
        description="Explore my academic journey through both degrees"
        color="#4a90e2"
        scale={[8, 6, 2]}
      />

      {/* Cricket Field */}
      <InteractiveElement
        position={[-8, 0, 0]}
        title="Cricket Analytics Lab"
        description="Where sports meets data science"
        color="#90be6d"
        scale={[6, 0.1, 6]}
      />

      {/* Language Center */}
      <InteractiveElement
        position={[8, 1, 0]}
        title="Global Languages Hub"
        description="Discover my journey in learning multiple languages"
        color="#f9c74f"
        scale={[3, 4, 3]}
      />
    </group>
  );
}