import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function FloatingIsland() {
  const islandRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!islandRef.current) return;
    
    // Gentle floating animation
    islandRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    islandRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={islandRef} position={[0, 0, 0]}>
      <cylinderGeometry args={[3, 4, 0.4, 32]} />
      <meshStandardMaterial color="#68a55b" roughness={0.8} />
    </mesh>
  );
}