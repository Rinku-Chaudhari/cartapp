import React from "react";
import "./Footer.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const Footer = () => {
  return (
    <div className="footer">
      <section className="connect">
        <h4>Connect with us!</h4>
        <section className="icons">
          <a href="https://facebook.com">
            <FacebookIcon />
          </a>
          <a href="https://instagram.com">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com">
            <TwitterIcon />
          </a>
          <a href="https://whatsapp.com">
            <WhatsAppIcon />
          </a>
        </section>
      </section>
    </div>
  );
};

export default Footer;
