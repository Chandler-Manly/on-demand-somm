import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../assets/Layout.css";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="nav-bar-container">
      <div className="company-values">DISCOVER. ENJOY. EXPERIENCE.</div>
      <div className="company-logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dygk00sc0/image/upload/v1617323423/logo_trukob.png"
            alt="Drink Responsibly."
          />
        </Link>
      </div>
      <div className="login-logic">
        {currentUser ? (
          <>
            <div className="welcome-message">
              <div>Welcome, {currentUser.username}!</div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <Link to="/about-us">
              <div>About Us</div>
            </Link>
            <Link to="/wines">
              <div>All Wine List</div>
            </Link>
            <Link to="/tastings">
              <div>Tasting Notes</div>
            </Link>
            <Link to="/login" className="fa fa-user-circle-o"></Link>
          </>
        )}

        {currentUser && (
          <>
            <Link to="/about-us">
              <div>About Us</div>
            </Link>
            <Link to="/wines">
              <div>All Wine List</div>
            </Link>
            <Link to="/tastings">
              <div>Tasting Notes</div>
            </Link>
            <Link to="/users/:id/">
              <div>My Tasted Wines</div>
            </Link>
          </>
        )}
      </div>

      {props.children}
      <Footer />
    </div>
  );
}
