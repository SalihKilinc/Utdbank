import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import About from "../components/aboutUs/About";
import Retail from "../components/aboutUs/Retail";
import Footer from "../components/common/Footer";

const AboutUsPage = () => {
  return (
    <>
      <TopBar />
      <PageHeader
        resim="assets/images/about-1.png"
        konu="about"
        baslik="About Us"
      />
      <About />
      <Retail />
      <Footer />
    </>
  );
};

export default AboutUsPage;
