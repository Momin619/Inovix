import React, { lazy, Suspense } from "react";

// Lazy load particles to reduce initial load
const ParticlesBackground = lazy(() => import("./ParticlesBackground"));

const Hero = () => {
  // Skip heavy particles on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4 pt-20 sm:pt-0">
      {/* Particle Background only on desktop */}
      {!isMobile && (
        <Suspense fallback={null}>
          <div className="absolute inset-0 z-0">
            <ParticlesBackground />
          </div>
        </Suspense>
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
          Empowering Digital Transformation
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          We are a{" "}
          <span className="text-cyan-400 font-semibold">
            Software Engineering Company
          </span>{" "}
          building scalable solutions, innovative products, and seamless user
          experiences for startups and enterprises worldwide.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="cursor-pointer px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:shadow-[0_0_35px_rgba(0,255,255,1)] transition duration-300 ease-in-out w-full sm:w-auto">
            Get Started
          </button>
          <button className="cursor-pointer px-8 py-3 text-lg font-semibold text-cyan-400 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-400 ease-in-out w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
