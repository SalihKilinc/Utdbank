import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import Policy from "../components/privacyPolicy/Policy";
import Footer from "../components/common/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <PageHeader
        resim="background-image: url(assets/images/terms.png)"
        baslik="Privacy Policy"
        konu="Privacy Policy"
      />
      <Policy />
    </div>
  );
};

export default PrivacyPolicyPage;
