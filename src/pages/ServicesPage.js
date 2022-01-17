import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import SectionTitle from "../components/home/SectionTitle";
import Services from "../components/services/Services";
import Footer from "../components/common/Footer";

const ServicesPage = () => {
  return (
    <div>
      <TopBar />
      <PageHeader />
      <SectionTitle />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
