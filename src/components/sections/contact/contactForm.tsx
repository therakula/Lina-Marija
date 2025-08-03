import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Success from "./success";

import { IoIosSend } from "react-icons/io";

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

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);
  const formWrapperRef = useRef<HTMLDivElement | null>(null);
  const [sent, setSent] = useState<boolean>(false);

  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [isVerified, setIsVerified] = useState<boolean>(false);

  useEffect(() => {
    if (btnDisabled) {
      setTimeout(() => setBtnDisabled(false), 1000 * 10);
    }
  }, [btnDisabled]);

  const HandleCaptchaSubmission = async (token: string | null) => {
    try {
      if (token) {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/application/json"
          },
          body: JSON.stringify({ token })
        });
        const { success } = await res.json();

        if (success) {
          setIsVerified(true);
          console.log("Captcha verified successfully");
        } else setIsVerified(false);
      }
    } catch (error) {
      alert("Something went wrong with the captcha verification.");
      console.log(error);
      return false;
    }
  };

  const handleChange = (token: string | null) => {
    HandleCaptchaSubmission(token);
  };
  const handleExpired = () => {
    setIsVerified(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setBtnDisabled(true);

    if (captchaRef.current) {
      if (isVerified) {
        console.log("Captcha verified successfully");
        try {
          await emailjs.sendForm(
            "default_service",
            "template_00hbveq",
            formRef.current!,
            {
              publicKey: "bv4v3kt0eysr2h69G"
            }
          );

          await emailjs.sendForm(
            "default_service",
            "template_t1b0o76",
            formRef.current!,
            {
              publicKey: "bv4v3kt0eysr2h69G"
            }
          );
          console.log("Both emails sent successfully");
          setSent(true);
        } catch (error) {
          alert("Something went wrong");
          console.log(error);
        } finally {
          captchaRef.current?.reset();
          formRef.current?.reset();
          // setLoading(false);
        }
      } else {
        console.log("Captcha verification failed");
        setLoading(false);
        setBtnDisabled(false);
        return;
      }
    } else {
      console.log("Captcha ref is not defined");
      setLoading(false);
      setBtnDisabled(false);
    }
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

  useEffect(() => {
    console.log("isVerified", isVerified);
  }, [isVerified]);

  return (
    <section className="form-section full-width layout section" id="contact">
      <Title as="h2" className="contact-title">
        Imate Pitanja? Pišite nam
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
              <div className="form-logo--wrapper-inner">
                <Link href="#home">
                  <Image
                    fill
                    src="/images/logo-2.png"
                    alt="logo"
                    className="navigation-logo"
                  />
                </Link>
              </div>
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
                <label htmlFor="name">Ime</label>
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
                <label htmlFor="email">Email</label>
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
                <label htmlFor="message">Poruka</label>
                <textarea
                  id="message"
                  rows={10}
                  name="message"
                  required
                  placeholder="Message"
                />
              </div>

              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                ref={captchaRef}
                onChange={handleChange}
                onExpired={handleExpired}
                className="recaptcha"
              />

              <button
                // disabled={!isVerified}
                type="submit"
                className={`submit-btn ${loading ? "animation" : ""}`}
              >
                <IoIosSend />
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
