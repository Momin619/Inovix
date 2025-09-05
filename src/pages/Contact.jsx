import React from "react";

import ContactUs from "../components/ContactUs/ContactUs";
import { Helmet } from "react-helmet";
export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Inovix</title>
      </Helmet>

      <ContactUs />
    </>
  );
}
