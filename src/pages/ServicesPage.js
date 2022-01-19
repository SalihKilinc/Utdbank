import React from "react";
import PageHeader from "../components/common/PageHeader";
import SectionTitle from "../components/home/SectionTitle";
import Services from "../components/services/Services";

const ServicesPage = () => {
  return (
    <div>

      <PageHeader image="assets/images/terms.png" title="Services" />

      <SectionTitle />
      <Services />
    </div>
  );
};

export default ServicesPage;
