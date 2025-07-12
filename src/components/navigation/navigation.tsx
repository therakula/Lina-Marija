import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { BurgetButton } from "../burger/burger";
import localFont from "next/font/local";

import "./navigation-style.css";

import { useWindowWidth } from "@/hooks/useWindowWidth";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const cabinRegular = localFont({
  src: "../../../public/fonts/Cabin-Regular.ttf",
  fallback: ["sans-serif"]
});

const handleSidebar = () => {
  const checkbox =
    (document.querySelector("#burger-checkbox") as HTMLInputElement) || null;

  if (checkbox && checkbox.checked) {
    checkbox.checked = false;
  }
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={handleSidebar}>
          <a href="#about">O Nama</a>
        </li>
        <li>
          <a href="#location">Lokacija</a>
        </li>
        <li>
          <a href="#photos">Fotografije</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  );
};

const Navigation = () => {
  const width = useWindowWidth();
  const navRef = useRef<HTMLElement>(null);

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
      <div className="navigation-wrapper">
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
            <Link href="#about">O Nama</Link>
          </li>
          <li>
            {" "}
            <Link href="#location">Lokacija</Link>
          </li>
          <li>
            {" "}
            <Link href="#photos">Fotografije</Link>
          </li>
          <li>
            {" "}
            <Link href="#contact">Kontakt</Link>
          </li>
          <li>
            {" "}
            <Link href="#recenzije">Recenzije</Link>
          </li>
          <li>
            {" "}
            <Link href="#cestapitanja">Cesta Pitanja</Link>
          </li>
        </ul>

        {width && width > 700 ? (
          <div className="cta-btn--wrapper">
            <div className="cta-btn">
              <Link
                href="https://www.booking.com/hotel/rs/lina-maria-holiday-home-zlatibor.sr.html"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn__link"
              />
            </div>
          </div>
        ) : (
          <BurgetButton />
        )}
      </div>

      <Sidebar />
    </header>
  );
};

export default Navigation;
