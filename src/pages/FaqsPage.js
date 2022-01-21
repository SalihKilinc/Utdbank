import React from "react";
import PageHeader from "../components/common/PageHeader";
import ContactForm from "../components/faqs/ContactForm";
import Faq from "../components/faqs/Faq";

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
