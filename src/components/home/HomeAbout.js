import React from 'react';
import HomeAboutItem from './AboutItem';

const HomeAbout = (props) => {
  return (
    <section className="home-about-section bg-off-white pt-100 pb-70">
    <div className="container">

       <div className="home-about-content">

        <HomeAboutItem t1="International Payments" t2="Request Features" t3="Premium Support" t4="Direct Debit" t5="Automated Accounting" t6="Web Design" img1="assets/images/curve-line.png" img2="assets/images/triangle.png" img3="assets/images/enterprise.png" />
        

        <div className="section-mtb-40"></div>

        <HomeAboutItem t1="Deposit Checks Instantly" t2="A Powerful Open API" t3="Affiliates And Partnerships" t4="Coverage Around The World" t5="Business Without Borders" t6="Web Design"  />
        
        <div className="section-mtb-40"></div>

        <HomeAboutItem t1="International Payments" t2="Request Features" t3="Premium Support" t4="Direct Debit" t5="Automated Accounting" t6="Web Design" img1="assets/images/curve-line.png" img2="assets/images/triangle.png" img3="assets/images/enterprise.png" />

       
      </div>
    </div>
  </section>
  );
};

export default HomeAbout;
