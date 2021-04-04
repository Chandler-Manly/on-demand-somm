import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../assets/Layout.css"

export default function Layout(props) {
  
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <header>Follow us on social media!</header>
      <div className="company-logo">
      <img
        src="https://res.cloudinary.com/dygk00sc0/image/upload/v1617323423/logo_trukob.png"
        alt="Drink Responsibly."
          />
          </div>
      {currentUser ? (
        <>
          <div className="welcome-message">Welcome, {currentUser.username}!</div>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login" className="fa fa-user-circle-o"></Link>
      )}

      {currentUser && (
        <>
          <Link to="/wines"><div>Wines</div></Link>
          <Link to="/tastings"><div>Type</div></Link>
          <Link to="/blog"><div>Blog</div></Link>
          <Link to="/check-out" className="fa fa-shopping-bag"></Link>
          <Link to="/check-out" className="fa fa-cc-stripe"></Link>
    
        </>
      )}

      {props.children}
      <Footer />
    </div>
  );
}
