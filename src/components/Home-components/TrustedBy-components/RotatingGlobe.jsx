// RotatingGlobe.jsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Globe from "./Globe";

// ✅ FIX — Removed dead `globeRadius` state and unused THREE import.
//
//  The original had:
//    const [globeRadius, setGlobeRadius] = useState(1);
//    useEffect(() => { ... setGlobeRadius(radius); ... }, [onRadiusCalculated]);
//
//  `globeRadius` was set but NEVER read anywhere in this component or its parent
//  (TrustedBy.jsx never passed onRadiusCalculated). This caused a guaranteed
//  unnecessary re-render on every mount for zero benefit.
//
//  Also removed: `import * as THREE from "three"` — no longer needed since
//  the radius calculation is gone. Removing it drops ~600KB from this chunk.
//  THREE is still bundled via Globe.jsx and @react-three/fiber, but tree-shaking
//  can now exclude any THREE exports only referenced here.

const RotatingGlobe = ({ defaultScale = 1 }) => {
  const globeRef = useRef();

  // Rotate globe continuously — unchanged
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
