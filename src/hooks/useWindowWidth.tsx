import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<null | number>(null);

  useEffect(() => {
    handleResize();

    function handleResize() {
      const windowWidth = window.innerWidth;
      setWindowWidth(windowWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};
