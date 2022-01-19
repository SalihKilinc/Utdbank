import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import SectionTitle from "../components/home/SectionTitle";
import Services from "../components/services/Services";
import Footer from "../components/common/Footer";

const ServicesPage = () => {
  return (
    <div>
      <PageHeader
        resim="background-image: url(assets/images/terms.png)"
        baslik="Services"
        konu="Services"
      />
      <SectionTitle />
      <Services />
    </div>
  );
};

export default ServicesPage;
