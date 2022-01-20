import React from "react";
import PageHeader from "../components/common/PageHeader";
import Contact from "../components/contactUs/Contact";
import ContactForm from "../components/contactUs/ContactForm";

const ContactUsPage = () => {
  return (
    <div>
      <PageHeader image="assets/images/contact-us-bg.png" title="Contact Us" />
      <Contact />
      <ContactForm />
    </div>
  );
};

export default ContactUsPage;
