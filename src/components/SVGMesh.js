import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

const SVGMesh = ({ url }) => {
  const groupRef = useRef();

  useEffect(() => {
    const loadSVG = async () => {
      const res = await fetch(url);
      const svgText = await res.text();

      const loader = new SVGLoader();
      const data = loader.parse(svgText);
      console.log("Parsed SVG paths:", data.paths);
      const paths = data.paths;
      const group = new THREE.Group();

      paths.forEach((path) => {
        
        const shapes = SVGLoader.createShapes(path);
        shapes.forEach((shape) => {
          const geometry = new THREE.ExtrudeGeometry(shape, {
            depth: 20,
            bevelEnabled: false,
          });
          console.log('Creating shapes for path:', path);
          const shapes = SVGLoader.createShapes(path);
          console.log('Generated shapes:', shapes);

          geometry.center(); // ✅ this recenters each mesh properly


          const material = new THREE.MeshStandardMaterial({
            color: '#c52424', // bright green
            side: THREE.DoubleSide,
            metalness: 0,
            roughness: 1,
            wireframe: true, // ✅ Show wireframe
          });

          const mesh = new THREE.Mesh(geometry, material);
          group.add(mesh);
        });
      });

      // Center & scale the model
      const box = new THREE.Box3().setFromObject(group);
      const center = box.getCenter(new THREE.Vector3());
      //group.position.sub(center); // Center
      group.scale.set(0.03, 0.03, 0.03);  // Shrink it down

      groupRef.current.add(group);
      
    };

    loadSVG();
  }, [url]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return <group ref={groupRef} />;
};

export default SVGMesh;
