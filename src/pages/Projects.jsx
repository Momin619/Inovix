import React from "react";
import Project from "../components/Projects/Projects";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Inovix</title>
      </Helmet>
      <Navbar />
      <div className="">
        <Project />
      </div>
      <Footer />
    </>
  );
}
