// TrustedGlobe.js
import React, { useState, useEffect, useMemo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingGlobe from "./RotatingGlobe";

const TrustedGlobe = () => {
  const [globeConfig, setGlobeConfig] = useState({
    scale: 1,
    cameraZ: 5,
  });

  const updateConfig = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Globe scale independent of section height
    const scale = Math.min(vw, vh) / 1000;
    const cameraZ = scale * 20;

    setGlobeConfig({ scale, cameraZ });
  };

  useEffect(() => {
    updateConfig();
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(updateConfig, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const memoizedScale = useMemo(() => globeConfig.scale, [globeConfig.scale]);
  const memoizedCameraZ = useMemo(
    () => globeConfig.cameraZ,
    [globeConfig.cameraZ]
  );

  return (
    <section
      className="relative bg-black w-full flex flex-col items-center justify-center text-center overflow-hidden px-4"
      style={{ minHeight: "500px" }} // enough for content below
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
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
        <Canvas
          camera={{ position: [0, 0, memoizedCameraZ], fov: 45 }}
          style={{ width: "100%", height: "100%" }}
          gl={{
            antialias: true,
            pixelRatio: Math.min(window.devicePixelRatio, 2),
          }}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <RotatingGlobe defaultScale={memoizedScale} />
          </Suspense>
          <OrbitControls
            enableZoom={true}
            minDistance={memoizedCameraZ * 0.8}
            maxDistance={memoizedCameraZ * 2}
            autoRotate
            autoRotateSpeed={window.innerWidth < 480 ? 0.2 : 0.5}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default TrustedGlobe;
