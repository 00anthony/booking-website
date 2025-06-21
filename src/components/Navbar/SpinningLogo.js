import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SVGMesh from '../SVGMesh'; 

export default function SpinningLogo() {
  return (
    <div className="w-[60px] h-[60px] relative z-50">
      <Canvas camera={{ position: [0, 0, 50], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <SVGMesh url="/logo.svg" />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
