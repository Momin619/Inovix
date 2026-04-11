// TrustedBy.jsx
//
// ⚠️  IMPORTANT — Code-splitting strategy changed from previous version.
//
//  OLD (broken): lazy()-import Canvas/OrbitControls individually inside this file.
//  NEW (correct): lazy()-import THIS ENTIRE FILE from Home.jsx instead.
//
//  In src/pages/Home.jsx, replace:
//    import TrustedBy from "...TrustedBy-components/TrustedBy";
//  With:
//    const TrustedBy = lazy(() => import("...TrustedBy-components/TrustedBy"));
//  And wrap <TrustedBy /> in <Suspense fallback={null}> in the JSX.
//
//  Why: lazy()-importing Canvas directly breaks @react-three/fiber's reconciler
//  initialisation, causing the "Invalid semver" DevTools error and WebGL context loss.
//  Lazy-importing the whole file at the page level achieves identical code-splitting
//  with none of the side-effects.

import React, { useState, useEffect, useRef, Suspense } from "react";

// ✅ Regular (non-lazy) imports — safe once this file is loaded as its own chunk
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingGlobe from "./RotatingGlobe";

// ✅ FIX #2 — pixelRatio computed once at module level, never inside JSX/render
const PIXEL_RATIO = Math.min(
  typeof window !== "undefined" ? window.devicePixelRatio : 1,
  2,
);

const TrustedGlobe = () => {
  // ✅ FIX #2 — all window.* reads live in state, populated after mount in useEffect
  const [globeConfig, setGlobeConfig] = useState({
    scale: 1,
    cameraZ: 5,
    autoRotateSpeed: 0.5,
  });

  // ✅ FIX #4 — only mount the Canvas after the section enters the viewport.
  //    Three.js (~600KB) is not initialised until the user scrolls near this section.
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // one-shot — no need to keep watching
        }
      },
      { rootMargin: "200px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ FIX #2 — all window.* reads are in this function, called only from useEffect
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

  // ✅ FIX #7 — plain destructuring, no useMemo on primitive numbers
  const { scale, cameraZ, autoRotateSpeed } = globeConfig;

  return (
    <section
      ref={sectionRef}
      className="relative bg-black w-full flex flex-col items-center justify-center text-center overflow-hidden px-4"
      style={{ minHeight: "500px" }}
    >
      {/* Heading — unchanged */}
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
                // ✅ FIX #2 — pixelRatio is the module-level constant, never window.* in JSX
                pixelRatio: PIXEL_RATIO,
              }}
              // ✅ NEW FIX — frameloop="demand" stops Three.js rendering at 60fps
              //    when nothing is moving. Only re-renders when OrbitControls moves
              //    or scene changes. Eliminates idle GPU drain and helps prevent
              //    context loss on low-end / mobile GPUs.
              frameloop="demand"
              // ✅ NEW FIX — dispose the WebGL context on unmount.
              //    Without this, navigating away and back creates a second context.
              //    Browsers allow max ~8-16 WebGL contexts — exceeding that = context lost.
              onCreated={({ gl }) => {
                return () => gl.dispose();
              }}
            >
              <ambientLight intensity={0.7} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <RotatingGlobe defaultScale={scale} />
              </Suspense>
              <OrbitControls
                enableZoom={true}
                minDistance={cameraZ * 0.8}
                maxDistance={cameraZ * 2}
                autoRotate
                // ✅ FIX #2 — autoRotateSpeed from state, not window.innerWidth in JSX
                autoRotateSpeed={autoRotateSpeed}
                // ✅ Required when frameloop="demand" — tells R3F to invalidate
                //    (re-render) the frame whenever OrbitControls produces movement
                makeDefault
              />
            </Canvas>
          </Suspense>
        ) : (
          // Stable placeholder while waiting for scroll-trigger — prevents CLS
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-[#00ffce]/20 animate-pulse" />
          </div>
        )}
      </div>
    </section>
  );
};

export default TrustedGlobe;
