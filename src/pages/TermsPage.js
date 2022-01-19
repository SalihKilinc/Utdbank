import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import Terms from "../components/termsCondition/Terms";
import Footer from "../components/common/Footer";

const TermsPage = () => {
  return (
    <div>
      <PageHeader
        resim="background-image: url(assets/images/terms.png)"
        baslik="Terms & Conditions"
        konu="Terms & Conditions"
      />
      <Terms />
    </div>
  );
};

export default TermsPage;
