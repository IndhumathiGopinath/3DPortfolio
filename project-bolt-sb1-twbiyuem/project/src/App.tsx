import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { HomeScene } from './scenes/HomeScene';
import { RootsWorld } from './worlds/RootsWorld';
import { DiscoveryWorld } from './worlds/DiscoveryWorld';
import { WorldTransition } from './components/WorldTransition';
import { useWorldStore } from './store/useWorldStore';

function App() {
  const { currentWorld, isTransitioning, setTransitioning } = useWorldStore();

  const handleTransitionComplete = () => {
    setTransitioning(false);
  };

  return (
    <div className="w-full h-screen bg-black">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} />
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2.1}
          enabled={!isTransitioning}
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <WorldTransition 
          isTransitioning={isTransitioning}
          onTransitionComplete={handleTransitionComplete}
        />

        {currentWorld === 'home' && <HomeScene />}
        {currentWorld === 'roots' && <RootsWorld />}
        {currentWorld === 'discovery' && <DiscoveryWorld />}
        
        <Environment preset="sunset" />
      </Canvas>

      <div className="absolute top-4 left-4 text-white">
        <h1 className="text-3xl font-bold">3D Portfolio</h1>
        <p className="text-gray-300">Navigate through different worlds to explore my journey</p>
      </div>

      {currentWorld !== 'home' && !isTransitioning && (
        <button
          onClick={() => {
            setTransitioning(true);
            setTimeout(() => useWorldStore.getState().setWorld('home'), 500);
          }}
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Return Home
        </button>
      )}
    </div>
  );
}