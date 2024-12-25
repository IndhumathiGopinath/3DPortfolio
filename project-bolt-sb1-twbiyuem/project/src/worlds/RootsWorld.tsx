import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { InteractiveElement } from '../components/InteractiveElement';

export function RootsWorld() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#90be6d" />
      </mesh>

      {/* School Building */}
      <InteractiveElement
        position={[-4, 0, -4]}
        title="Academic Journey"
        description="Explore my school life achievements and milestones"
        color="#f9c74f"
        scale={[4, 6, 4]}
      />

      {/* Trophy Display */}
      <InteractiveElement
        position={[4, 0, -2]}
        title="Yoga Achievements"
        description="View my yoga championship victories and journey"
        color="#f8961e"
        scale={[2, 3, 0.5]}
      />

      {/* Photo Wall */}
      <InteractiveElement
        position={[0, 2, -5]}
        title="Memory Lane"
        description="A collection of cherished childhood memories"
        color="#277da1"
        scale={[8, 4, 0.5]}
      />
    </group>
  );
}