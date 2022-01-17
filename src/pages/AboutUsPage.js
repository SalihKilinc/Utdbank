import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import About from "../components/aboutUs/About";
import Retail from "../components/aboutUs/Retail";
import Footer from "../components/common/Footer";

const AboutUsPage = () => {
  return (
    <div>
      <TopBar />
      <PageHeader />
      <About />
      <Retail />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
