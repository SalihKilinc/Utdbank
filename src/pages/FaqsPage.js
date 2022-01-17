import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import ContactForm from "../components/faqs/ContactForm";
import Faq from "../components/faqs/Faq";
import Footer from "../components/common/Footer";

const FaqsPage = () => {
  return (
    <div>
      <TopBar />
      <PageHeader />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default FaqsPage;
