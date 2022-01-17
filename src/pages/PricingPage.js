import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import Pricing from "../components/pricing/Pricing";
import Footer from "../components/common/Footer";

const PricingPage = () => {
  return (
    <div>
      <TopBar />
      <PageHeader />
      <Pricing />
      <Footer />
    </div>
  );
};

export default PricingPage;
