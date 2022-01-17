import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import Policy from "../components/privacyPolicy/Policy";
import Footer from "../components/common/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <TopBar />
      <PageHeader />
      <Policy />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
