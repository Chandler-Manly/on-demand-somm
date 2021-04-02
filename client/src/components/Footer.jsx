import React from "react";
import "../assets/Footer.css";

const Footer = () => (
  <footer>
    <div className="footer">
      <img
        src="https://res.cloudinary.com/dygk00sc0/image/upload/v1617323423/logo_trukob.png"
        alt="Drink Responsibly."
      />
      <p>FOLLOW US:</p>
      <a
        href="https://www.linkedin.com/in/h-chandler-manly-he-him-980428194/"
        className="fa fa-linkedin"
      >Linkedin</a>
      <a href="https://github.com/Chandler-Manly" className="fa fa-github">Github</a>
      <a
        href="https://www.instagram.com/on_demand_somm/"
        className="fa fa-instagram"
      >Instagram</a>
      <a href="https://twitter.com/ondemandsomm" className="fa fa-twitter">Twitter</a>
      <a
        href="https://www.facebook.com/On-Demand-Somm-109988864519549"
        className="fa fa-facebook"
      >Facebook</a>
      <p>Manly Technologies© 2021 </p>
    </div>
  </footer>
);

export default Footer;
