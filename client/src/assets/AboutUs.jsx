import React from "react";
import BackgroundVideoTwo from "../components/BackgroundVideoTwo";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h3>ABOUT US</h3>
        </div>
        <div>
        <div className="about-us-text">
          ON-DEMAND-SOMM is a platform for wine novices and aficionados to
          aggregate their tasting notes. Our team saw an opportunity to simplify
          and improve this critical part of the wine education process.
          Moreover, this web-application is a resource to aid wine enthusiasts
          during their journey.
        </div>

        <div className="about-us-wset">
          This wine form follows the Wine Spirit Education Trust's Systematic
          Approach to Tasting with some helpful tips and tricks to guide you
          through the wine evaluation.
        </div>

        <div className="about-us-contact">
          We are always looking to improve our user experience and provide a
          seamless experience so if you have any recommendations please do not
          hesitate to send an email to: ondemandsomm@gmail.com
        </div>
      </div>
        <BackgroundVideoTwo />
    </div>
  );
}
