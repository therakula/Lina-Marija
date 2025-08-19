import "./successStyle.css";
import { useTranslations } from "next-intl";

const Success = ({
  width,
  w2,
  h2
}: {
  width: number;
  w2: number | undefined;
  h2: number | undefined;
}) => {
  const t = useTranslations("Contact");

  return (
    <div
      className="circle-wrapper"
      style={{ width: `${w2}px`, height: `${h2}px` }}
    >
      <div className="cirle-wrapper--item">
        <svg width={width} height={width} viewBox="0 0 400 400" className="svg">
          <circle
            fill="none"
            stroke="#68E534"
            strokeWidth="20"
            cx="200"
            cy="200"
            r="190"
            strokeLinecap="round"
            transform="rotate(-90 200 200)"
            className="circle"
          />
          <polyline
            fill="none"
            stroke="#68E534"
            points="88,214 173,284 304,138"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tick"
          />
        </svg>
        <p className="success-message">{t("successMessage")}</p>
      </div>
    </div>
  );
};

export default Success;
