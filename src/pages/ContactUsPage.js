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
      <PageHeader
        resim="background-image: url(assets/images/contact-us-bg.png)"
        baslik="Contact Us"
        konu="Contact Us"
      />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
