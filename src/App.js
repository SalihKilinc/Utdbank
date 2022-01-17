import logo from "./logo.svg";
import "./App.css";
import AboutUsPage from "./pages/AboutUsPage";
import AuthenticationPage from "./pages/AuthenticationPage";
import ContactUsPage from "./pages/ContactUsPage";
import FaqsPage from "./pages/FaqsPage";
import ForgetPassword from "./components/forgetPassword/ForgetPassword";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ServicesPage from "./pages/ServicesPage";
import TermsPage from "./pages/TermsPage";

function App() {
  return (
    <>
      <AboutUsPage />
      <AuthenticationPage />
      <ContactUsPage />
      <FaqsPage />
      <ForgetPassword />
      <HomePage />
      <PricingPage />
      <PrivacyPolicyPage />
      <ServicesPage />
      <TermsPage />
    </>
  );
}

export default App;
