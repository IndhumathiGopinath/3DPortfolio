import { useState, useRef } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface InteractiveElementProps {
  position: [number, number, number];
  title: string;
  description: string;
  color: string;
  scale?: [number, number, number];
}

export function InteractiveElement({ 
  position, 
  title, 
  description, 
  color,
  scale = [1, 1, 1]
}: InteractiveElementProps) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (hovered) {
        meshRef.current.scale.setScalar(1.1);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        scale={scale}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <boxGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
      {(hovered || clicked) && (
        <Html position={[0, 2, 0]} center>
          <div className="bg-black/80 text-white p-4 rounded-lg w-64">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        </Html>
      )}
    </group>
  );
}