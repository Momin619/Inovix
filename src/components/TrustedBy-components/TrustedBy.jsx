// TrustedGlobe.js
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingGlobe from "./RotatingGlobe";

const TrustedGlobe = () => {
  const [globeConfig, setGlobeConfig] = useState({ scale: 1, cameraZ: 5 });

  const updateConfig = () => {
    const vw = window.innerWidth;
    let scale = 1;
    let cameraZ = 1;

    if (vw <= 480) {
      scale = 0.1;
      cameraZ = 2;
    } else if (vw <= 768) {
      scale = 0.13;
      cameraZ = 2.5;
    } else if (vw <= 1024) {
      scale = 0.15;
      cameraZ = 2.5;
    } else if (vw <= 1440) {
      scale = 0.2;
      cameraZ = 2.8;
    } else {
      scale = 0.15;
      cameraZ = 1.5;
    }
    setGlobeConfig({ scale, cameraZ });
  };

  useEffect(() => {
    updateConfig();
    window.addEventListener("resize", updateConfig);
    return () => window.removeEventListener("resize", updateConfig);
  }, []);

  return (
    <section className="relative bg-black w-full flex flex-col items-center justify-center text-center overflow-hidden px-4 pt-10 sm:pt-16">
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Trusted by Leading Companies Worldwide
        </h2>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          Our solutions empower businesses across the globe
        </p>
      </div>

      <div
        style={{ height: "80vh", minHeight: "400px" }}
        className="bg-black w-full relative mt-4"
      >
        <Canvas camera={{ position: [0, 0, globeConfig.cameraZ], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} />
          <RotatingGlobe defaultScale={globeConfig.scale} />
          <OrbitControls
            enableZoom={true}
            minDistance={2}
            maxDistance={globeConfig.cameraZ * 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default TrustedGlobe;
