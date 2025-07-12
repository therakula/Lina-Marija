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
          <Title as="h4">O Nama</Title>
          <p>
            Naša brvnara, „Lina-Marija“, napravljena je u potpunosti od drveta i
            izrađena sa ljubavlju. Nudimo pravo opuštanje, daleko od turističkih
            sela, i dočekujemo one koji traže prirodu, seosku idilu, avanturu i
            opuštanje. U zavisnosti od vremena, kuća nudi zadivljujući pogled na
            okolne planine i borove šume koje će umiriti vašu dušu. Izlazak i
            zalazak sunca mogu se doživeti iz kuće. U krugu od 100 km nalaze se
            prelepa prirodna područja i zanimljive znamenitosti. I, naravno,
            zimski sportovi na obližnjem Zlatiboru.
          </p>
        </div>
        <div className="contact">
          <Title as="h4">Kontakt</Title>
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
