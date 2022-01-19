import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import Policy from "../components/privacyPolicy/Policy";
import Footer from "../components/common/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <PageHeader image="assets/images/terms.png" title="Privacy Policy" />
      <Policy />
    </div>
  );
};

export default PrivacyPolicyPage;
