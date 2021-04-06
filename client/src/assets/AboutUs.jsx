import React from "react";
import BackgroundVideoTwo from "../components/BackgroundVideoTwo";
import '../assets/AboutUs.css';

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
          and improve this critical part of wine education.
          
        </div>

        <div className="about-us-wset">
          This comprehensive guide follows the Wine Spirit Education Trust's Systematic
          Approach to Tasting with some helpful tips and tricks to guide you
          through the wine evaluation process.
        </div>


      </div>
        <BackgroundVideoTwo />
      </div>
  );
}
