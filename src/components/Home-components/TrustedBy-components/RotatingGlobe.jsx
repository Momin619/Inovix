import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Globe from "./Globe";

const RotatingGlobe = ({ defaultScale = 1 }) => {
  const globeRef = useRef();

  useFrame((state, delta) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y += delta * 0.5;
  });

  return (
    <group ref={globeRef} scale={[defaultScale, defaultScale, defaultScale]}>
      <Globe />
    </group>
  );
};

export default RotatingGlobe;
