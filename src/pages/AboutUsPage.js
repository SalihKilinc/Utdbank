import React from "react";
import PageHeader from "../components/common/PageHeader";
import About from "../components/aboutUs/About";
import Retail from "../components/aboutUs/Retail";

const AboutUsPage = () => {
  return (
    <>
      <PageHeader image="assets/images/about-page.png" title="About Us" />
      <About />
      <Retail />
    </>
  );
};

export default AboutUsPage;
