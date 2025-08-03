import { Title } from "@/components/title/title";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

import { useTranslations } from "next-intl";

import "./aboutUsStyle.css";

const AboutUs = () => {
  const t = useTranslations("About");

  useGSAP(() => {
    // FOR TEXT
    const tl = gsap.timeline({
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom-=100"
        // toggleActions: "restart none restart none"
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
        {t("title")}
      </Title>
      <p className="margin-block-start-l">
        {t("text.part1")}
        <br />
        <br />
        {t("text.part2")}
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
    </section>
  );
};

export default AboutUs;
