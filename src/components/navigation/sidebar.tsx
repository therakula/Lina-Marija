import Link from "next/link";
import localFont from "next/font/local";

import LangSwitcher from "../language-switcher/language-switcher";

const Rosehot = localFont({
  src: "../../../public/fonts/Rosehot.ttf",
  fallback: ["sans-serif"]
});

const handleSidebar = () => {
  const checkbox =
    (document.querySelector("#burger-checkbox") as HTMLInputElement) || null;

  if (checkbox && checkbox.checked) {
    checkbox.checked = false;
  }
};

type NavigationKeys =
  | "links.oNama"
  | "links.lokacija"
  | "links.fotografije"
  | "links.kontakt"
  | "links.recenzije"
  | "links.faqs";
type TFunction = (key: NavigationKeys) => string;

interface Props {
  t: TFunction;
}

const Sidebar = ({ t }: Props) => {
  return (
    <div className={`sidebar ${Rosehot.className}`}>
      <ul>
        <li onClick={handleSidebar}>
          <Link href="#about">{t("links.oNama")}</Link>
        </li>
        <li onClick={handleSidebar}>
          {" "}
          <Link href="#location">{t("links.lokacija")}</Link>
        </li>
        <li onClick={handleSidebar}>
          {" "}
          <Link href="#photos">{t("links.fotografije")}</Link>
        </li>
        <li onClick={handleSidebar}>
          {" "}
          <Link href="#contact">{t("links.kontakt")}</Link>
        </li>
        <li onClick={handleSidebar}>
          {" "}
          <Link href="#recenzije">{t("links.recenzije")}</Link>
        </li>
        <li onClick={handleSidebar}>
          {" "}
          <Link href="#cestapitanja">{t("links.faqs")}</Link>
        </li>
        <li>
          <LangSwitcher direction="horizontal" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
