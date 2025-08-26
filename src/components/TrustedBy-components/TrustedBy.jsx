// TrustedGlobe.js
import React, { useState, useEffect, useMemo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingGlobe from "./RotatingGlobe";

const TrustedGlobe = () => {
  const [globeConfig, setGlobeConfig] = useState({
    scale: 0.15,
    cameraZ: 3,
    sectionHeight: "100vh",
    fov: 45,
  });

  const updateConfig = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Scale proportional to viewport and clamped
    const scale = Math.min(Math.max(Math.min(vw, vh) / 1000, 0.12), 0.2);
    const cameraZ = scale * 20;
    const fov = vw < 480 ? 60 : 45;
    const sectionHeight = `${vh}px`;

    setGlobeConfig({ scale, cameraZ, sectionHeight, fov });
  };

  // Smooth resize: debounce
  useEffect(() => {
    updateConfig(); // initial
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(updateConfig, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoize scale and cameraZ for performance
  const memoizedScale = useMemo(() => globeConfig.scale, [globeConfig.scale]);
  const memoizedCameraZ = useMemo(
    () => globeConfig.cameraZ,
    [globeConfig.cameraZ]
  );

  return (
    <section
      id="globe-section"
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
      <div className="w-full h-full flex items-center justify-center">
        <Canvas
          camera={{ position: [0, 0, memoizedCameraZ], fov: globeConfig.fov }}
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
