import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import About from "../components/aboutUs/About";
import Retail from "../components/aboutUs/Retail";
import Footer from "../components/common/Footer";

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
  );
};

export default AboutUsPage;
