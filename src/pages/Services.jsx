import React from "react";
import Service from "../components/Service/Service";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Inovix</title>
      </Helmet>
      <Navbar />
      <Service />
      <Footer />
    </>
  );
}
