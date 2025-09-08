import React from "react";
import Project from "../components/Projects/Project";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="">
        <Project />
      </div>
      <Footer />
    </>
  );
}
