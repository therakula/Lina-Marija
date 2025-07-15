import { Title } from "@/components/title/title";
import "./faqsStyle.css";

const faqs = [
  {
    question: "Gde se nalazi brvnara Lina-Marija?",
    answer:
      "Brvnara se nalazi u selu u Srbiji, u blizini glavne saobraćajne veze između BiH i Srbije i železničke stanice Branešci, između Beograda i Podgorice."
  },
  {
    question: "Da li je kuća dostupna tokom cele godine?",
    answer:
      " Da, brvnara je dostupna tokom cele godine i nudi sadržaje i leti i zimi, uključujući grejanje, toplu vodu i zimsku udobnost (peć na pelet, grejač u kupatilu itd)."
  },
  {
    question: "Koje aktivnosti su dostupne u okolini?",
    answer:
      "<ul><li>Planinarenje direktno iz dvorišta</li><li>Nacionalni parkovi Tara, Zlatibor i Mokra Gora</li><li>Gondola na Zlatiboru</li><li>Kustendorf / Drvengrad</li><li>Most na Đurđevića Tari (Crna Gora)</li><li>Manastir Mileševa</li><li>Tesla hidroelektrana i muzej</li><li>Jokino Vrelo</li></ul>"
  },
  {
    question: "Koliko osoba moze da se smesti u brvnaru?",
    answer:
      "Brvnara je opremljena za do 6 osoba: <ul><li>4 kreveta u galeriji (2+2 koji se mogu spojiti)</li><li>1 kauč na razvlačenje u dnevnoj sobi</li></ul>"
  },
  {
    question: "Da li je kuća pogodna za decu i porodice?",
    answer:
      "Apsolutno! Kuća je mirna, sigurna, okružena prirodom i ima veliko dvorište — idealno za porodice sa decom."
  },
  {
    question: "Postoji li kuhinja i oprema za kuvanje?",
    answer:
      "Da, kuhinja sadrži: <ul><li>Pribor za kuvanje i pečenje</li><li>Posuđe za 6 osoba</li><li>Indukcionu ploču, kuvalo za vodu, kuvalo za jaja</li><li>Frižider i šporet</li></ul>"
  },
  {
    question: " Da li su kućni ljubimci dozvoljeni?",
    answer:
      "Da, kućni ljubimci su dobrodošli! Brvnara Lina-Marija je okružena prirodom i idealna je za boravak sa psima ili drugim kućnim ljubimcima. Molimo vas da nas unapred obavestite ukoliko dolazite sa ljubimcem, kako bismo se najbolje pripremili za vaš dolazak."
  }
];

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

        {newAnswerList ? (
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
  detectList(faqs[5].answer);
  return (
    <section className="faqs-section layout section">
      <Title as="h2">Česta Pitanja</Title>
      {faqs.map((faq, index) => {
        return <Faq item={faq} index={index} key={index} />;
      })}
    </section>
  );
};

export default FaqsSection;
