import React from "react";
import Features from "../components/home/Features";
import PageHeader from "../components/common/PageHeader";

const FeaturesPage = () => {
  return (
    <div>
      <PageHeader
        image="assets/images/feature-details-1.png"
        title="Features"
      />
      <Features />
    </div>
  );
};

export default FeaturesPage;
