import React from 'react';

const Footer = () => (
  <footer>
    <div className="chandler-footer person-footer">
      <a
        href="https://github.com/Chandler-Manly"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="https://i.imgur.com/le1iPlO.png"
          alt="github"
          className="footer-photo-git"
        />
      </a>
      <p className="member-name">Chandler Manly</p>
    </div>

    <a href={"/"}>
      <img
        className="logo-footer"
        src="https://res.cloudinary.com/dygk00sc0/image/upload/v1617323423/logo_trukob.png"
        alt="logo"
      />
    </a>


  </footer>
);

export default Footer;
