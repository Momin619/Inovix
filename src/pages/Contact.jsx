import React from "react";

import ContactUs from "../components/ContactUs/ContactUs";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Inovix</title>
      </Helmet>
      <Navbar />
      <ContactUs />
      <Footer />
    </>
  );
}
