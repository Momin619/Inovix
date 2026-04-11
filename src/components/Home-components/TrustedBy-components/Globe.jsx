// Globe.jsx
import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Globe = React.forwardRef((props, ref) => {
  const { scene } = useGLTF("/3d-model/globe.glb");

  // ✅ FIX — Bounding box computation moved into useMemo.
  //
  //  The original code ran these two lines in the render body on EVERY re-render:
  //    const bbox = new THREE.Box3().setFromObject(scene);       // allocates Box3
  //    const center = bbox.getCenter(new THREE.Vector3());       // allocates Vector3
  //
  //  `scene` is a stable reference from useGLTF's cache, so this work is identical
  //  every time. useMemo runs it once and reuses the result unless `scene` changes.
  const center = useMemo(() => {
    const bbox = new THREE.Box3().setFromObject(scene);
    return bbox.getCenter(new THREE.Vector3());
  }, [scene]);

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[0.0008, 0.0008, 0.0008]}
      position={[-center.x, -center.y, -center.z]}
      {...props}
    />
  );
});

Globe.displayName = "Globe";

export default Globe;
