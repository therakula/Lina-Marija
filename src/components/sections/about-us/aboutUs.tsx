import { Title } from "@/components/title/title";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import Image from "next/image";

import LangSwitcher from "@/components/language-switcher/language-switcher";

gsap.registerPlugin(ScrollTrigger);

import "./aboutUsStyle.css";

const AboutUs = () => {
  useGSAP(() => {
    // FOR TEXT
    const tl = gsap.timeline({
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom-=100",
        toggleActions: "restart none restart none"
      }
    });
    tl.fromTo(
      ".about-title",
      {
        y: 50,
        autoAlpha: 0,
        filter: "blur(10px)"
      },
      {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0)"
      }
    ).fromTo(
      ".about-section p",
      {
        y: 50,
        autoAlpha: 0,
        filter: "blur(10px)"
      },
      {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0)"
      }
    );

    // FOR IMAGE
    gsap.fromTo(
      ".img-wrapper",
      {
        autoAlpha: 0,
        filter: "blur(8px)"
      },
      {
        autoAlpha: 1,
        filter: "blur(0)",
        scrollTrigger: {
          trigger: ".img-wrapper",
          start: "top 80%"
        }
      }
    );
  });

  return (
    <section className="layout section about-section" id="about">
      <Title as="h2" className="about-title">
        O Nama
      </Title>
      <p className="margin-block-start-l">
        Naša brvnara „Lina-Marija“, napravljena je u potpunosti od drveta i
        izrađena sa ljubavlju. Nudimo pravo opuštanje, daleko od turističkih
        sela, i dočekujemo one koji traže prirodu, seosku idilu, avanturu i
        opuštanje. U zavisnosti od vremena, kuća nudi zadivljujući pogled na
        okolne planine i borove šume koje će umiriti vašu dušu. Izlazak i
        zalazak sunca mogu se doživeti iz kuće. U krugu od 100 km nalaze se
        prelepa prirodna područja i zanimljive znamenitosti. I, naravno, zimski
        sportovi na obližnjem Zlatiboru.
        <br />
        <br />
        Selo je ispred – iza nas počinje put u divljinu. Nakon jednosatnog
        uspona do planinskog vrha, bićete nagrađeni, po uglavnom lepom vremenu,
        zadivljujućim panoramskim pogledom na Dinarske planine Zlatibor i
        planine Nacionalnog parka Tara, sve do Ovčara i Kablara, u kojima se
        takođe može uživati iz kuće. Maglovita reka, koja se povremeno formira
        na visoravni u zavisnosti od vremena, a zatim se kaskadno spušta u
        dolinu pred našim očima, takođe je nezaboravna kada se gleda sa planine.
      </p>
      <div className="img-wrapper breakout">
        <Image
          className="about-img"
          src="/images/lm-1-2048x1365.jpg"
          alt="nature"
          width={900}
          height={600}
          layout="responsive"
        />
      </div>

      <LangSwitcher />
    </section>
  );
};

export default AboutUs;
