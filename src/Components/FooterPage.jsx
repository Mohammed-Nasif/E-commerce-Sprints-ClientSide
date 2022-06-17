import React from "react";
import ContactUS from "./ContactUS";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <footer>
      <h2>E-shop</h2>
      <Link to="/aboutus">About Us</Link>
      <ContactUS />
    </footer>
  );
};

export default FooterPage;
