import React from "react";
import PageHeader from "../components/common/PageHeader";
import Policy from "../components/privacyPolicy/Policy";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <PageHeader image="assets/images/terms.png" title="Privacy Policy" />
      <Policy />
    </div>
  );
};

export default PrivacyPolicyPage;
