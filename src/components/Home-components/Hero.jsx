import React, { lazy, Suspense } from "react";
// Lazy load particles to reduce initial load
import { useNavigate } from "react-router-dom";
const ParticlesBackground = lazy(() => import("../ui/ParticlesBackground"));

const Hero = () => {
  const navigate = useNavigate();
  const handleLearnBtn = () => {
    navigate("/workflow");
  };
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      {/* Particle Background */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 z-0 h-full w-full">
          <ParticlesBackground />
        </div>
      </Suspense>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl flex flex-col items-center justify-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] leading-snug sm:leading-tight px-2">
          Empowering Digital Transformation
        </h1>

        {/* Subtext */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl px-2">
          We are a{" "}
          <span className="text-[#00FFCE] font-semibold">
            Software Engineering Company
          </span>{" "}
          building scalable solutions, innovative products, and seamless user
          experiences for startups and enterprises worldwide.
        </p>

        {/* 🔥 Relevant Intro Section */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl px-2">
          From{" "}
          <span className="text-[#00FFCE] font-semibold">
            AI-driven platforms
          </span>{" "}
          to{" "}
          <span className="text-[#00FFCE] font-semibold">
            cloud-native enterprise solutions
          </span>
          , we deliver end-to-end services that help businesses innovate and
          scale. Our expertise spans{" "}
          <span className="text-[#00FFCE] font-semibold">MERN stack</span>,{" "}
          <span className="text-[#00FFCE] font-semibold">DevOps</span>, and{" "}
          <span className="text-[#00FFCE] font-semibold">
            enterprise-grade software
          </span>
          — ensuring{" "}
          <span className="text-[#00FFCE] font-semibold">performance</span>,{" "}
          <span className="text-[#00FFCE] font-semibold">security</span>, and{" "}
          <span className="text-[#00FFCE] font-semibold">scalability</span>.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            className="cursor-pointer w-36 sm:w-44 md:w-52 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-cyan-400 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-400 ease-in-out"
            onClick={() => handleLearnBtn()}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
