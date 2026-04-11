// CompanyPoint.jsx
import { useRef } from "react";
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Text } from "@react-three/drei";

// ✅ CRITICAL FIX — useLoader replaces `new THREE.TextureLoader().load(logo)`.
//
//  The original code called `new THREE.TextureLoader().load(logo)` in the
//  component BODY — not inside a hook or effect. This means:
//    - A brand-new TextureLoader is created on EVERY render
//    - A brand-new GPU texture is uploaded on EVERY render
//    - At 60fps, this creates 60 new textures per second per CompanyPoint
//    - Old textures are never disposed → GPU memory leak → WebGL Context Lost
//
//  useLoader() from @react-three/fiber:
//    - Loads the texture ONCE and caches it by URL
//    - Returns the same cached texture on every subsequent render
//    - Automatically disposes it when no longer needed

const CompanyPoint = ({ position, logo, name }) => {
  const spriteRef = useRef();
  const { camera } = useThree();

  // ✅ CRITICAL FIX — texture loaded and cached once, not recreated every frame
  const texture = useLoader(THREE.TextureLoader, logo);

  // Keep logo facing camera every frame — unchanged
  useFrame(() => {
    if (spriteRef.current) {
      spriteRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <group position={position}>
      {/* Logo */}
      <sprite ref={spriteRef} scale={[0.7, 0.7, 1]}>
        <spriteMaterial map={texture} transparent />
      </sprite>

      {/* Label */}
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="black"
      >
        {name}
      </Text>
    </group>
  );
};

export default CompanyPoint;
