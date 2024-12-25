import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface NavigationPortalProps {
  position: [number, number, number];
  color: string;
  title: string;
  onClick: () => void;
}

export function NavigationPortal({ position, color, title, onClick }: NavigationPortalProps) {
  const portalRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!portalRef.current) return;
    
    // Hovering animation
    portalRef.current.rotation.y += 0.01;
    portalRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <mesh ref={portalRef} position={position} onClick={onClick}>
      <torusGeometry args={[0.5, 0.2, 16, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      <pointLight color={color} intensity={1} distance={3} />
    </mesh>
  );
}