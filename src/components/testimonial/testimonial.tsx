import Image from "next/image";
import "./testimonialStyle.css";

import quotes from "/public/images/quotation-marks.png";

import { Title } from "../title/title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { useTranslations } from "next-intl";

import { testimonialArray } from "./testimonialData";

gsap.registerPlugin(ScrollTrigger);

const quotesImageStyle = {
  width: "180px",
  height: "auto"
};

const checkArrows = () => {
  const swiperBtns = document.querySelectorAll(
    "[class^=swiper-button-]"
  ) as NodeListOf<HTMLElement>;

  const paginationWrapper = document.querySelector(
    ".swiper-pagination"
  ) as HTMLElement;

  if (window.innerWidth < 650) {
    swiperBtns.forEach((btn) => (btn.style.display = "none"));
    paginationWrapper.style.display = "block";
  } else {
    swiperBtns.forEach((btn) => (btn.style.display = "block"));
    paginationWrapper.style.display = "none";
  }
};

const TestimonialSwiper = () => {
  const t = useTranslations("Reviews");

  useGSAP(() => {
    // TITLE
    const tl = gsap.timeline({
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".testimonial-title",
        start: "top 70%"
      }
    });

    tl.fromTo(
      ".testimonial-title",
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

    // TESTIMONIALS
    gsap.fromTo(
      ".testimonial-wrap",
      {
        autoAlpha: 0,
        filter: "blur(8px)"
      },
      {
        autoAlpha: 1,
        filter: "blur(0)",
        scrollTrigger: {
          trigger: ".testimonial-wrap",
          start: "top 80%"
        },
        ease: "power1.in"
      }
    );
  });

  return (
    <section
      className="testimonial-section full-width layout section"
      id="recenzije"
    >
      <Title as="h2" className="testimonial-title">
        {t("title")}
      </Title>
      <div className="testimonial-wrap content testimonial-swiper">
        <Image
          className="q-marks"
          src={quotes}
          alt="quoatiotion-marks"
          style={quotesImageStyle}
        />
        <Swiper
          modules={[Navigation, A11y, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onInit={() => checkArrows()}
          onResize={() => checkArrows()}
        >
          {testimonialArray.map((item, index) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
                {({ isActive }) => (
                  <div
                    className="swiper-item__wrapper"
                    style={{ scale: isActive ? "1" : ".8" }}
                  >
                    {t(`data.${item.key}.comment`)
                      .split("/n")
                      .map((line, index) => (
                        <p key={index} style={{ whiteSpace: "pre-line" }}>
                          {line}
                          <br />
                        </p>
                      ))}
                    <div className="testimonial-name-image__wrapper">
                      <Image
                        className={`${isActive ? "active" : ""}`}
                        src={`/images/avatars/avatar-${item.male ? "m" : "w"}-${
                          item.imgNumber
                        }.png`}
                        alt="avatar"
                        width={70}
                        height={70}
                      />{" "}
                      <div className="testimonial-name">
                        {item.name},{" "}
                        <span
                          style={{
                            fontStyle: "italic",
                            color: "var(--accentColor)",
                            fontWeight: "normal",
                            fontSize: "1rem"
                          }}
                        >
                          {item.from}
                        </span>
                        <span className="testimonial-date">
                          {t(`data.${item.key}.date`)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSwiper;
