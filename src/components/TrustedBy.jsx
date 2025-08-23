import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from "three";

const CompanyPoint = ({ position, name }) => {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} position={position}>
      {/* Glowing sphere for logo/point */}
      <sphereGeometry args={[0.08, 12, 12]} /> {/* slightly lower resolution */}
      <meshStandardMaterial
        emissive="cyan"
        emissiveIntensity={1.5}
        color="white"
      />
      {/* Tooltip */}
      <Html distanceFactor={10}>
        <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition">
          {name}
        </div>
      </Html>
    </mesh>
  );
};

const RotatingGlobe = () => {
  const globeRef = useRef();

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002; // auto rotation
    }
  });

  return (
    <group ref={globeRef}>
      {/* Globe sphere */}
      <mesh>
        <sphereGeometry args={[3, 32, 32]} /> {/* slightly lower resolution */}
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(
            "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
          )}
        />
      </mesh>

      {/* Example companies */}
      <CompanyPoint position={[2, 1, 2]} name="Google" />
      <CompanyPoint position={[-2, 1, -1]} name="Microsoft" />
      <CompanyPoint position={[1.5, -1.2, 2]} name="Amazon" />
      <CompanyPoint position={[-1.8, -1.5, 1.2]} name="Meta" />
    </group>
  );
};

const TrustedGlobe = () => {
  return (
    <section className="relative w-full z-20 min-h-[600px] flex flex-col items-center justify-center bg-black text-white py-16">
      <h2 className="text-4xl font-bold mb-4">
        Trusted by Companies Over the Globe
      </h2>
      <p className="text-gray-400 mb-10">
        Our solutions power businesses worldwide
      </p>

      <div className="w-full h-[500px] relative z-20">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={50} depth={50} count={2000} factor={4} fade />{" "}
          {/* reduced stars */}
          <RotatingGlobe />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
};

export default TrustedGlobe;
