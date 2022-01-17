import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import Contact from "../components/contactUs/Contact";
import ContactForm from "../components/contactUs/ContactForm";
import Footer from "../components/common/Footer";

const ContactUsPage = () => {
  return (
    <div>
      <TopBar />
      <PageHeader />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
