import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text } from "@react-three/drei";

const CompanyPoint = ({ position, logo, name }) => {
  const spriteRef = useRef();
  const { camera } = useThree();

  const texture = new THREE.TextureLoader().load(logo);

  // Keep logo facing camera every frame
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
        position={[0, -0.8, 0]} // below logo
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
