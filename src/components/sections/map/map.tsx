import { Title } from "@/components/title/title";
import { FaLocationDot } from "react-icons/fa6";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

import "./mapStyle.css";

const Map = () => {
  const t = useTranslations("Map");
  useGSAP(() => {
    // TEXT
    const tl = gsap.timeline({
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".map-section",
        start: "top 60%"
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

    // MAP
    gsap.fromTo(
      ".map-wrapper",
      {
        autoAlpha: 0,
        filter: "blur(8px)"
      },
      {
        autoAlpha: 1,
        filter: "blur(0)",
        scrollTrigger: {
          trigger: ".map-wrapper",
          start: "top 80%"
        },
        ease: "power1.in"
      }
    );
  });

  return (
    <section className="full-width layout section map-section" id="location">
      <Title as="h2" className="map-section__title breakout">
        {t("title")}
      </Title>

      <div className="map breakout">
        <div className="map-about">
          <p>
            {t("text.part1")}
            <br />
            <br />
            {t("text.part2")}
            <br />
            <br />
            {t("text.part3")}
          </p>
          <div className="map-location">
            <FaLocationDot />
            <span>{t("text.location")}</span>
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
