import { useEffect, useState } from "react";
import { Title } from "../title/title";

import Lightbox from "yet-another-react-lightbox";
import { RowsPhotoAlbum } from "react-photo-album";

import "yet-another-react-lightbox/styles.css";
import "./photoGalleryStyle.css";
import "react-photo-album/rows.css";

import NextJsImage from "./nextJsImage";

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import photos from "./photos";
import { useGSAP } from "@gsap/react";

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const handle = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(handle);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".photo-section__title",
      {
        y: 50,
        autoAlpha: 0,
        filter: "blur(10px)"
      },
      {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0)",
        ease: "power3.in",
        scrollTrigger: {
          trigger: ".photo-gallery",
          start: "top 70%"
        }
      }
    );
  });

  return (
    <section className="section photo-gallery layout" id="photos">
      <Title as="h2" className="photo-section__title breakout">
        Foto Galerija
      </Title>
      <div className="breakout">
        <RowsPhotoAlbum
          photos={photos}
          targetRowHeight={300}
          onClick={({ index: current }) => setIndex(current)}
        />

        <Lightbox
          index={index}
          slides={photos}
          open={index >= 0}
          close={() => setIndex(-1)}
          render={{ slide: NextJsImage }}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
