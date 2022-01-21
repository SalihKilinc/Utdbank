import React from "react";
import PageHeader from "../components/common/PageHeader";
import Services from "../components/services/Services";
const ServicesPage = () => {
  return (
    <div>
      <PageHeader image="assets/images/terms.png" title="Services" />
      <Services />
    </div>
  );
};

export default ServicesPage;
