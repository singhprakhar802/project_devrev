import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Library Management Frontend Page.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
