import { Title } from "@/components/title/title";
import { FaLocationDot } from "react-icons/fa6";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "./mapStyle.css";

const Map = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".map-section",
        start: "top 60%",
        toggleActions: "play none none none"
      }
    });
    tl.fromTo(
      ".map-section__title",
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
      ".map-about p",
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
  });

  return (
    <section className="full-width layout section map-section" id="location">
      <Title as="h2" className="map-section__title breakout">
        Gde se Nalazimo?
      </Title>

      <div className="map breakout">
        <div className="map-about">
          <p>
            Okruženi divnim rezervatima prirode usred slikovitog pejzaža,
            nalazimo se centralno, na samo 2 km od glavne saobraćajne veze
            između BiH i Srbije, i železničke stanice Branešci, koja se nalazi
            na železničkoj pruzi između Beograda i Podgorice.
            <br />
            <br />U blizini su i poznata mesta, poput Višegrada, udaljenog 50
            km, u istorijski bogatoj Bosni i Hercegovini, domu zapanjujućeg
            „Mosta na Drini“, koji je inspirisao autora Iva Andrića da napiše
            istoimeni roman, za koji je dobio Nobelovu nagradu za knjizevnost.
            <br />
            <br />
            Rezervati prirode Tara, Zlatibor i Mokra Gora lako su dostupni na
            manje od 50 kilometara.
          </p>
          <div className="map-location">
            <FaLocationDot />
            <span>Podgorica 36, Šljivovica, Sainovina, Čajetina</span>
          </div>
        </div>
        <div className="map-wrapper">
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=43%C2%B046'39.4%22N%2019%C2%B040'03.6%22E+(My%20Business%20Name)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
