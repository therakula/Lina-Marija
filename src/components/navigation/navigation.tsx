import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { BurgerButton } from "../burger/burger";
import Sidebar from "./sidebar";
import LangSwitcher from "../language-switcher/language-switcher";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";

import "./navigationStyle.css";

import { useWindowWidth } from "@/hooks/useWindowWidth";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const cabinRegular = localFont({
  src: "../../../public/fonts/Cabin-Regular.ttf",
  fallback: ["sans-serif"]
});

const Navigation = () => {
  const width = useWindowWidth();
  const navRef = useRef<HTMLElement>(null);

  const path = usePathname();

  const t = useTranslations("Navigation");

  useGSAP(() => {
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      gsap.fromTo(
        navRef.current,
        {
          y: -height
        },
        {
          y: 0,
          autoAlpha: 1,
          delay: 0.6,
          duration: 0.5
        }
      );
    }
  });

  return (
    <header className={`header ${cabinRegular.className}`} ref={navRef}>
      <nav className="navigation-wrapper">
        <div className="logo-wrapper">
          <Link href="#home">
            <Image
              fill
              src="/images/lm-logo-3.png"
              alt="logo"
              className="navigation-logo"
            />
          </Link>
        </div>
        <ul className="navigation-links">
          <li>
            <Link href="#about">{t("links.oNama")}</Link>
          </li>
          <li>
            {" "}
            <Link href="#location">{t("links.lokacija")}</Link>
          </li>
          <li>
            {" "}
            <Link href="#photos">{t("links.fotografije")}</Link>
          </li>
          <li>
            {" "}
            <Link href="#recenzije">{t("links.recenzije")}</Link>
          </li>
          <li>
            {" "}
            <Link href="#cestapitanja">{t("links.faqs")}</Link>
          </li>
          <li>
            {" "}
            <Link href="#contact">{t("links.kontakt")}</Link>
          </li>
        </ul>

        {width && width > 700 ? (
          <div className="cta-btn--wrapper">
            <div className="cta-btn--inner">
              <LangSwitcher direction="vertical" />
              <div
                className={`cta-btn ${
                  path.includes("/de-DE") ? "font-l" : "font-xl"
                }`}
              >
                <Link
                  href="https://www.booking.com/hotel/rs/lina-maria-holiday-home-zlatibor.sr.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn__link"
                  data-text={t("rezervisi")}
                />
              </div>
            </div>
          </div>
        ) : (
          <BurgerButton />
        )}
      </nav>

      <Sidebar t={t} />
    </header>
  );
};

export default Navigation;
