// TrustedGlobe.js
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import RotatingGlobe from "./RotatingGlobe";

const TrustedGlobe = () => {
  const [globeRadius, setGlobeRadius] = useState(1);

  return (
    <section className="bg-black relative w-full min-h-[600px] flex flex-col items-center justify-center text-center overflow-hidden px-4 pt-10 sm:pt-16">
      {/* Hero-style content */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Trusted by Leading Companies Worldwide
        </h2>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          Our solutions empower businesses across the globe, providing reliable
          and innovative technology that drives growth and success.
        </p>
      </div>

      {/* Globe Canvas */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative mt-4">
        <Canvas
          camera={{
            position: [globeRadius * 3, globeRadius * 3, globeRadius * 3],
            fov: 45,
          }}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} />

          <RotatingGlobe onRadiusCalculated={(r) => setGlobeRadius(r)} />
          <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
};

export default TrustedGlobe;
