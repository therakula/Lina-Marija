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

gsap.registerPlugin(ScrollTrigger);

type fromProps = "Booking" | "Airbnb";

interface Testimonial {
  male: boolean;
  text: string;
  name: string;
  imgNumber: number;
  from: fromProps;
}

const testimonialArray: Testimonial[] = [
  {
    male: false,
    text: "„Kućica Lina-Marija je pravi raj za ljubitelje čiste prirode, planinarenja i tišine. Smeštena je u netaknutoj prirodi, a ipak lako dostupna. Kućica je okružena mirisnom četinarskom šumom i pogledom na proplanke, nudi potpuni mir i povezanost sa prirodom. Posebno smo uživali u dugim šetnjama i planinarenju – staze kreću direktno iz dvorišta kuće, lako su dostupne i vode kroz raznolike predele (uz potok, preko golih brda i kroz mirisnu četinarsku šumu; možete sresti konje, kao i razne divlje i domaće životinje).”",
    name: "Milena",
    imgNumber: 1,
    from: "Booking"
  },
  {
    male: true,
    text: "„Prelep ambijent, na jako maloj udaljenosti od centra Zlatibora, pruža autentičan doživljaj planine. Maksimalno korektan domaćin, sve čisto i sve po dogovoru. Preporuka.” ",
    name: "Nenad",
    imgNumber: 2,
    from: "Booking"
  },
  {
    male: true,
    text: "Mesto je magično, sjajno i izgleda mnogo, mnogo bolje nego što možete videti na fotografijama. Okolina je predivna, enterijer veoma udoban. Obično iznajmljujem smeštaj samo da prenoćim i nastavim avanturu, kao što je bilo i u ovom slučaju. Ali mesto je toliko mirno i lepo da sam siguran da ćemo se vratiti na duži period samo da uživamo u njemu. Hvala Radovanu i njegovoj ženi na tako sjajnom smeštaju.",
    name: "Pavel",
    imgNumber: 3,
    from: "Airbnb"
  }
];

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
    <section className="testimonial-section full-width layout section">
      <Title as="h2" className="testimonial-title">
        Sta drugi kazu o nama
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
                    <p>{item.text}</p>
                    <div className="testimonial-name-image__wrapper">
                      <Image
                        className={`${isActive ? "active" : null}`}
                        src={`/images/avatars/avatar-${item.male ? "m" : "w"}-${
                          item.imgNumber
                        }.png`}
                        alt="avatar"
                        width={70}
                        height={70}
                      />{" "}
                      {item.name},{" "}
                      <span
                        style={{
                          fontStyle: "italic",
                          color: "var(--accentColor)",
                          fontWeight: "normal"
                        }}
                      >
                        {item.from}
                      </span>
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
