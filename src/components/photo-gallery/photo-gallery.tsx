import { useEffect, useState } from "react";
import { Title } from "../title/title";

import Lightbox from "yet-another-react-lightbox";
import { RowsPhotoAlbum } from "react-photo-album";

import "yet-another-react-lightbox/styles.css";
import "./photoGalleryStyle.css";
import "react-photo-album/rows.css";

import NextJsImage from "./nextJsImage";

import type { Photo } from "react-photo-album";

// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// photos
import photos from "./photos";
const checkedPhotos: Photo[] = photos.map((photo) => {
  if (typeof photo.width !== "number" || typeof photo.height !== "number") {
    console.log(photo);
    throw new Error("Photo is missing width or height");
  }

  return {
    src: photo.src,
    width: photo.width,
    height: photo.height,
    alt: photo.alt
  };
});

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const handle = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(handle);
  }, []);

  useGSAP(() => {
    // TITLE
    gsap.fromTo(
      ".photo-section__title",
      {
        y: 50,
        autoAlpha: 0,
        filter: "blur(8px)"
      },
      {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0)",
        ease: "power3.in",
        scrollTrigger: {
          trigger: ".photo-gallery",
          start: "top 80%"
        }
      }
    );

    // IMAGES
    gsap.fromTo(
      ".photos-container",
      {
        autoAlpha: 0,
        filter: "blur(8px)"
      },
      {
        autoAlpha: 1,
        filter: "blur(0)",
        scrollTrigger: {
          trigger: ".photos-container",
          start: "top 80%"
        }
      }
    );
  });

  return (
    <section className="section photo-gallery layout" id="photos">
      <Title as="h2" className="photo-section__title breakout">
        Foto Galerija
      </Title>
      <div className="breakout photos-container">
        <RowsPhotoAlbum
          photos={checkedPhotos}
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
