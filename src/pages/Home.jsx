import React from "react";
import Hero from "../components/Home-components/Hero";
import Navbar from "../components/ui/Navbar";
import Features from "../components/Home-components/Features";
import { lazy, Suspense } from "react";

const TrustedBy = lazy(
  () => import("../components/Home-components/TrustedBy-components/TrustedBy"),
);
import Testimonials from "../components/Home-components/Testimonials";
import Footer from "../components/ui/Footer";
import { Helmet } from "react-helmet-async";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Inovix</title>
      </Helmet>

      <div className="bg-black relative w-full">
        <Navbar />
        <Hero /> {/* particles only inside this section */}
        <Suspense
          fallback={
            <div className="w-full h-[400px] bg-black flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-[#00ffce]/20 animate-pulse" />
            </div>
          }
        >
          <TrustedBy />
        </Suspense>{" "}
        {/* clean section without particles */}
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
