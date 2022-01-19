import React from "react";
import Banner from "../components/home/Banner";
import BannerContact from "../components/home/BannerContact";
import Features from "../components/home/Features";
import HomeAbout from "../components/home/HomeAbout";
import Counter from "../components/home/Counter";
import Services from "../components/home/Services";
import Pricing from "../components/home/Pricing";
import Facility from "../components/home/Facility";
import HomeContact from "../components/home/HomeContact";
import Testimonals from "../components/home/Testimonals";

const HomePage = () => {
  return (
    <>
      <Banner />
      <BannerContact />
      <Features />
      <HomeAbout />
      <Counter />
      <Services />
      <Pricing />
      <Facility />
      <HomeContact />
      <Testimonals />
    </>
  );
};

export default HomePage;
