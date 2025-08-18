import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import {
  TbBrandBooking,
  TbBrandAirbnb,
  TbBrandInstagram
} from "react-icons/tb";

import "./footerStyle.css";

import { useTranslations } from "next-intl";

import { Title } from "../title/title";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="footer section layout">
      <div className="footer-content breakout">
        <Title as="h3">Lina Marija</Title>
        <div className="about">
          <Title as="h4">{t("descriptionTitle")}</Title>
          <p>{t("description")}</p>
        </div>
        <div className="contact">
          <Title as="h4">{t("contact")}</Title>
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
          <div className="social-icons">
            <Link href="https://www.booking.com/hotel/rs/lina-maria-holiday-home-zlatibor.sr.html">
              <TbBrandBooking className="social-icons--icon" />
            </Link>
            <Link href="https://www.airbnb.rs/rooms/1324790299105509344">
              <TbBrandAirbnb className="social-icons--icon" />
            </Link>
            <Link href="">
              <TbBrandInstagram className="social-icons--icon" />
            </Link>
          </div>
        </div>

        <div className="rights">
          {/* <span>&copy;</span> */}
          <span>{t("copyright")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
