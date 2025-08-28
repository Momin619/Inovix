// Globe.js
import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Globe = React.forwardRef((props, ref) => {
  const { scene } = useGLTF("/3d-model/globe.glb");

  // Compute bounding box and center the globe
  const bbox = new THREE.Box3().setFromObject(scene);
  const center = bbox.getCenter(new THREE.Vector3());

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[0.0008, 0.0008, 0.0008]} // adjust to fit nicely
      position={[-center.x, -center.y, -center.z]} // center at origin
      {...props}
    />
  );
});

export default Globe;
