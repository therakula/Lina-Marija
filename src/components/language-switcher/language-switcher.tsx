import { Link } from "@/i18n/navigation";
import Flag from "react-world-flags";
import "./langSwitcherStyle.css";
import { useLocale } from "next-intl";

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

const LangSwitcher = () => {
  const locale = useLocale();
  return (
    <div className="flags-wrapp select" data-open="false">
      {languages.map((lang) => (
        <div
          className={`option ${locale === lang.path ? "active" : ""}`}
          key={lang.code}
          onClick={() => {
            const select = document.querySelector(".select") as HTMLElement;
            const height = window.getComputedStyle(select).height;
            const parsedHeight = parseInt(height, 10);
            if (select.dataset.open === "false") {
              select.style.height = "auto";
              select.dataset.open = "true";
            } else {
              select.dataset.open = "false";
              select.style.height = `${parsedHeight / 3}px`;
            }
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
