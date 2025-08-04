import { Title } from "@/components/title/title";
import "./faqsStyle.css";

import { useTranslations } from "next-intl";

//this function returns an array
const detectList = (string: string) => {
  const match = string.match(/<ul\b[^>]*>(.*?)<\/ul>/s);

  if (match) {
    const arr = string.split("<ul>");
    const newArr = arr.map((item) => {
      if (item.match(/<li>(.*?)<\/li>/g)) {
        const a = [...item.matchAll(/<li>(.*?)<\/li>/g)].map(
          (match) => match[1]
        );
        return a;
      } else return item;
    });

    return newArr;
  } else return [string];
};

type ItemProp = {
  question: string;
  answer: string;
};

interface FaqProps {
  item: ItemProp;
  index: number;
}

const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
  const activeCheck = Number(e.currentTarget.id);
  console.log(activeCheck);

  const checkboxInputs = document.querySelectorAll("input[type=checkbox]");

  checkboxInputs.forEach((input) => {
    const el = input as HTMLInputElement;
    if (Number(el.id) !== activeCheck && el.checked) {
      el.checked = false;
    }
  });
};

const Faq = ({ item, index }: FaqProps) => {
  const question = item.question;
  const answer = item.answer;

  const newAnswer = detectList(answer);

  const newAnswerList = newAnswer.filter((item) => Array.isArray(item)).flat();
  const newAnswerString = newAnswer.filter((item) => typeof item === "string");

  return (
    <div className="faq-wrapper" key={index}>
      <label htmlFor={index + ""} className="faq-label">
        {question}
      </label>
      <input
        type="checkbox"
        id={index + ""}
        className="faq-input"
        onChange={handleClick}
      />
      <div className="faq-answer">
        <p>{newAnswerString ? newAnswerString : ""}</p>

        {newAnswerList.length > 0 ? (
          <ul>
            {newAnswerList.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const FaqsSection = () => {
  const keys = [
    "question1",
    "question2",
    "question3",
    "question4",
    "question5",
    "question6",
    "question7"
  ] as const;
  const t = useTranslations("Faq");

  return (
    <section className="faqs-section layout section">
      <Title as="h2">{t("title")}</Title>
      {/* {faqs.map((faq, index) => {
        return <Faq item={faq} index={index} key={index} />;
      })} */}

      {keys.map((key, index) => {
        const question = t(`data.${key}.question`);
        const answer = t.raw(`data.${key}.answer`);

        return <Faq item={{ question, answer }} index={index} key={index} />;
      })}
    </section>
  );
};

export default FaqsSection;
