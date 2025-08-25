import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Aayush Mishra. All rights reserved.</p>
    </footer>
  );
};

export default FooterSection;
