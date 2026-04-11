import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Helmet } from "react-helmet-async";
export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Inovix</title>
      </Helmet>
      <Navbar />

      <AboutUs />
      <Footer />
    </>
  );
}
