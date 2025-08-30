import localFont from "next/font/local";
import "./hero-style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Image from "next/image";

import heroimage from "../../../public/images/hero-image-55.jpg";

const rosehot = localFont({
  src: "../../../public/fonts/Rosehot.ttf",
  fallback: ["sans-serif"]
});

const Hero = () => {
  useGSAP(() => {
    gsap.to(".hero-title", {
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      filter: "blur(0)",
      ease: "power1.inOut"
    });
  });
  return (
    <section className={`hero ${rosehot.className}`} id="home">
      <Image
        className="hero-image"
        src={heroimage}
        alt="nature"
        fill
        objectFit="cover"
        objectPosition="center"
      />
      <h1 className="hero-title">Lina Marija</h1>
    </section>
  );
};

export default Hero;
