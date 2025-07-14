import { CustomSlideImage } from "./nextJsImage";

const breakpoints = [1920, 1080, 640, 384];

const photos: CustomSlideImage[] = [
  {
    src: "/images/lm-2-2048x1365.jpg",
    width: 2048,
    height: 1365,
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-3-2048x1365.jpg",
    width: 2048,
    height: 1365,
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-4-2048x1365.jpg",
    width: 2048,
    height: 1365,
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-5-2048x1365.jpg",
    width: 2048,
    height: 1365,
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-6-2048x1365.jpg",
    width: 2048,
    height: 1365,
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-7-2048x1365.jpg",
    width: 2048,
    height: 1365,
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-8-2048x1365.jpg",
    width: 2048,
    height: 1365,
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-9-1365x2048.jpg",
    width: 1365,
    height: 2048,
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-10-1365x2048.jpg",
    width: 1365,
    height: 2048,
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-11-1365x2048.jpg",
    width: 1365,
    height: 2048,
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-12-1365x2048.jpg",
    width: 1365,
    height: 2048,
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-13-2048x1365.jpg",
    width: 2048,
    height: 1365,
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-14-2048x1365.jpg",
    width: 2048,
    height: 1365,
    alt: "Wooden cabin"
  }
].map(({ src, width, height, ...rest }) => {
  return {
    src: src,
    width,
    height,
    srcSet: breakpoints.map((bp) => ({
      src: src,
      width: bp,
      height: Math.round((height! / width!) * bp)
    })),
    ...rest
  };
});

export default photos;
