// RotatingGlobe.js
import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import Globe from "./Globe";
import * as THREE from "three";

const RotatingGlobe = ({ defaultScale = 1, onRadiusCalculated }) => {
  const globeRef = useRef();
  const [globeRadius, setGlobeRadius] = useState(1);

  // Calculate actual globe radius after mount
  useEffect(() => {
    if (globeRef.current) {
      const bbox = new THREE.Box3().setFromObject(globeRef.current);
      const size = bbox.getSize(new THREE.Vector3());
      const radius = size.length() / 2;
      setGlobeRadius(radius);

      if (onRadiusCalculated) onRadiusCalculated(radius);
    }
  }, [onRadiusCalculated]);

  // Rotate globe continuously
  useFrame(() => {
    if (globeRef.current) globeRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={globeRef} scale={[defaultScale, defaultScale, defaultScale]}>
      <Globe />
    </group>
  );
};

export default RotatingGlobe;
