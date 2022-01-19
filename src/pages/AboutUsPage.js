import React from "react";
import PageHeader from "../components/common/PageHeader";
import About from "../components/aboutUs/About";
import Retail from "../components/aboutUs/Retail";

const AboutUsPage = () => {
  return (

    <div>
      <PageHeader
        resim="background-image: url(assets/images/about-page.png)"
        baslik="About us"
        konu="About us"
      />
      <About />
      <Retail />
    </div>

    <>
      <PageHeader image="assets/images/about-page.png" title="about" />
      <About />
      <Retail />
    </>

  );
};

export default AboutUsPage;
