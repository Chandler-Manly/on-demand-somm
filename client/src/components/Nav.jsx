import React from "react";
import { Link } from "react-router-dom";
import "../assets/Nav.css";

export default function Nav() {
  return (
    <div className='Nav'>
      <Link to="/">
      <img
        src="https://res.cloudinary.com/dygk00sc0/image/upload/v1617323423/logo_trukob.png"
        alt="Drink Responsibly."
      />
      </Link>
      
    </div>
  );
}
