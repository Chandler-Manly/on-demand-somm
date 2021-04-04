import React from "react";
import { Link } from "react-router-dom";

import "../assets/Footer.css";

const Footer = () => (
  <footer>
    <div className="footer">
      
      <Link to="/"><img
        src="https://res.cloudinary.com/dygk00sc0/image/upload/v1617323423/logo_trukob.png"
        alt="Drink Responsibly."
      /></Link>
      <p>FOLLOW US:</p>
      
      <a href="https://github.com/Chandler-Manly" className="fa fa-github">
        {/* Github */}
        </a>
      <a
        href="https://www.instagram.com/on_demand_somm/"
        className="fa fa-instagram"
      >
        {/* Instagram */}
      </a>
      <a href="https://twitter.com/ondemandsomm" className="fa fa-twitter">
        {/* Twitter */}
        </a>
      <a
        href="https://www.facebook.com/On-Demand-Somm-109988864519549"
        className="fa fa-facebook"
      >
        {/* Facebook */}
        </a>
    </div>
  </footer>
);

export default Footer;
