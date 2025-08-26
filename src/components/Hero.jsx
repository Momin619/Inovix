import React, { lazy, Suspense } from "react";

// Lazy load particles to reduce initial load
const ParticlesBackground = lazy(() => import("./ParticlesBackground"));

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center  min-h-screen justify-start text-center overflow-hidden px-4 pt-24 pb-16">
      {/* Particle Background */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 z-0 h-full w-full">
          <ParticlesBackground />
        </div>
      </Suspense>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] leading-tight">
          Empowering Digital Transformation
        </h1>
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          We are a{" "}
          <span className="text-cyan-400 font-semibold">
            Software Engineering Company
          </span>{" "}
          building scalable solutions, innovative products, and seamless user
          experiences for startups and enterprises worldwide.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <button className="cursor-pointer px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,1)] transition duration-300 ease-in-out">
            Get Started
          </button>
          <button className="cursor-pointer px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-cyan-400 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-400 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
