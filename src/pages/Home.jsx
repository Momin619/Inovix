import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TrustedBy from "../components/TrustedBy-components/TrustedBy";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
export default function Home() {
  return (
    <div className="bg-black relative w-full">
      <Navbar />
      <Hero /> {/* particles only inside this section */}
      <TrustedBy /> {/* clean section without particles */}
      <Features />
      <Testimonials />
    </div>
  );
}
