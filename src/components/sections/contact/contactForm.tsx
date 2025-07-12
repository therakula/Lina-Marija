import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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

  const [clicked, setClicked] = useState<boolean | undefined>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => setClicked(false), 1000 * 10);
    }
  }, [clicked]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setClicked(true);

    if (!(formRef.current instanceof HTMLElement)) return;

    console.log("SENDING...");
    // emailjs
    //   .sendForm("default_service", "template_t1b0o76", formRef.current, {
    //     publicKey: "bv4v3kt0eysr2h69G"
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error);
    //     }
    //   );
    setLoading(true);
    emailjs
      .sendForm("default_service", "template_00hbveq", formRef.current, {
        publicKey: "bv4v3kt0eysr2h69G"
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    form.reset();
    setTimeout(() => setLoading(false), 1000 * 2);
  };

  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".contact-title",
  //     {
  //       y: 50,
  //       autoAlpha: 0,
  //       filter: "blur(10px)"
  //     },
  //     {
  //       y: 0,
  //       autoAlpha: 1,
  //       filter: "blur(0)",
  //       ease: "power3.in",
  //       scrollTrigger: {
  //         trigger: ".form-section",
  //         start: "top 70%"
  //       }
  //     }
  //   );
  // });

  return (
    <section className="form-section full-width layout section" id="contact">
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
        <Title as="h2">Contact Us</Title>
        <form action="" className="form" ref={formRef} onSubmit={sendEmail}>
          <div className="form__group">
            <label htmlFor="name">Name</label>
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
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={10}
              name="message"
              required
              placeholder="Message"
            />
          </div>

          <button
            disabled={clicked}
            type="submit"
            className={`submit-btn ${loading ? "animation" : ""}`}
          >
            <IoIosSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
