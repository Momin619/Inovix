import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import RotatingGlobe from "./RotatingGlobe";

// Lazy-loaded controls only on desktop
import { OrbitControls } from "@react-three/drei";

const PIXEL_RATIO = Math.min(
  typeof window !== "undefined" ? window.devicePixelRatio : 1,
  2,
);

const TrustedGlobe = () => {
  const [globeConfig, setGlobeConfig] = useState({
    scale: 1,
    cameraZ: 5,
    autoRotateSpeed: 0.5,
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // detect mobile safely
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const updateConfig = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const scale = Math.min(vw, vh) / 1000;
    const cameraZ = scale * 20;
    const autoRotateSpeed = vw < 480 ? 0.2 : 0.5;

    setGlobeConfig({ scale, cameraZ, autoRotateSpeed });
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

  const { scale, cameraZ, autoRotateSpeed } = globeConfig;

  return (
    <section
      ref={sectionRef}
      className="relative bg-black w-full flex flex-col items-center justify-center text-center overflow-hidden px-4"
      style={{ minHeight: "500px" }}
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

      {/* Globe */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
        {isVisible ? (
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-[#00ffce]/30 animate-pulse" />
              </div>
            }
          >
            <Canvas
              camera={{ position: [0, 0, cameraZ], fov: 45 }}
              style={{ width: "100%", height: "100%" }}
              gl={{
                antialias: true,
                pixelRatio: PIXEL_RATIO,
              }}
            >
              <ambientLight intensity={0.7} />
              <pointLight position={[10, 10, 10]} />

              {/* Globe */}
              <Suspense fallback={null}>
                <RotatingGlobe defaultScale={scale} />
              </Suspense>

              {/* ✅ FIX: OrbitControls ONLY on desktop */}
              {!isMobile && (
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={autoRotateSpeed}
                  makeDefault
                />
              )}
            </Canvas>
          </Suspense>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-[#00ffce]/20 animate-pulse" />
          </div>
        )}
      </div>
    </section>
  );
};

export default TrustedGlobe;
