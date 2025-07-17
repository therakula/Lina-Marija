import { Link } from "@/i18n/navigation";
import Flag from "react-world-flags";
import "./langSwitcherStyle.css";
import { useLocale } from "next-intl";
import { useRef } from "react";

const languages = [
  {
    code: "sr",
    path: "sr-RS",
    label: "Serbian",
    flag: <Flag code="rs" className="flag" />
  },
  {
    code: "gb",
    path: "en-GB",
    label: "English",
    flag: <Flag code="gb" className="flag" />
  },
  {
    code: "de",
    path: "de-DE",
    label: "German",
    flag: <Flag code="de" className="flag" />
  }
];

const toggleOpen = (el: HTMLDivElement) => {
  if (!el) return;

  el.classList.toggle("open");
};

type DirectionProp = {
  direction: "vertical" | "horizontal";
};

const LangSwitcher = ({ direction }: DirectionProp) => {
  const locale = useLocale();
  const refWrapper = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flags-wrapp select"
      data-open="false"
      ref={refWrapper}
      data-direction={direction}
    >
      {languages.map((lang) => (
        <div
          className={`option ${locale === lang.path ? "active" : ""}`}
          key={lang.code}
          onClick={() => {
            toggleOpen(refWrapper.current!);
          }}
        >
          <Link
            href="/"
            locale={lang.path}
            onClick={(e) => {
              if (locale === lang.path) e.preventDefault();
            }}
          >
            {lang.flag}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LangSwitcher;
