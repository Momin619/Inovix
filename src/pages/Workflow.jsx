import React from "react";
import WorkFlow from "../components/WorkFlow/WorkFlow";
import { Helmet } from "react-helmet-async";

export default function Workflow() {
  return (
    <>
      <Helmet>
        <title>WorkFlow | Inovix</title>
      </Helmet>{" "}
      <WorkFlow />{" "}
    </>
  );
}
