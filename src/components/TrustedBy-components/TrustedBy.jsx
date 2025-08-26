// TrustedGlobe.js
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingGlobe from "./RotatingGlobe";

const TrustedGlobe = () => {
  const [globeConfig, setGlobeConfig] = useState({
    scale: 1,
    cameraZ: 5,
    sectionHeight: "100vh",
  });

  const updateConfig = () => {
    const vw = window.innerWidth;
    let scale = 1;
    let cameraZ = 2.5;
    let sectionHeight = "100vh";

    if (vw <= 480) {
      scale = 0.14;
      cameraZ = 2;
      sectionHeight = "90vh";
    } else if (vw <= 768) {
      scale = 0.145;
      cameraZ = 2.5;
      sectionHeight = "80vh";
    } else if (vw <= 1024) {
      scale = 0.152;
      cameraZ = 2.5;
      sectionHeight = "100vh";
    } else if (vw <= 1440) {
      scale = 0.17;
      cameraZ = 2.8;
      sectionHeight = "95vh";
    } else {
      scale = 0.15;
      cameraZ = 3;
      sectionHeight = "100vh";
    }

    setGlobeConfig({ scale, cameraZ, sectionHeight });
  };

  useEffect(() => {
    updateConfig(); // run on mount
    window.addEventListener("resize", updateConfig);
    return () => window.removeEventListener("resize", updateConfig);
  }, []);

  return (
    <section
      style={{ height: globeConfig.sectionHeight, minHeight: "500px" }}
      className="relative bg-black w-full flex flex-col items-center justify-center text-center overflow-hidden px-4"
    >
      {/* Heading */}
      <div className="relative z-10 w-full max-w-5xl mb-6 px-4 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Trusted by Leading Companies Worldwide
        </h2>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
          Our solutions empower businesses across the globe
        </p>
      </div>

      {/* Globe wrapper */}
      <div className="flex-1 w-full flex items-center justify-center">
        <div className="w-full max-w-4xl h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh]">
          <Canvas
            camera={{
              position: [0, 0, globeConfig.cameraZ],
              fov: 45,
            }}
          >
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} />
            <RotatingGlobe defaultScale={globeConfig.scale} />

            <OrbitControls
              enableZoom={true}
              minDistance={1.5}
              maxDistance={globeConfig.cameraZ * 2}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default TrustedGlobe;
