import React from "react";

import "../assets/Footer.css";

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-items">
      <p>Interested in learning more about wine? Follow ON-DEMAND-SOMM on social media:</p>
        <div className="icons">
          <div className="insta"> 
          <a
        href="https://www.instagram.com/on_demand_somm/"
        className="fa fa-instagram"
      >
        Instagram
            </a>
          </div>
          <div className="twitter">
      <a href="https://twitter.com/ondemandsomm" className="fa fa-twitter">
        Twitter
            </a>
          </div>
          <div className="FB">
      <a
        href="https://www.facebook.com/On-Demand-Somm-109988864519549"
        className="fa fa-facebook"
      >
        Facebook
            </a>
            </div>
        </div>
        <div>
__      ___ _ __   ___ 
\ \ /\ / / | '_ \ / _ \
 \ V  V /| | | | |  __/
  \_/\_/ |_|_| |_|\___|
        </div>
        
      </div>
    </div>
  </footer>
);

export default Footer;
