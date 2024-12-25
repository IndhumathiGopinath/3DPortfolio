import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

interface WorldTransitionProps {
  isTransitioning: boolean;
  onTransitionComplete: () => void;
}

export function WorldTransition({ isTransitioning, onTransitionComplete }: WorldTransitionProps) {
  const { camera } = useThree();

  const { position } = useSpring({
    position: isTransitioning ? [0, 20, 0] : [0, 5, 10],
    onChange: () => {
      if (!isTransitioning) {
        onTransitionComplete();
      }
    },
    config: { duration: 1000 },
  });

  useEffect(() => {
    if (isTransitioning) {
      camera.position.set(0, 5, 10);
    }
  }, [isTransitioning, camera]);

  return <animated.group position={position} />;
}