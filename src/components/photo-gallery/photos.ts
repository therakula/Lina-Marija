const breakpoints = [1920, 1080, 640, 384];

const photos = [
  {
    src: "/images/lm-2-2048x1365.jpg",
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-3-2048x1365.jpg",
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-4-2048x1365.jpg",
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-5-2048x1365.jpg",
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-6-2048x1365.jpg",
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-7-2048x1365.jpg",
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-8-2048x1365.jpg",
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-9-1365x2048.jpg",
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-10-1365x2048.jpg",
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-11-1365x2048.jpg",
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-12-1365x2048.jpg",
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-13-2048x1365.jpg",
    alt: "Wooden cabin"
  },
  {
    src: "/images/lm-14-2048x1365.jpg",
    alt: "Wooden cabin"
  }
].map(({ src, ...rest }) => {
  const matcher = src.match(/(\d+)x(\d+)\.jpg$/)!;
  const width = Number.parseInt(matcher[1], 10);
  const height = Number.parseInt(matcher[2], 10);

  return {
    src: src,
    width,
    height,
    srcSet: breakpoints.map((bp) => ({
      src: src,
      width: bp,
      height: Math.round((height / width) * bp)
    })),
    ...rest
  };
});

export default photos;
