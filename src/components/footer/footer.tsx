import "./footerStyle.css";

import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

import { Title } from "../title/title";

const Footer = () => {
  return (
    <footer className="footer section layout">
      <div className="footer-content breakout">
        <Title as="h3">Lina Marija</Title>
        <div className="about">
          <Title as="h4">About</Title>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur fuga vitae qui iure quaerat hic dicta ratione odio
            dolorem debitis saepe, facere molestiae pariatur! Tenetur cum ad
            earum est, quo impedit? Iusto dolores optio repellat cum nostrum.
            Modi, quam sequi.
          </p>
        </div>
        <div className="contact">
          <Title as="h4">Contact Us</Title>
          <div className="phone">
            <span>
              <FaPhone className="icon" />{" "}
            </span>
            <span>069/346-779</span>
          </div>
          <div className="mail">
            <span>
              <IoMdMail className="icon" />{" "}
            </span>
            <span>contact@linamarija.com</span>
          </div>
        </div>

        <div className="rights">
          <span>&copy;</span>
          <span>Drakula | </span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
