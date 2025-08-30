import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Success from "./success";

import { IoIosSend } from "react-icons/io";
import { SubmitButtonLoader } from "@/components/loaders/submit-button-loader";

import Image from "next/image";
import Link from "next/link";

import { Title } from "@/components/title/title";

import "./contactFormStyle.css";

const inputOptions: React.InputHTMLAttributes<HTMLInputElement> = {
  maxLength: 40,
  minLength: 3,
  required: true
};

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const formWrapperRef = useRef<HTMLDivElement | null>(null);
  const [sent, setSent] = useState<boolean>(false);

  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const t = useTranslations("Contact");

  useEffect(() => {
    if (btnDisabled) {
      setTimeout(() => setBtnDisabled(false), 1000 * 10);
    }
  }, [btnDisabled]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setBtnDisabled(true);

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    console.log(publicKey);
    try {
      await emailjs.sendForm(
        "default_service",
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_US_TEMPLATE_ID!,
        formRef.current!,
        {
          publicKey
        }
      );

      await emailjs.sendForm(
        "default_service",
        process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID!,
        formRef.current!,
        {
          publicKey
        }
      );
      console.log("Both emails sent successfully");
      setSent(true);
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    } finally {
      formRef.current?.reset();
      // setLoading(false);
    }
    setLoading(false);
  };

  useGSAP(() => {
    gsap.fromTo(
      ".contact-title",
      {
        y: 50,
        autoAlpha: 0,
        filter: "blur(10px)"
      },
      {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0)",
        ease: "power3.in",
        scrollTrigger: {
          trigger: ".form-section",
          start: "top 70%"
        }
      }
    );
  });

  return (
    <section className="form-section full-width layout section" id="contact">
      <Title as="h2" className="contact-title">
        {t("title")}
      </Title>
      <div
        className="form-wrapper--outer"
        style={{ backgroundColor: "transparent" }}
        ref={formWrapperRef}
      >
        {sent ? (
          <Success
            width={200}
            w2={formWrapperRef.current?.offsetWidth}
            h2={formWrapperRef.current?.offsetHeight}
          />
        ) : (
          <div className="form-wrapper">
            <div className="form-logo--wrapper">
              <Link href="#home" className="contact-logo__link">
                <Image
                  fill
                  src="/images/contact-form-logo.png"
                  alt="logo"
                  className="navigation-logo"
                />
              </Link>
            </div>
            <Title as="h4">Lina Marija</Title>
            <form
              method="POST"
              action=""
              className="form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="form__group">
                <label htmlFor="name">{t("nameInput")}</label>
                <input
                  type="text"
                  id="name"
                  {...inputOptions}
                  name="from_name"
                  required
                  placeholder="Name"
                />
              </div>
              <div className="form__group">
                <label htmlFor="email">{t("emailInput")}</label>
                <input
                  type="email"
                  id="email"
                  {...inputOptions}
                  name="email"
                  required
                  placeholder="Email"
                />
              </div>
              <div className="form__group">
                <label htmlFor="message">{t("messageInput")}</label>
                <textarea
                  id="message"
                  rows={10}
                  name="message"
                  required
                  placeholder="Message"
                />
              </div>

              <button
                // disabled={!isVerified}
                type="submit"
                className="submit-btn"
              >
                {loading ? <SubmitButtonLoader /> : <IoIosSend />}{" "}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
