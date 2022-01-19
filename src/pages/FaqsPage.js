import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import ContactForm from "../components/faqs/ContactForm";
import Faq from "../components/faqs/Faq";
import Footer from "../components/common/Footer";

const FaqsPage = () => {
  return (
    <div>
      <PageHeader image="assets/images/blog.png" title="FAQ's" />
      <Faq />
      <ContactForm />
    </div>
  );
};

export default FaqsPage;
