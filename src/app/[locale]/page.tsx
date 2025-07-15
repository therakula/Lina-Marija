"use client";
import { useEffect } from "react";

import Hero from "@/components/hero/hero";
import Navigation from "@/components/navigation/navigation";
import ContactForm from "@/components/sections/contact/contactForm";
import Footer from "@/components/footer/footer";
import TestimonialSwiper from "@/components/testimonial/testimonial";
import Map from "@/components/sections/map/map";
import AboutUs from "@/components/sections/about-us/aboutUs";
import PhotoGallery from "@/components/photo-gallery/photo-gallery";
import FaqsSection from "@/components/sections/faqs/faqs";

import { useWindowWidth } from "@/hooks/useWindowWidth";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const handleNavBg = () => {
  ScrollTrigger.create({
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    onUpdate: (self) => {
      // progress going from 0-1
      const progress = self.progress;
      console.log("progress", progress.toFixed(1));
      // oklch(0.3245 0.0516 224.19 / 81.15%)
      const bg = `oklch(0.3245 0.0516 224.19 / ${
        progress > 0.6 ? 0.6 * 100 : progress * 100
      }%)`;
      const header = document.querySelector(".header") as HTMLElement;
      header.style.backgroundColor = bg;
      console.log("Scroll proggress", progress.toFixed(2));
    }
  });
};

const handleScroll = () => {
  const checkbox =
    (document.querySelector("#burger-checkbox") as HTMLInputElement) || null;
  if (checkbox && checkbox.checked) {
    checkbox.checked = false;
  }
};

const handleScrollPadding = () => {
  const nav = document.querySelector(".header") as HTMLElement;
  const navHeight = nav.offsetHeight;

  document.documentElement.style.setProperty(
    "--scroll-padding-top",
    `${navHeight - 20}px`
  );
};

export default function Home() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const width = useWindowWidth();

  useEffect(() => {
    handleScrollPadding();
  }, [width]);

  useGSAP(() => {
    handleNavBg();
  });

  return (
    <>
      <Navigation />
      <Hero />
      <AboutUs />
      <PhotoGallery />
      <Map />
      <TestimonialSwiper />
      <FaqsSection />
      <ContactForm />
      <Footer />
    </>
  );
}
