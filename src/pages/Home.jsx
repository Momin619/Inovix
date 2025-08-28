import React from "react";
import Hero from "../components/Home-components/Hero";
import Navbar from "../components/ui/Navbar";
import TrustedBy from "../components/Home-components/TrustedBy-components/TrustedBy";
import Features from "../components/Home-components/Features";
import Testimonials from "../components/Home-components/Testimonials";
import Footer from "../components/ui/Footer";
export default function Home() {
  return (
    <div className="bg-black relative w-full">
      <Navbar />
      <Hero /> {/* particles only inside this section */}
      <TrustedBy /> {/* clean section without particles */}
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
