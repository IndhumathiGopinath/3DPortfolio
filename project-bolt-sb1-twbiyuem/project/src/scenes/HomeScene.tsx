import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { FloatingIsland } from '../components/FloatingIsland';
import { NavigationPortal } from '../components/NavigationPortal';
import { useWorldStore } from '../store/useWorldStore';
import { worldsData } from '../data/worlds';

export function HomeScene() {
  const { setWorld, setTransitioning } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const handleWorldChange = (world: string) => {
    setTransitioning(true);
    setTimeout(() => setWorld(world as any), 500);
  };

  return (
    <group ref={groupRef}>
      <FloatingIsland />
      
      {Object.entries(worldsData).map(([key, world]) => (
        <NavigationPortal
          key={key}
          {...world}
          onClick={() => handleWorldChange(key)}
        />
      ))}
    </group>
  );
}