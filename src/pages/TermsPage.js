import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import Terms from "../components/termsCondition/Terms";
import Footer from "../components/common/Footer";

const TermsPage = () => {
  return (
    <div>
      <TopBar />
      <PageHeader image="assets/images/terms.png" title="Terms & Conditions" />
      <Terms />
      <Footer />
    </div>
  );
};

export default TermsPage;
